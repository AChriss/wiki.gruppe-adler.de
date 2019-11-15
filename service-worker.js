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
    "revision": "06eabbc92ec2b026b19fca4b7331ad6a"
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
    "url": "assets/js/13.3b57cd00.js",
    "revision": "01e075f939c57a23643f86c100095229"
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
    "url": "assets/js/18.246db825.js",
    "revision": "bfd7b3af3569b74dd5f262fc6827d379"
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
    "url": "assets/js/34.3837c0a1.js",
    "revision": "ac35ecbb1802042dd95d59715bc424be"
  },
  {
    "url": "assets/js/35.e51c3bf0.js",
    "revision": "5109dca7941ba60627b807d70cc415f3"
  },
  {
    "url": "assets/js/36.cbf874b6.js",
    "revision": "ab6c5fc529f74f4fe1c6529ebe854891"
  },
  {
    "url": "assets/js/37.eca08009.js",
    "revision": "446898228a23811eb3554633fd25b4fd"
  },
  {
    "url": "assets/js/38.6f20f05f.js",
    "revision": "6587e1e5db2d92f3c963bd48a3cb54ab"
  },
  {
    "url": "assets/js/39.da2ca50e.js",
    "revision": "127ceb12924f6ee075d306e274710789"
  },
  {
    "url": "assets/js/4.e704607a.js",
    "revision": "848c1ed12e57da3cbd383cedd2eff9c6"
  },
  {
    "url": "assets/js/40.b1aed3d9.js",
    "revision": "9cce5c057d801cc238aa92a8a2d8dccb"
  },
  {
    "url": "assets/js/41.d4f423bf.js",
    "revision": "49d679a578f20dc5a9815d3afd18d297"
  },
  {
    "url": "assets/js/42.6f3fd04a.js",
    "revision": "242f64c7e721cccb7deaa0e802dbb63b"
  },
  {
    "url": "assets/js/5.73f3036c.js",
    "revision": "5f0046bab6aefcbb1fd42a569952b062"
  },
  {
    "url": "assets/js/6.a056110e.js",
    "revision": "1a3df27636effb9e7ea07a3ff3d0e7f4"
  },
  {
    "url": "assets/js/7.b4e0e59d.js",
    "revision": "3b0b8530be26545bee65caf4933db05c"
  },
  {
    "url": "assets/js/8.cd6b6a33.js",
    "revision": "1619b985fda46125f406723ca530832b"
  },
  {
    "url": "assets/js/9.f10ec660.js",
    "revision": "433bb810ea5b9367aeece794f03140e1"
  },
  {
    "url": "assets/js/app.bbb8ace0.js",
    "revision": "2cc6ba1137a64399328eb7fd7d87f77f"
  },
  {
    "url": "de/bastelstube/ace3medical.html",
    "revision": "0dcb2e56d30ee235ae085f73cef5b724"
  },
  {
    "url": "de/bastelstube/cba-settings.html",
    "revision": "11ed9634f3df19eb676a32bc767c36a7"
  },
  {
    "url": "de/bastelstube/erste-hilfe-missionsbau.html",
    "revision": "18dc85d7bd15d6b960c081fde4ead29f"
  },
  {
    "url": "de/bastelstube/FX.html",
    "revision": "0ab16f3a944101679db94e2a798da5e1"
  },
  {
    "url": "de/bastelstube/gruppe-adler-mod.html",
    "revision": "e6daca4b206357790bb63d0c482a4f9d"
  },
  {
    "url": "de/bastelstube/index.html",
    "revision": "4ca6c3a990a73d36ed9a60b422cdbac5"
  },
  {
    "url": "de/bastelstube/scriptmodule.html",
    "revision": "72f06b2668da9a4be8413d7014fa2825"
  },
  {
    "url": "de/bastelstube/slotting-tool.html",
    "revision": "89bfa11ee11963837390e59cea2945f0"
  },
  {
    "url": "de/bastelstube/symlinks.html",
    "revision": "e34202206c86bb5a0b14e28ea82bdc79"
  },
  {
    "url": "de/index.html",
    "revision": "fadbaf2be793bf6ca30ab6f0a0a42354"
  },
  {
    "url": "de/infrastruktur/docker-host.html",
    "revision": "97e18e4c6b794da984c535341c2e35ac"
  },
  {
    "url": "de/infrastruktur/gruppe-adler-modset.html",
    "revision": "33b7fa9e7443b4d52c4dbd1e2d88f456"
  },
  {
    "url": "de/infrastruktur/index.html",
    "revision": "f45abf46106ad6e84514d9f6a1216afe"
  },
  {
    "url": "de/infrastruktur/styleguide-design.html",
    "revision": "410252a85dfac65f300e3b43ccd13131"
  },
  {
    "url": "de/infrastruktur/uebersicht.html",
    "revision": "8cc83b7f7b88970ee5a376be07508c2d"
  },
  {
    "url": "de/infrastruktur/wiki-how-to.html",
    "revision": "a118f811b028479f5161c9955f32e310"
  },
  {
    "url": "de/organisatorisches/adlerung.html",
    "revision": "8c848153c4e887daad1a4c22ce36f6a2"
  },
  {
    "url": "de/organisatorisches/bek-checkliste.html",
    "revision": "9cb9cc840ff64dc52b4b3884120e226d"
  },
  {
    "url": "de/organisatorisches/gastspieler.html",
    "revision": "34b6fc13b0c6b113302dc9e23c2e9329"
  },
  {
    "url": "de/organisatorisches/gruppen.html",
    "revision": "ed9d3e218d91186ea5d64bcd38ff6e9e"
  },
  {
    "url": "de/organisatorisches/index.html",
    "revision": "b85597077e376bd06f45a07467fb1ab3"
  },
  {
    "url": "de/taktik/ASOP.html",
    "revision": "0a95d7d59f1f1cd05d1467d21f6b723a"
  },
  {
    "url": "de/taktik/ateffectiveness.html",
    "revision": "b00b432f68c56692017b04217068fc49"
  },
  {
    "url": "de/taktik/index.html",
    "revision": "8612ddb6b6e883d0960a394683c5263b"
  },
  {
    "url": "de/taktik/taktischeZeichen.html",
    "revision": "3f3b6b299737ab80868ae9727fc22768"
  },
  {
    "url": "de/wiki-index.html",
    "revision": "2eb3b5c63e696796caa4912fcf741999"
  },
  {
    "url": "en/index.html",
    "revision": "93330dbe630078b0672375da1098b057"
  },
  {
    "url": "en/infrastruktur/gruppe-adler-modset.html",
    "revision": "5ff147f5124647b73922a76dac7a1b25"
  },
  {
    "url": "en/infrastruktur/index.html",
    "revision": "833e9a6783d30d686628dee7fb504eaa"
  },
  {
    "url": "en/wiki-index.html",
    "revision": "dee6298360c44765f5e5611a6a65dca4"
  },
  {
    "url": "index.html",
    "revision": "fc97e35461a92f28968943034bb033be"
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
