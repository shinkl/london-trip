const CACHE_NAME = 'london-trip-v1';
const ASSETS_TO_CACHE = [
  './index.html',
  './manifest.json',
  './icon.png',
  // 如果你有放圖片，建議把圖片檔名也加進來，例如：
  // './tower.jpg',
  // './market.jpg',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});