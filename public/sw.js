importScripts("/public/u/bundle.js");
importScripts("/public/u/config.js");
importScripts(__uv$config.sw || "./public/sw.js");

const sw = new UVServiceWorker();

self.addEventListener("fetch", (event) => event.respondWith(sw.fetch(event)));
