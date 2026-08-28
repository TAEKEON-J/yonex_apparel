const CACHE = 'yonex-lookbook-v1';
const SHELL = [
  './lookbook.html',
  './manifest.webmanifest',
  './images/icons/icon-192.png',
  './images/icons/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
  );
  self.clients.claim();
});

/* app shell (lookbook.html itself): network first so a fresh deploy is
   picked up immediately, falling back to the cached copy when offline.
   everything else (product photos, fonts): just pass through to the
   network as usual — caching hundreds of images would bloat storage
   and risk serving stale product art. */
self.addEventListener('fetch', e => {
  if (e.request.mode !== 'navigate' && !SHELL.some(p => e.request.url.endsWith(p.replace('./', '')))) return;
  e.respondWith(
    fetch(e.request)
      .then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
        return res;
      })
      .catch(() => caches.match(e.request).then(res => res || caches.match('./lookbook.html')))
  );
});
