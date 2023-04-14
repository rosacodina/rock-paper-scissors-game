const CACHE_NAME = "my-app-cache";

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(CACHE => caches.addAll([
      "/",
      "/game-app.js",
      "/home-app.js",
      "/header-app.js",
      "/game-view.js",
    ]))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request) 
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});