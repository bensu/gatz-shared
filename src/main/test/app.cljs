(ns test.app
  (:require
    ["expo-status-bar" :as esb]
    ["react" :as react]
    ["react-native" :as rn]
    [helix.core :refer [defnc $]]
    [shadow.expo :as expo]
    [test.logo :as logo]))

;; must use defonce and must refresh full app so metro can fill these in
;; at live-reload time `require` does not exist and will cause errors
;; must use path relative to :output-dir

(defonce splash-img (js/require "../assets/shadow-cljs.png"))

(def styles
  ^js (-> {:container
           {:flex 1
            :backgroundColor "#fff"
            :alignItems "center"
            :justifyContent "space-around"}
           :title
           {:fontWeight "bold"
            :fontSize 24
            :color "blue"}}
          (clj->js)
          (rn/StyleSheet.create)))

(defnc root []
  ($ rn/View {:style (.-container styles)}
     ($ rn/Text {:style (.-title styles)} "Hello!")
     ($ logo/logo {:width 200, :height 200})
     ($ rn/Image {:source splash-img :style #js {:width 200 :height 200}})
     ($ esb/StatusBar {:style "auto"})))

(defn start
  {:dev/after-load true}
  []
  (expo/render-root ($ root)))

(defn init []
  (start))
