(ns test.logo
  (:require
    [helix.core :refer [defnc $]]
    ["react-native-svg" :refer [Svg Circle Defs G Mask Path]]))

(defnc logo [{:keys [width height], :or {width 39, height 39}}]
  ($ Svg {:xmlns "http://www.w3.org/2000/svg"
          :viewBox "0 0 400 400"
          :width width
          :height height}
     ($ Defs
        ($ Mask {:fill "#fff", :id "mask"}
           ($ Circle {:r 200, :cx 200, :cy 200})))
     ($ Circle {:r 199, :cx 200, :cy 200, :stroke "#e7e7e7", :strokeWidth 1, :fill "#fff"})
     ($ G {:fillRule "evenodd", :fill "none", :strokeWidth 0, :mask "url(#mask)",
           :transform "scale(0.92) translate(16, 16)"}
        ($ Circle {:r 200, :cx 200, :cy 200, :fill "#4f80df"})
        ($ Circle {:r 71.5, :cx 370, :cy 200, :fill "#89b4ff"})
        ($ Circle {:r 180, :cx 60, :cy 360, :fill "#40b400"})
        ($ Circle {:r 129, :cx 280, :cy 320, :fill "#76e013"})
        ($ G
           ($ Path {:strokeLinecap "square"
                    :strokeWidth 16
                    :stroke "#aaa"
                    :d "M257.184 151.416c0-66.632-98.8-62.444-98.8 0S275.09 181.865 275.09 258.9 145 335.852 145 261.708"}))
        ($ Path {:strokeLinecap "square"
                 :strokeWidth 16
                 :stroke "#fff"
                 :d "M247.184 141.416c0-66.632-98.8-62.444-98.8 0S265.09 171.865 265.09 248.9 135 325.852 135 251.708"}))))
