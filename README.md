```
$ yarn
$ shadow-cljs watch app
;; wait for first compile to finish or expo gets confused
$ yarn start

;; production build
$ shadow-cljs release app
$ expo build:android
$ expo build:ios
```

You can also use `expo start --web` in order to run [react native web](https://github.com/necolas/react-native-web).

## Tests

You can find an example of using `jest` to test `react-native` apps here.

- https://github.com/mynomoto/reagent-expo/tree/jest-test

## Notes

The `:app` build will create an `app/index.js`. In `release` mode that is the only file needed. In dev mode the `app` directory will contain many more `.js` files.

`:init-fn` is called after all files are loaded and in the case of `expo` must render something synchronously as it will otherwise complain about a missing root component. The `shadow.expo/render-root` takes care of registration and setup.

You should disable the Fast Refresh stuff in the Expo app and let `shadow-cljs` handle that instead as they will otherwise interfere with each other.

Source maps don't seem to work properly. `metro` propably doesn't read input source maps when converting sources as things are correctly mapped to the source .js files but not their sources.

Initial load in dev is quite slow since `metro` processes the generated `.js` files.
