(()=>{"use strict";var e,t={"./examples/tut__nested_blocks.js":(e,t,n)=>{var o=n("./node_modules/three/build/three.module.js"),r=n("./node_modules/three/examples/jsm/webxr/VRButton.js"),i=n("./node_modules/three/examples/jsm/controls/OrbitControls.js"),a=n("./node_modules/three/examples/jsm/geometries/BoxLineGeometry.js"),s=n("./src/three-mesh-ui.js");const d=n.p+"f39484a2a80acb7e25edc6e45b24ced5.jpg";var c=n("./examples/assets/Roboto-msdf.json");const l=n.p+"5a41f46a5020bc8f41ff554d0d890ad3.png",u=window.innerWidth,h=window.innerHeight;let p,m,w,g;function f(){s.ZP.update(),g.update(),w.render(p,m)}window.addEventListener("load",(function(){p=new o.xsS,p.background=new o.Ilk(5263440),m=new o.cPb(60,u/h,.1,100),w=new o.CP7({antialias:!0}),w.setPixelRatio(window.devicePixelRatio),w.setSize(u,h),w.xr.enabled=!0,document.body.appendChild(r.N.createButton(w)),document.body.appendChild(w.domElement),g=new i.z(m,w.domElement),m.position.set(0,1.6,0),g.target=new o.Pa4(0,1,-1.8),g.update();const e=new o.ejS(new a.d(6,6,6,10,10,10).translate(0,3,0),new o.nls({color:8421504}));p.add(e),function(){const e=new s.ZP.Block({ref:"container",padding:.025,fontFamily:c,fontTexture:l,fontColor:new o.Ilk(16777215),backgroundOpacity:0});e.position.set(0,1,-1.8),e.rotation.x=-.55,p.add(e);const t=new s.ZP.Block({height:.2,width:1.5,margin:.025,justifyContent:"center",fontSize:.09});t.add(new s.ZP.Text({content:"spiny bush viper"})),e.add(t);const n=new s.ZP.Block({height:.95,width:1,margin:.025,padding:.025,textAlign:"left",justifyContent:"end"}),r=new s.ZP.Block({height:.07,width:.37,textAlign:"center",justifyContent:"center"});r.add(new s.ZP.Text({content:"Mind your fingers",fontSize:.04})),n.add(r);const i=new s.ZP.Block({margin:.025}),a=new s.ZP.Block({height:.35,width:.5,margin:.025,padding:.02,fontSize:.04,justifyContent:"center",backgroundOpacity:0}).add(new s.ZP.Text({content:"Known for its extremely keeled dorsal scales that give it a "}),new s.ZP.Text({content:"bristly",fontColor:new o.Ilk(9627244)}),new s.ZP.Text({content:" appearance."})),u=new s.ZP.Block({height:.53,width:.5,margin:.01,padding:.02,fontSize:.025,alignItems:"start",textAlign:"justify",backgroundOpacity:0}).add(new s.ZP.Text({content:"The males of this species grow to maximum total length of 73 cm (29 in): body 58 cm (23 in), tail 15 cm (5.9 in). Females grow to a maximum total length of 58 cm (23 in). The males are surprisingly long and slender compared to the females.\nThe head has a short snout, more so in males than in females.\nThe eyes are large and surrounded by 9–16 circumorbital scales. The orbits (eyes) are separated by 7–9 scales."}));i.add(a,u);const h=new s.ZP.Block({contentDirection:"row",padding:.02,margin:.025,backgroundOpacity:0});h.add(n,i),e.add(h),(new o.dpR).load(d,(e=>{n.set({backgroundTexture:e})}))}(),w.setAnimationLoop(f)})),window.addEventListener("resize",(function(){m.aspect=window.innerWidth/window.innerHeight,m.updateProjectionMatrix(),w.setSize(window.innerWidth,window.innerHeight)}))}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,o),i.exports}o.m=t,e=[],o.O=(t,n,r,i)=>{if(!n){var a=1/0;for(l=0;l<e.length;l++){for(var[n,r,i]=e[l],s=!0,d=0;d<n.length;d++)(!1&i||a>=i)&&Object.keys(o.O).every((e=>o.O[e](n[d])))?n.splice(d--,1):(s=!1,i<a&&(a=i));if(s){e.splice(l--,1);var c=r();void 0!==c&&(t=c)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[n,r,i]},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.j="tut__nested_blocks",(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{var e={tut__nested_blocks:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var r,i,[a,s,d]=n,c=0;if(a.some((t=>0!==e[t]))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(d)var l=d(o)}for(t&&t(n);c<a.length;c++)i=a[c],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(l)},n=self.webpackChunkthree_mesh_ui=self.webpackChunkthree_mesh_ui||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var r=o.O(void 0,["_imported-examples-assets__chunk","_three-mesh-ui__chunk","_vendors__chunk"],(()=>o("./examples/tut__nested_blocks.js")));r=o.O(r)})();