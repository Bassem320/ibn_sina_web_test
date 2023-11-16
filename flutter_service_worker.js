'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "d7544a26a08e5cf3fce331de8d5593db",
"assets/AssetManifest.json": "5bbce680555f1840e30feae546d8940d",
"assets/assets/fonts/Cairo-Bold.ttf": "e558b6a116119d88b796afd3254cc864",
"assets/assets/fonts/Lateef-Bold.ttf": "ff1a44db5e4df2c14fdc1ca88ed7867d",
"assets/assets/fonts/Lateef-ExtraBold.ttf": "464e2b8a09a13205254d0d16fc155046",
"assets/assets/fonts/Lateef-ExtraLight.ttf": "4608ea6799fc030bae7544ef2f894869",
"assets/assets/fonts/Lateef-Light.ttf": "3c00a90fea45053b76706f5c75313ff6",
"assets/assets/fonts/Lateef-Medium.ttf": "17231f4da77ed0dd478f11143e572387",
"assets/assets/fonts/Lateef-Regular.ttf": "ef21af905943899e77fdc25b7c0d8fbf",
"assets/assets/fonts/Lateef-SemiBold.ttf": "033ec16a93dfe9cdd4e49551c2b025f8",
"assets/assets/fonts/NotoNaskhArabic-VariableFont_wght.ttf": "bb104dccf02b8a20411a26811aa4b4a2",
"assets/assets/icons/approved.svg": "cb366aaee910f08bba36dee6f8f6af4f",
"assets/assets/icons/date.svg": "a8219582e3c1271841920c75ec0a84db",
"assets/assets/icons/expired.svg": "a5149a75d0c3b304adb1a22ed042c90d",
"assets/assets/icons/gender.svg": "b91d62bb8430d2204801ec19fdf79bc8",
"assets/assets/icons/id.svg": "12b4e67ac269c0370facae1f2a626c10",
"assets/assets/icons/logo.png": "505936517a384b85a44ee280a95ffa78",
"assets/assets/icons/pending.svg": "7fea0fcc291fe706ff7d61ff2e79e6e2",
"assets/assets/icons/profile.svg": "1ec026c619099879c7e3805bc60d7338",
"assets/assets/icons/telephone.svg": "3f6e190cea3af1dc8ecd892ff0435ea4",
"assets/assets/images/empty_list.svg": "ec0c39e4301f48e50012ef680a661104",
"assets/assets/images/image.svg": "6fce1e675ec907304f3701f74c738a52",
"assets/assets/images/intro.svg": "02668b11d2fed19ed2ad81e073fbdf04",
"assets/assets/images/intro1.svg": "cc348185f7cc4a5d8f8847076ae535b8",
"assets/assets/images/intro2.svg": "91a83eae638cb0eca3cf20192d9847a5",
"assets/assets/images/intro3.svg": "c1927d3d711b26b6f7d508d9b19f7022",
"assets/assets/images/intro_back.svg": "be72f08c5fdd12d0d3b797d3763d320d",
"assets/assets/images/logo.png": "505936517a384b85a44ee280a95ffa78",
"assets/assets/images/offline.svg": "ed6f3059f37ac22322752a7c9ccbddc8",
"assets/assets/locales/ar.json": "f161aecfcfabbbbfc1b55dd0bf95a46e",
"assets/assets/locales/en.json": "74497531e489dd2a065534f112a58284",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "53e28dfddd8db287b30ea011625b8091",
"assets/NOTICES": "7e65bf2b8733f56e369c8a6a4227f895",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/map_launcher/assets/icons/amap.svg": "00409535b144c70322cd4600de82657c",
"assets/packages/map_launcher/assets/icons/apple.svg": "6fe49a5ae50a4c603897f6f54dec16a8",
"assets/packages/map_launcher/assets/icons/baidu.svg": "22335d62432f9d5aac833bcccfa5cfe8",
"assets/packages/map_launcher/assets/icons/citymapper.svg": "58c49ff6df286e325c21a28ebf783ebe",
"assets/packages/map_launcher/assets/icons/doubleGis.svg": "ab8f52395c01fcd87ed3e2ed9660966e",
"assets/packages/map_launcher/assets/icons/google.svg": "cb318c1fc31719ceda4073d8ca38fc1e",
"assets/packages/map_launcher/assets/icons/googleGo.svg": "cb318c1fc31719ceda4073d8ca38fc1e",
"assets/packages/map_launcher/assets/icons/here.svg": "aea2492cde15953de7bb2ab1487fd4c7",
"assets/packages/map_launcher/assets/icons/mapswithme.svg": "87df7956e58cae949e88a0c744ca49e8",
"assets/packages/map_launcher/assets/icons/osmand.svg": "639b2304776a6794ec682a926dbcbc4c",
"assets/packages/map_launcher/assets/icons/osmandplus.svg": "31c36b1f20dc45a88c283e928583736f",
"assets/packages/map_launcher/assets/icons/petal.svg": "76c9cfa1bfefb298416cfef6a13a70c5",
"assets/packages/map_launcher/assets/icons/tencent.svg": "4e1babec6bbab0159bdc204932193a89",
"assets/packages/map_launcher/assets/icons/tomtomgo.svg": "493b0844a3218a19b1c80c92c060bba7",
"assets/packages/map_launcher/assets/icons/waze.svg": "311a17de2a40c8fa1dd9022d4e12982c",
"assets/packages/map_launcher/assets/icons/yandexMaps.svg": "3dfd1d365352408e86c9c57fef238eed",
"assets/packages/map_launcher/assets/icons/yandexNavi.svg": "bad6bf6aebd1e0d711f3c7ed9497e9a3",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "d3bb96c6f5afa996e7ddda3e46e6d0ba",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "89c575314e15d41ea649243e7be39b16",
"icons/Icon-512.png": "b8b6d43014d1ae629a52665176655bf4",
"icons/Icon-maskable-192.png": "89c575314e15d41ea649243e7be39b16",
"icons/Icon-maskable-512.png": "b8b6d43014d1ae629a52665176655bf4",
"index.html": "259aa683adfe8993d87ac60a9587a261",
"/": "259aa683adfe8993d87ac60a9587a261",
"main.dart.js": "03b70ca4e14088fdd6167ca415e3bf56",
"manifest.json": "eb4ac8571b3089c0c621280bbcd20926",
"version.json": "0764c76ea5e408de5ea0bf56a66a62c6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
