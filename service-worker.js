/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "1.jpeg",
    "revision": "e01e6434c0106d634b27e693cd9c13a2"
  },
  {
    "url": "2.jpeg",
    "revision": "8a01e649a335bde2478c53f6e04a2d30"
  },
  {
    "url": "3.jpeg",
    "revision": "c83fbf16b12b4f9ddd83b79235a94f09"
  },
  {
    "url": "4.jpeg",
    "revision": "b016e356a0ea52104f6f466de76bc66a"
  },
  {
    "url": "404.html",
    "revision": "e083c55e73fbd3c53ec34c3d1a8b82e9"
  },
  {
    "url": "5.jpeg",
    "revision": "ff00ccffeeeedebacc53fb2f02e52fea"
  },
  {
    "url": "assets/css/0.styles.2163bcaa.css",
    "revision": "89e8f5db8c8e289cb03f24f1635c6ce4"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.470dfb6d.js",
    "revision": "45cdf76ce126783974cf1e64dc40d187"
  },
  {
    "url": "assets/js/11.3ef22147.js",
    "revision": "44d80c123076201339d8cc6b6c71a1ab"
  },
  {
    "url": "assets/js/12.1078b9db.js",
    "revision": "130a92d3679daa5c8ea754c1a2d44cfc"
  },
  {
    "url": "assets/js/13.e30e191f.js",
    "revision": "e49b0b8f388edcce598a0363f96930b1"
  },
  {
    "url": "assets/js/14.7e523d97.js",
    "revision": "585add958a064329f0f96eb126d271a1"
  },
  {
    "url": "assets/js/15.214073fb.js",
    "revision": "a369083a68050987bbba5d8b157c1ccd"
  },
  {
    "url": "assets/js/16.d405661d.js",
    "revision": "c4452ce83b3116c9e260f6f53907272b"
  },
  {
    "url": "assets/js/17.e7074638.js",
    "revision": "e5a5e0c6ed5d129f1f7c690d75f7491b"
  },
  {
    "url": "assets/js/18.ac700e96.js",
    "revision": "674afc0ab38f2adf5aedf4f9248930c6"
  },
  {
    "url": "assets/js/19.4ed32732.js",
    "revision": "d15c3fcca3796d646f862beb81cf087c"
  },
  {
    "url": "assets/js/20.92dbd837.js",
    "revision": "4cca68133f505a66c046a18e2db82faf"
  },
  {
    "url": "assets/js/21.d37ecdb8.js",
    "revision": "dd2b3811ac4bbfc74e257ae1d06d69de"
  },
  {
    "url": "assets/js/22.d5462217.js",
    "revision": "ec45bd68fb0202deedb59e0b319cadb5"
  },
  {
    "url": "assets/js/23.ee59309e.js",
    "revision": "281c677230879d81bc408e831c15a5da"
  },
  {
    "url": "assets/js/24.0a02ff84.js",
    "revision": "7de77ddf20e6168ebb0e768878df7ad8"
  },
  {
    "url": "assets/js/25.bbe7aa59.js",
    "revision": "411ee3eea543ccdb2b1a03eee08117d1"
  },
  {
    "url": "assets/js/26.7d67af69.js",
    "revision": "cb8fc3b1f8aa29e78435120f2aaa901d"
  },
  {
    "url": "assets/js/27.7ff62f7f.js",
    "revision": "d358db32d5e9c51861619458c6fed5f2"
  },
  {
    "url": "assets/js/28.5342a643.js",
    "revision": "dab67799f2d0844f6462a4ca8d5c1aad"
  },
  {
    "url": "assets/js/29.17bba851.js",
    "revision": "7c1f65c77785a3dcba57ec289eec8dca"
  },
  {
    "url": "assets/js/3.43011e0b.js",
    "revision": "5797deaa03045b030430492a8e0011b9"
  },
  {
    "url": "assets/js/30.d95ba395.js",
    "revision": "ee4e4c070bf222efb497cd70fa4dc6b8"
  },
  {
    "url": "assets/js/31.fa21b093.js",
    "revision": "6d249099fd9f1a2f041b160a239cd5ec"
  },
  {
    "url": "assets/js/32.9a9832fa.js",
    "revision": "8b6f63202f24af4defa237f766c8c1c1"
  },
  {
    "url": "assets/js/4.a48f21e3.js",
    "revision": "7d38217966a9fddd7df10ac2859bf85a"
  },
  {
    "url": "assets/js/5.eed9ec6e.js",
    "revision": "68cc6aa016ddd721401876b530aceca9"
  },
  {
    "url": "assets/js/6.94a14664.js",
    "revision": "65287ea1215ffad237081e484b710c69"
  },
  {
    "url": "assets/js/7.52aff822.js",
    "revision": "12ff1643e4d3edc9d3488daffc0e4a30"
  },
  {
    "url": "assets/js/8.6e89422d.js",
    "revision": "fc3b99511e95704d8b93a0d268167d75"
  },
  {
    "url": "assets/js/9.aadac41b.js",
    "revision": "9c0067f8986efe6e701b6d25f25b0073"
  },
  {
    "url": "assets/js/app.3c026101.js",
    "revision": "99f8569375f276c44b3cb2604cec28ea"
  },
  {
    "url": "assets/js/vendors~notification.c4421e20.js",
    "revision": "76078ea184902799882af0b3ccb56b70"
  },
  {
    "url": "chat.png",
    "revision": "39fad2947246c8676d8ae34c47939d10"
  },
  {
    "url": "coffee.jpeg",
    "revision": "f4fb651968cef56e279e1c10ed51b053"
  },
  {
    "url": "frp.png",
    "revision": "ddd3398a3de5a3ea2ba77881487787e5"
  },
  {
    "url": "guide/common/accesstoken.html",
    "revision": "325a16781beac15994800595832cd024"
  },
  {
    "url": "guide/common/init.html",
    "revision": "dc4aa0a53cf4d8bef08ba215dc8a1769"
  },
  {
    "url": "guide/donate/index.html",
    "revision": "0bcfd0a15242823aa28321c780e52806"
  },
  {
    "url": "guide/index.html",
    "revision": "8a2551c1e0ffcdfd24fe805a20687cd9"
  },
  {
    "url": "guide/miniprogram/login.html",
    "revision": "2ca74842845fff2d2ecdb8c61d0d653a"
  },
  {
    "url": "guide/miniprogram/ocr.html",
    "revision": "befd39428ff1aa1e5fcf73afaa490c7a"
  },
  {
    "url": "guide/miniprogram/qrcode.html",
    "revision": "cb774ff218d70c97f065c2b4bec432f1"
  },
  {
    "url": "guide/miniprogram/subscribemsg.html",
    "revision": "d5a86229368f301491600e72bcf0610d"
  },
  {
    "url": "guide/tools/frp.html",
    "revision": "07531ec5a2dbf77da3fa68b4e9b41a89"
  },
  {
    "url": "guide/wxcp/callback.html",
    "revision": "8da6373e4c45966c5d1d631abc09d830"
  },
  {
    "url": "guide/wxcp/handmsg.html",
    "revision": "6cee1f2a3ea91c91cb00a1ecf08d1173"
  },
  {
    "url": "guide/wxcp/media.html",
    "revision": "0610b828c19b4cc379919fd109bd58e5"
  },
  {
    "url": "guide/wxcp/oauth.html",
    "revision": "b7a896f386f70873fbf4a0813aba08f5"
  },
  {
    "url": "guide/wxcp/sendmsg.html",
    "revision": "0f5acb0aeffbd1a3014e3a7e939a4973"
  },
  {
    "url": "guide/wxmp/callback.html",
    "revision": "84ae683c142044032ff676c033a5dfd3"
  },
  {
    "url": "guide/wxmp/custom_menu.html",
    "revision": "335100b5d49ab28ba00268fd89591f0c"
  },
  {
    "url": "guide/wxmp/jssdk.html",
    "revision": "0ce1b95eac12b04d9657f537e4f632c3"
  },
  {
    "url": "guide/wxmp/oauth.html",
    "revision": "a6d3f4ad7bff045b158bd3e643075402"
  },
  {
    "url": "guide/wxmp/sendmsg.html",
    "revision": "1cfe71d2b135ca6ad66f665f6e947eb2"
  },
  {
    "url": "guide/wxmp/templatemsg.html",
    "revision": "81e9ab56933f244410e14e1e365f282a"
  },
  {
    "url": "guide/wxpay/api-v2.html",
    "revision": "18496572195fd9fc343e8ccc283e7e81"
  },
  {
    "url": "guide/wxpay/api-v3.html",
    "revision": "f6b20e41120c98ca5d112aab9d3b0958"
  },
  {
    "url": "guide/wxpay/index.html",
    "revision": "007e8f63a7114564ef50eabceefc305a"
  },
  {
    "url": "index.html",
    "revision": "c4f443b4d6abb7479b6093d3256da3a1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
