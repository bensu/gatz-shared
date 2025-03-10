(ns gatz.expo.core
  (:require [crdt.core :as crdt]
            [crdt.ulid]
            [cljs.reader :as reader])
  (:import [crdt.core HLC]))

;; Export core CRDT constructors
(defn ^:export new-lww [clock value]
  (crdt/->LWW clock value))

(defn ^:export new-min-wins [value]
  (crdt/min-wins value))

(defn ^:export new-max-wins [value]
  (crdt/max-wins value))

(defn ^:export new-grow-only-set [values]
  (crdt/gos (js->clj values)))

(defn ^:export new-lww-set [clock values]
  (crdt/lww-set clock (js->clj values)))

;; Export core CRDT operations
(defn ^:export merge-crdts [a b]
  (crdt/-merge a b))

(defn ^:export apply-delta [crdt delta]
  (crdt/-apply-delta crdt delta))

(defn ^:export get-value [crdt]
  (clj->js (crdt/-value crdt)))

;; Export clock utilities
(defn ^:export new-hlc [node-id]
  (crdt/new-hlc node-id (js/Date.)))

;; Helper for reading CRDT literals from strings
(defn ^:export read-crdt [edn-str]
  (reader/read-string edn-str))

;; Example usage from JavaScript:
;; 
;; import { newHlc, newLww, getValue, mergeCrdts } from './cljs-out/gatz.expo.core';
;; 
;; const nodeId = '123e4567-e89b-12d3-a456-426614174000';
;; const clock = new_hlc(nodeId);
;; const lww1 = new_lww(clock, "value1");
;; const lww2 = new_lww(clock, "value2");
;; const merged = merge_crdts(lww1, lww2);
;; console.log(get_value(merged)); // "value2"

;; ============================================================
;; HTTP

(defn ^:export read-edn [edn-str]
  (reader/read-string
   #_{:readers {'crdt/ulid ulid/read-ulid "crdt/ulid" ulid/read-ulid}
      :default @reader/*default-data-reader-fn*
      :eof nil}
   edn-str))

(defn get! [base-url token url]
  (.then
   (.then (js/fetch (str base-url url)
                    #js {:headers #js {"Authorization" token
                                       "Accept" "application/edn"
                                       "Content-Type" "application/edn"}})
          (fn [response]
            (.text response)))
   (fn [text]
     (js/console.log text)
     (let [parse (read-edn text)]
       (js/console.log parse)
       parse))))

(defn post! [base-url token url data]
  (.then
   (.then (js/fetch (str base-url url)
                    #js {:headers #js {"Authorization" token
                                       "Accept" "application/edn"
                                       "Content-Type" "application/edn"}
                         :method "POST"
                         :body (pr-str data)})
          (fn [response]
            (.text response)))
   (fn [text]
     (js/console.log text)
     (let [parse (read-edn text)]
       (js/console.log parse)
       parse))))


(defn get-user! [base-url token]
  (.then (get! base-url token "/api/me/crdt")
         (fn [response]
           (:user response))))

(defn send-user-action! [base-url token action]
  (.then (post! base-url token "/api/me/crdt" {:action action})
         (fn [response]
           (:user response))))

;; ============================================================
;; User CRDT

(defprotocol ISyncEngine
  (-tick [_])
  (-merge-to-me [_ delta])
  (-sync-user [_])
  (-subscribe-to-me [_ listener-name callback])
  (-unsubscribe-from-me [_ listener-name])
  (-handle-ws-edn [_ edn]))

(defprotocol IClient
  (-get-user [client])
  (-send-user-action! [client action]))

(defmulti handle-evt! (fn [_sync evt] (:event/type evt)))

(defmethod handle-evt! :gatz.crdt.user/delta
  [sync evt]
  (let [action (:event/data evt)
        delta  (:delta action)]
    (-merge-to-me sync delta)))

(deftype SyncEngine [base-url token user-id user-atom]
  IClient
  (-get-user [_]
    (get-user! base-url token))
  (-send-user-action! [_ action]
    (send-user-action! base-url token action))

  ISyncEngine
  (-tick [_]
    (crdt/new-hlc user-id))
  (-sync-user [this]
    (.then (get-user! base-url token)
           (fn [user]
             (-merge-to-me this user))))
  (-merge-to-me [_ delta]
    (swap! user-atom (fn [old]
                       (if old
                         (crdt/-apply-delta old delta)
                         delta))))
  (-subscribe-to-me [this listener-name callback]
    (assert (fn? callback) "callback must be a function")
    (when-not @user-atom
      (-sync-user this))
    (add-watch user-atom listener-name (fn [_ _ old new]
                                         (when-not (= old new)
                                           (callback new)))))
  (-unsubscribe-from-me [_ listener-name]
    (remove-watch user-atom listener-name))
  (-handle-ws-edn [this edn]
    (handle-evt! this edn)))

(defn ^:export new-sync-engine [base-url token user-id]
  (SyncEngine. base-url token (uuid user-id) (atom nil)))

(defn ^:export set-full-name [sync full-name]
  (let [lww (crdt/lww (-tick sync) full-name)
        ^HLC clock (-tick sync)
        delta {:crdt/clock clock
               :user/updated_at (.-ts clock)
               :user/profile {:profile/full_name lww}}
        action {:gatz.crdt.user/action :gatz.crdt.user/update-profile
                :gatz.crdt.user/delta delta}]
    (-merge-to-me sync delta)
    (-send-user-action! sync action)))

(defn ^:export subscribe-to-me [sync lid callback]
  (-subscribe-to-me sync lid (fn [new]
                               (callback (clj->js (crdt/-value new)))))
  (fn [] (-unsubscribe-from-me sync lid)))

(defn ^:export handle-ws-edn [sync edn]
  (-handle-ws-edn sync edn))
