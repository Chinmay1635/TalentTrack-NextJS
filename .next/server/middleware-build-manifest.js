self.__BUILD_MANIFEST = {
  "polyfillFiles": [
    "static/chunks/polyfills.js"
  ],
  "devFiles": [
    "static/chunks/react-refresh.js"
  ],
  "ampDevFiles": [],
  "lowPriorityFiles": [],
  "rootMainFiles": [],
  "pages": {
    "/_app": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/_app.js"
    ],
    "/_error": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/_error.js"
    ],
    "/athlete/academies": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/athlete/academies.js"
    ],
    "/athlete/tournaments": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/athlete/tournaments.js"
    ],
    "/athlete/training": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/athlete/training.js"
    ]
  },
  "ampFirstPages": []
};
self.__BUILD_MANIFEST.lowPriorityFiles = [
"/static/" + process.env.__NEXT_BUILD_ID + "/_buildManifest.js",
,"/static/" + process.env.__NEXT_BUILD_ID + "/_ssgManifest.js",

];