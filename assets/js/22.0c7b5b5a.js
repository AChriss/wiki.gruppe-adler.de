(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{277:function(e,t,l){"use strict";l.r(t);var n=l(2),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[l("h1",{attrs:{id:"🔥-special-effects"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#🔥-special-effects"}},[e._v("#")]),e._v(" 🔥 Special Effects")]),e._v(" "),l("h2",{attrs:{id:"☁️-rauchpartikel-emitter"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#☁️-rauchpartikel-emitter"}},[e._v("#")]),e._v(" ☁️ Rauchpartikel-Emitter.")]),e._v(" "),l("div",{staticClass:"custom-block warning"},[l("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),l("p",[e._v("Effekt ist lokal. Funktion muss also auf allen Clients ausgeführt werden.")])]),e._v(" "),l("h3",{attrs:{id:"syntax"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[e._v("#")]),e._v(" Syntax")]),e._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",[l("code",{staticClass:"hljs"},[e._v("[\n    position,  \n    timeout,  \n    effectSize,  \n    expansion,  \n    colorRed,  \n    colorGreen,  \n    colorBlue,  \n    colorAlpha,  \n    particleSize,  \n    particleDensity,  \n    particleLifetime,  \n    particleSpeed,  \n    particleLifting,  \n    windEffect  \n] call GRAD_fnc_createSmoke;\n")])])]),l("h3",{attrs:{id:"beispiel"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#beispiel"}},[e._v("#")]),e._v(" Beispiel")]),e._v(" "),l("p",[l("code",[e._v("[getpos player,0,1.5] call GRAD_fnc_createSmoke")])]),e._v(" "),l("p",[l("code",[e._v('[getpos player,0,1.5] remoteExec ["GRAD_fnc_createSmoke"];')])]),e._v(" "),l("h3",{attrs:{id:"funktion"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#funktion"}},[e._v("#")]),e._v(" Funktion")]),e._v(" "),l("div",{staticClass:"language- extra-class"},[l("pre",[l("code",{staticClass:"hljs"},[e._v('params [\n    "_smokePos",\n    ["_timeOut",0],\n    ["_effectSize",1],\n    ["_expansion",1],\n    ["_colorRed",0.5],\n    ["_colorGreen",0.5],\n    ["_colorBlue",0.5],\n    ["_colorAlpha",0.5],\n    ["_particleSize",1],\n    ["_particleDensity",10],\n    ["_particleLifeTime",50],\n    ["_particleSpeed",1],\n    ["_particleLifting",1],\n    ["_windEffect",1]\n];\n\n\nif (_smokePos isEqualType objNull) then {_smokePos = getPos _smokePos};\nprivate _emitter = "#particlesource" createVehicleLocal _smokePos;\n\n_emitter setParticleParams [\n    ["\\A3\\data_f\\ParticleEffects\\Universal\\Universal_02",8,0,40,1],\n    "",\n    "billboard",\n    1,\n    _particleLifeTime,\n    [0,0,0],\n    [0,0,2*_particleSpeed],\n    0,\n    0.05,\n    0.04*_particleLifting,\n    0.05*_windEffect,\n    [1 *_particleSize + 1,1.8 * _particleSize + 15],\n\n\t[\n        [0.7*_colorRed,0.7*_colorGreen,0.7*_colorBlue,0.7*_colorAlpha],\n        [0.7*_colorRed,0.7*_colorGreen,0.7*_colorBlue,0.6*_colorAlpha],\n        [0.7*_colorRed,0.7*_colorGreen,0.7*_colorBlue,0.45*_colorAlpha],\n\t\t[0.84*_colorRed,0.84*_colorGreen,0.84*_colorBlue,0.28*_colorAlpha],\n        [0.84*_colorRed,0.84*_colorGreen,0.84*_colorBlue,0.16*_colorAlpha],\n        [0.84*_colorRed,0.84*_colorGreen,0.84*_colorBlue,0.09*_colorAlpha],\n\t\t[0.84*_colorRed,0.84*_colorGreen,0.84*_colorBlue,0.06*_colorAlpha],\n        [1*_colorRed,1*_colorGreen,1*_colorBlue,0.02*_colorAlpha],\n        [1*_colorRed,1*_colorGreen,1*_colorBlue,0*_colorAlpha]\n    ],\n\n\t[1,0.55,0.35],\n    0.1,\n    0.08*_expansion,\n    "",\n    "",\n    ""\n];\n\n_emitter setParticleRandom [_particleLifeTime/2, [0.5*_effectSize,0.5*_effectSize,0.2*_effectSize], [0.3,0.3,0.5], 1, 0, [0,0,0,0.06], 0, 0];\n_emitter setDropInterval (1/_particleDensity);\n\nif (_timeOut > 0) then {[{deleteVehicle _this}, _emitter, _timeOut] call CBA_fnc_waitAndExecute};\n')])])])])}),[],!1,null,null,null);t.default=r.exports}}]);