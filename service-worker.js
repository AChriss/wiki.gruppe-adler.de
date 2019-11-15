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
    "revision": "8357ad189b7bfc7391feedd5470e384b"
  },
  {
    "url": "adlerkopp.png",
    "revision": "6fad4764c67af0eda687997ad7dec48a"
  },
  {
    "url": "assets/css/0.styles.a5212c44.css",
    "revision": "bb219da7ea0fe746657df63f281b7e0b"
  },
  {
    "url": "assets/img/1600px-Taktisch_keil.463c6094.jpg",
    "revision": "463c60942514ad41d4b86431cfe432dc"
  },
  {
    "url": "assets/img/1600px-Taktisch_kolonne.9fb5fc7e.jpg",
    "revision": "9fb5fc7ee387c5c8ec30339539adec93"
  },
  {
    "url": "assets/img/1600px-Taktisch_linie.346cda0e.jpg",
    "revision": "346cda0e0dce339b8dac82d39127c7b1"
  },
  {
    "url": "assets/img/addon-options.af7d8107.jpg",
    "revision": "af7d8107a8787f3ca7a164eeb14abbcd"
  },
  {
    "url": "assets/img/column.457e75b3.png",
    "revision": "457e75b3d91c25fb3c095b224a7d88ab"
  },
  {
    "url": "assets/img/connect-to-repository.7b13ae58.jpg",
    "revision": "7b13ae58b09a0ef9423c6e8d6eccee18"
  },
  {
    "url": "assets/img/container-structure.32f7cc02.svg",
    "revision": "32f7cc02526aa47a4eab88a2713624d1"
  },
  {
    "url": "assets/img/create-addon-group.6949a422.jpg",
    "revision": "6949a4225849e80590c88ab4281a33e7"
  },
  {
    "url": "assets/img/create-file.f101f1ba.jpg",
    "revision": "f101f1ba378b08a3b2c9f380ab8a7d05"
  },
  {
    "url": "assets/img/create-profile.ef36c62e.jpg",
    "revision": "ef36c62e67daf98cac6b7173e6c11bd5"
  },
  {
    "url": "assets/img/edit-link.cbaa9764.jpg",
    "revision": "cbaa9764095e6247dba9c7c529abd328"
  },
  {
    "url": "assets/img/Editbutton.d735283c.jpg",
    "revision": "d735283c75574a1770ddb2f5cb86b129"
  },
  {
    "url": "assets/img/formationen.2a9b394f.gif",
    "revision": "2a9b394fe65bda8f71f3d40af80693f7"
  },
  {
    "url": "assets/img/github-commits.5aebe9e1.jpg",
    "revision": "5aebe9e1a4cfac7e7dddff62fac5f931"
  },
  {
    "url": "assets/img/launcher-options.627fd852.jpg",
    "revision": "627fd852e8f25daafedeec9b78faf866"
  },
  {
    "url": "assets/img/line.d38c2c4a.png",
    "revision": "d38c2c4a5267de23a7fb563bf6ac3b44"
  },
  {
    "url": "assets/img/list-containers.e16871f2.png",
    "revision": "e16871f28aad9f02f04d9835702b21bd"
  },
  {
    "url": "assets/img/max-connections.2d0b3086.jpg",
    "revision": "2d0b30862b56120dcc4817156033a5dc"
  },
  {
    "url": "assets/img/new-repository.4c248ab7.jpg",
    "revision": "4c248ab77332bde82d370eb1d28b3a6a"
  },
  {
    "url": "assets/img/prozess.c96df5b5.png",
    "revision": "c96df5b59230b5bb395a8e08dfbf193c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/Slotbutton.647e1ae4.jpg",
    "revision": "647e1ae408ed07ad3853a692d852b869"
  },
  {
    "url": "assets/img/Sthud.2ca991b4.png",
    "revision": "2ca991b4a66db463e423550893b83c37"
  },
  {
    "url": "assets/img/sync-mods.84919c03.jpg",
    "revision": "84919c03fad1b96301de3b8257cd71ab"
  },
  {
    "url": "assets/img/Takt_Zeichen_Auswahl.93c61306.png",
    "revision": "93c61306b7c08ed0aa43caf4824cae71"
  },
  {
    "url": "assets/img/teamspeak.9c5e3f7f.jpg",
    "revision": "9c5e3f7f2ed5629fbded752aed3bf139"
  },
  {
    "url": "assets/img/travis-status.a0a35589.jpg",
    "revision": "a0a35589a2c895b06008766230361775"
  },
  {
    "url": "assets/img/wedge.13a38d2a.png",
    "revision": "13a38d2aced397c2dc3bb370415ea8ad"
  },
  {
    "url": "assets/js/1.7d918530.js",
    "revision": "4cfbf8c6ff66e4f1f0e363a99aa05ccc"
  },
  {
    "url": "assets/js/10.36dafffc.js",
    "revision": "5e1b3442370203add8bb2dd5879deb97"
  },
  {
    "url": "assets/js/11.e560fca4.js",
    "revision": "1de1a4563b9e20a3d4cffa2fa2851d61"
  },
  {
    "url": "assets/js/12.29a29821.js",
    "revision": "f9945d43b0eec4b19b84e012f72e88dd"
  },
  {
    "url": "assets/js/13.53941c64.js",
    "revision": "1840533974140a9224e0a5c95b8dfa28"
  },
  {
    "url": "assets/js/14.714afa61.js",
    "revision": "c304d4038e1e65388e6b4dc55bebb128"
  },
  {
    "url": "assets/js/15.130c511c.js",
    "revision": "05f77fefc8eebebb999b94a4f0e6253b"
  },
  {
    "url": "assets/js/16.dd931dff.js",
    "revision": "f0ae542eb95a95c0024b574e94803633"
  },
  {
    "url": "assets/js/17.140eda8b.js",
    "revision": "e394f8a343750042c47eeea56945f891"
  },
  {
    "url": "assets/js/18.47601238.js",
    "revision": "9b26dbff8aec340c7a6e3108c13ef9ea"
  },
  {
    "url": "assets/js/19.83d03351.js",
    "revision": "222e7279c1a15ebc56f3ddfa8129cd58"
  },
  {
    "url": "assets/js/20.6fd65ba5.js",
    "revision": "aca504a04666f0cd3414ff8661e64d7b"
  },
  {
    "url": "assets/js/21.5e3ec1fc.js",
    "revision": "507df31b883f2fceec75ba99ede4c2b0"
  },
  {
    "url": "assets/js/22.6c603547.js",
    "revision": "820bd2327d9049992d7708bd110b78fa"
  },
  {
    "url": "assets/js/23.55920c93.js",
    "revision": "06512bd593fd8beea0cee8918060ac97"
  },
  {
    "url": "assets/js/24.52eeb7d2.js",
    "revision": "57c41c085c6275da3e5a37dfeb8861f7"
  },
  {
    "url": "assets/js/25.97c25d9a.js",
    "revision": "b8bb4bbf36ee5a2cf99f4e8d0acadca2"
  },
  {
    "url": "assets/js/26.033f274b.js",
    "revision": "f75a1e2ee728495d322142acef048f37"
  },
  {
    "url": "assets/js/27.bf44bb13.js",
    "revision": "0397eea58c3789796478d3c308e9e36b"
  },
  {
    "url": "assets/js/28.dea29f13.js",
    "revision": "c3adbe0ccce380f91ad620579c5d73a9"
  },
  {
    "url": "assets/js/29.0a3cdd04.js",
    "revision": "6d2009394eb92bc9d11207dfde765ad0"
  },
  {
    "url": "assets/js/3.97a69c0e.js",
    "revision": "790dd88cd1d6f30a3f7bf493279436ee"
  },
  {
    "url": "assets/js/30.acecf3f9.js",
    "revision": "3c00131007c0f8e0ee8321e2d855af01"
  },
  {
    "url": "assets/js/31.ba52f8af.js",
    "revision": "cfbbbc955f9744936f485aee684718af"
  },
  {
    "url": "assets/js/32.78651ff4.js",
    "revision": "ebfc774b4e4130a76df8c778f8724446"
  },
  {
    "url": "assets/js/33.22e23502.js",
    "revision": "31b9ff97eda8e04a329ff00185d6e9c3"
  },
  {
    "url": "assets/js/34.7c6f138e.js",
    "revision": "2bc2a58519971f7b095c03e469aaaed5"
  },
  {
    "url": "assets/js/35.73136d3c.js",
    "revision": "cacae6d1e6d2b4b781e447f2a7b40451"
  },
  {
    "url": "assets/js/36.707672a6.js",
    "revision": "41bfdf947327c634188dc192f1a04acf"
  },
  {
    "url": "assets/js/37.1ae3ef5e.js",
    "revision": "0c19b0ba178ac265b9ff4cf4f16fa6e8"
  },
  {
    "url": "assets/js/38.f4b6247f.js",
    "revision": "66a2ebf8cdf782f0990c203717cd7c70"
  },
  {
    "url": "assets/js/39.c2e2b2e6.js",
    "revision": "89461492cc18af61341ed13659fec1dc"
  },
  {
    "url": "assets/js/4.e704607a.js",
    "revision": "848c1ed12e57da3cbd383cedd2eff9c6"
  },
  {
    "url": "assets/js/40.1253fdb5.js",
    "revision": "f92fe90e1272ccb68688b62303add5ed"
  },
  {
    "url": "assets/js/41.18e9fd37.js",
    "revision": "ed9d99c6831147c2a8bbe1d676041889"
  },
  {
    "url": "assets/js/5.7eec0b1b.js",
    "revision": "1210919f2966eef2b3fc4f32f1c00fe6"
  },
  {
    "url": "assets/js/6.a5cf8452.js",
    "revision": "d2b9a413ed6ceabccee2feed0f0c41a9"
  },
  {
    "url": "assets/js/7.e461f35d.js",
    "revision": "187d057da3963d0f4543c45ef3fbda11"
  },
  {
    "url": "assets/js/8.792b5c1e.js",
    "revision": "bacea8417febfa85168b07ae4a2d8a32"
  },
  {
    "url": "assets/js/9.f10ec660.js",
    "revision": "433bb810ea5b9367aeece794f03140e1"
  },
  {
    "url": "assets/js/app.0db08171.js",
    "revision": "69621a8ca3d84269dfd1c30f3682a46a"
  },
  {
    "url": "de/bastelstube/ace3medical.html",
    "revision": "33f2d756baeb6b0c5d977c3dcbb4b5aa"
  },
  {
    "url": "de/bastelstube/cba-settings.html",
    "revision": "71f223e28b524de770529dcc03fec937"
  },
  {
    "url": "de/bastelstube/erste-hilfe-missionsbau.html",
    "revision": "fc3bb151f362a30fba9803fc53124aea"
  },
  {
    "url": "de/bastelstube/FX.html",
    "revision": "a771ef2befcca93279bdd71e0e87c7f0"
  },
  {
    "url": "de/bastelstube/gruppe-adler-mod.html",
    "revision": "85883f4f665eadabd62fffcf90bc5b3b"
  },
  {
    "url": "de/bastelstube/index.html",
    "revision": "a8d550b2444617773c64fb7710314190"
  },
  {
    "url": "de/bastelstube/scriptmodule.html",
    "revision": "68ac505825db3c4d0dee61db0412c1cb"
  },
  {
    "url": "de/bastelstube/slotting-tool.html",
    "revision": "650a7429e0f088c72b4d483831912bb9"
  },
  {
    "url": "de/bastelstube/symlinks.html",
    "revision": "16eeb7842521b6f95bd622494fd82c0a"
  },
  {
    "url": "de/index.html",
    "revision": "4bde7ed12e71888d181c98a480ed5ae2"
  },
  {
    "url": "de/infrastruktur/docker-host.html",
    "revision": "5cff3a78e662b0ee23326cd8dbcf5402"
  },
  {
    "url": "de/infrastruktur/gruppe-adler-modset.html",
    "revision": "72bec6ac9907497dbfd48fdd0e07317f"
  },
  {
    "url": "de/infrastruktur/index.html",
    "revision": "7f99edb426839911f1374e8d4593f3e7"
  },
  {
    "url": "de/infrastruktur/styleguide-design.html",
    "revision": "b0e5200dea5c7b6d09ab274943e98c0b"
  },
  {
    "url": "de/infrastruktur/uebersicht.html",
    "revision": "9614c2602eea8c82e622bc9a00e81e62"
  },
  {
    "url": "de/infrastruktur/wiki-how-to.html",
    "revision": "4eb2bb164be9d5d8c8b1cc033edb2bb0"
  },
  {
    "url": "de/organisatorisches/adlerung.html",
    "revision": "d11419411cdc6cae3f5f30d0f295d8d5"
  },
  {
    "url": "de/organisatorisches/bek-checkliste.html",
    "revision": "5f937f4243f68bb75455814c8c95084c"
  },
  {
    "url": "de/organisatorisches/gruppen.html",
    "revision": "cd13a9926e1c92e1318cede83730287c"
  },
  {
    "url": "de/organisatorisches/index.html",
    "revision": "fcd13a7be4c0dac79022bf783bfd3083"
  },
  {
    "url": "de/taktik/ASOP.html",
    "revision": "75d9b98e0bfa7c680b634982e72bdb4a"
  },
  {
    "url": "de/taktik/ateffectiveness.html",
    "revision": "e1054909e7f361ec4323b3a2108a0c3d"
  },
  {
    "url": "de/taktik/index.html",
    "revision": "2f35235d3c8f6c26b939e1a9d682142b"
  },
  {
    "url": "de/taktik/taktischeZeichen.html",
    "revision": "955017a92f2fb55d08bb44eb3e2f8197"
  },
  {
    "url": "de/wiki-index.html",
    "revision": "3d5091512b4bae24e8be0bce185e243e"
  },
  {
    "url": "en/index.html",
    "revision": "1852c4e32521ce55974008deebf59833"
  },
  {
    "url": "en/infrastruktur/gruppe-adler-modset.html",
    "revision": "3b4baa65c2b9a853ab4713ffb1b1162b"
  },
  {
    "url": "en/infrastruktur/index.html",
    "revision": "26d640ceac53f3127c84a39605f6112a"
  },
  {
    "url": "en/wiki-index.html",
    "revision": "64bd0c45d0379497b248ebe2e3a287db"
  },
  {
    "url": "index.html",
    "revision": "1797331f56fc66c59881786708015801"
  },
  {
    "url": "logo.png",
    "revision": "cc10714dc7b65eef7149fca8c14ceab3"
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
