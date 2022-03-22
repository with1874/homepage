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
    "url": "404.html",
    "revision": "1e52a99e71df24da5d8176383fbc6f57"
  },
  {
    "url": "archives/index.html",
    "revision": "b4e67a23dd84be61565f07eedc2a536b"
  },
  {
    "url": "assets/css/0.styles.4346b530.css",
    "revision": "a9fc191528ac4a07046fd3bb5982f237"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.6a75ef64.js",
    "revision": "4ec57f631153759b1741f5f5d5afeec4"
  },
  {
    "url": "assets/js/11.7f790357.js",
    "revision": "cdc640bca30b215a07245cfd3a6f6f9f"
  },
  {
    "url": "assets/js/12.c67e11b2.js",
    "revision": "658e2aab0f05881e54f83e00a4607f8d"
  },
  {
    "url": "assets/js/13.52a721d4.js",
    "revision": "b4a5f62093d1f1fa09bc3b4ff42c03d7"
  },
  {
    "url": "assets/js/14.b62d0cfe.js",
    "revision": "8b30bc1a304acdb92df39acc9f3b21e8"
  },
  {
    "url": "assets/js/15.b1c5a771.js",
    "revision": "21daf10676156abb3f51210570daf0fd"
  },
  {
    "url": "assets/js/16.4f3c7ee7.js",
    "revision": "3d0b2a2f130eeee79dbc39a412cab33f"
  },
  {
    "url": "assets/js/17.dd7d4bec.js",
    "revision": "c2ae90033076a1a3970866032076485b"
  },
  {
    "url": "assets/js/18.28fae88a.js",
    "revision": "7bdee57261f56a85045ecf7fa1d6664e"
  },
  {
    "url": "assets/js/19.e6311729.js",
    "revision": "d39e13ce263337d881026ebcdd09c83b"
  },
  {
    "url": "assets/js/2.94401f0d.js",
    "revision": "48cae4dec38760c404cfd8cc2d0133e6"
  },
  {
    "url": "assets/js/20.74fbc485.js",
    "revision": "aa6a5b44305a3586e397bd19678460cb"
  },
  {
    "url": "assets/js/21.3290f136.js",
    "revision": "e7d94df7a20756497a4b64cb96785239"
  },
  {
    "url": "assets/js/22.45569056.js",
    "revision": "975ee49e72e02e3321ca8255e1188915"
  },
  {
    "url": "assets/js/23.507912b9.js",
    "revision": "f0144e93c604693701bef5cc670c302f"
  },
  {
    "url": "assets/js/24.c3394c4d.js",
    "revision": "f2509609fc1ba77d5f0499d273fd5aba"
  },
  {
    "url": "assets/js/25.7677c51a.js",
    "revision": "83de188d0250bbfa7c10b0cb876d6569"
  },
  {
    "url": "assets/js/26.78ac0868.js",
    "revision": "25cf04dd92e13f07e82f2fe970026bf9"
  },
  {
    "url": "assets/js/27.31d1b39a.js",
    "revision": "0764ecfedfcd10070d73487fc6f546ce"
  },
  {
    "url": "assets/js/28.7e43fcdf.js",
    "revision": "3caab8e4e51fb652f53094b900e12724"
  },
  {
    "url": "assets/js/29.4bfafffe.js",
    "revision": "90e88af6f59a5829557c8814ae934061"
  },
  {
    "url": "assets/js/3.b40c9b1c.js",
    "revision": "90b0d650b28b23be50a714d5298c9582"
  },
  {
    "url": "assets/js/30.2734aa05.js",
    "revision": "bd4d033291378ee7b8914edcdbbf6a70"
  },
  {
    "url": "assets/js/31.6ce3533c.js",
    "revision": "fb824355c7869becd53816f54d839bcc"
  },
  {
    "url": "assets/js/4.0f1a7048.js",
    "revision": "741db09cca556110880839c63e1e8f74"
  },
  {
    "url": "assets/js/5.27775c95.js",
    "revision": "fd028f61941dd216aee6a60afa2d1f1d"
  },
  {
    "url": "assets/js/6.2f5347df.js",
    "revision": "d6057f2b62f18376c0184c571c7cefd6"
  },
  {
    "url": "assets/js/7.4f1ba2fd.js",
    "revision": "5114ea451c6c558574ff415745289f86"
  },
  {
    "url": "assets/js/8.9d40a80a.js",
    "revision": "d8acd392613889465149824df3fbadd7"
  },
  {
    "url": "assets/js/9.3353ddf1.js",
    "revision": "ba91160503ed116a1ee6b6a07788dcce"
  },
  {
    "url": "assets/js/app.b0779244.js",
    "revision": "8934535e65e13d70b97277097ac4ee3d"
  },
  {
    "url": "categories/index.html",
    "revision": "91cec573d6c9b041f83a248b75cdea60"
  },
  {
    "url": "image/bg1.jpg",
    "revision": "2de388ffddaf308f2091da89d748b3a3"
  },
  {
    "url": "image/bg2.jpg",
    "revision": "dcdde6e6acdb4497619842428cd963fd"
  },
  {
    "url": "img/128x128.png",
    "revision": "8e6d03923ef866aebcdbf711e7289487"
  },
  {
    "url": "img/256x256.png",
    "revision": "920fd0383a91247283f0ec81bfe918d5"
  },
  {
    "url": "img/32x32.png",
    "revision": "e542f5a5b16d86595bdf51220f2b99de"
  },
  {
    "url": "img/512x512.png",
    "revision": "cd9b438c55b77df92bca09605c9672be"
  },
  {
    "url": "img/64x64.png",
    "revision": "baaaa2fe5471bdcdee3a4daa85fb9f04"
  },
  {
    "url": "img/logo.png",
    "revision": "19898783a19f03d68b42f3522134d9d2"
  },
  {
    "url": "index.html",
    "revision": "39735f4cf0682f2de0fea4c62d27e643"
  },
  {
    "url": "pages/0fc1d2/index.html",
    "revision": "b2d99e2aa8d171fdbf731c9fcd0b2811"
  },
  {
    "url": "pages/131438/index.html",
    "revision": "90b10310eeffc257c7e751e37e56eb87"
  },
  {
    "url": "pages/2b8e22/index.html",
    "revision": "2896c7343064ae7ccb352e7484b579dd"
  },
  {
    "url": "pages/41b6cc/index.html",
    "revision": "c9cabc7e7d259fe20e50fa58f292d00a"
  },
  {
    "url": "pages/54e58e/index.html",
    "revision": "1cbbde6aaa19005c327812e4e29a806d"
  },
  {
    "url": "pages/951535/index.html",
    "revision": "1442165cf0456eced1b59492ee234368"
  },
  {
    "url": "pages/9a27d2/index.html",
    "revision": "c3973ec7a33bb7577f406bc2906004a3"
  },
  {
    "url": "pages/a91214/index.html",
    "revision": "68f368ada80e198dcd7fa12aaabd3182"
  },
  {
    "url": "pages/aa917b/index.html",
    "revision": "2747bccedaded6e0395a4638c2265f84"
  },
  {
    "url": "pages/about/index.html",
    "revision": "a3710acece0de4970743feb251c620da"
  },
  {
    "url": "pages/b870ed/index.html",
    "revision": "601dcfbc4971a113a56f164d211fcd37"
  },
  {
    "url": "pages/b9b976/index.html",
    "revision": "4010395df558b5f8f80cd383d84012e3"
  },
  {
    "url": "pages/bbca02/index.html",
    "revision": "4f0e431281ef5dc59a09c3860d59d844"
  },
  {
    "url": "pages/c7906c/index.html",
    "revision": "4341553f27282566e8135f37f2c66be1"
  },
  {
    "url": "pages/cd8123/index.html",
    "revision": "db32383d7d91e913628fbc39259d964b"
  },
  {
    "url": "pages/contact/index.html",
    "revision": "4a63d2205960907f339c25e772e9f9a6"
  },
  {
    "url": "pages/eb5b06/index.html",
    "revision": "ae0c3014d655c1403cecd9dfd0caeb28"
  },
  {
    "url": "pages/faf39d/index.html",
    "revision": "60a34e861ba749d15824df9716c3343a"
  },
  {
    "url": "pages/joinus/index.html",
    "revision": "d726261740566238e87ebf3ae4e119eb"
  },
  {
    "url": "pages/zhaoxin/index.html",
    "revision": "680947406e4c2e8b7fa96154fdd4a0b8"
  },
  {
    "url": "tags/index.html",
    "revision": "71d43c757b3dcdbf10fedb9d0565854a"
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
