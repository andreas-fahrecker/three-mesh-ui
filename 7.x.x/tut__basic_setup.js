(()=>{"use strict";var e,t={"./examples/tut__basic_setup.js":(e,t,n)=>{var o=n("./node_modules/three/build/three.module.js"),r=n("./node_modules/three/examples/jsm/webxr/VRButton.js"),i=n("./node_modules/three/examples/jsm/controls/OrbitControls.js"),s=n("./node_modules/three/examples/jsm/geometries/BoxLineGeometry.js"),a=n("./src/three-mesh-ui.js"),d=n("./examples/assets/Roboto-msdf.json");const l=n.p+"5a41f46a5020bc8f41ff554d0d890ad3.png",c=window.innerWidth,u=window.innerHeight;let p,h,w,f;function m(){a.ZP.update(),f.update(),w.render(p,h)}window.addEventListener("load",(function(){p=new o.xsS,p.background=new o.Ilk(5263440),h=new o.cPb(60,c/u,.1,100),w=new o.CP7({antialias:!0}),w.setPixelRatio(window.devicePixelRatio),w.setSize(c,u),w.xr.enabled=!0,document.body.appendChild(r.N.createButton(w)),document.body.appendChild(w.domElement),f=new i.z(h,w.domElement),h.position.set(0,1.6,0),f.target=new o.Pa4(0,1,-1.8),f.update();const e=new o.ejS(new s.d(6,6,6,10,10,10).translate(0,3,0),new o.nls({color:8421504}));p.add(e),function(){const e=new a.ZP.Block({width:1.2,height:.5,padding:.05,justifyContent:"center",textAlign:"left",fontFamily:d,fontTexture:l});e.position.set(0,1,-1.8),e.rotation.x=-.55,p.add(e),e.add(new a.ZP.Text({content:"This library supports line-break-friendly-characters,",fontSize:.055}),new a.ZP.Text({content:" As well as multi-font-size lines with consistent vertical spacing.",fontSize:.08}))}(),w.setAnimationLoop(m)})),window.addEventListener("resize",(function(){h.aspect=window.innerWidth/window.innerHeight,h.updateProjectionMatrix(),w.setSize(window.innerWidth,window.innerHeight)}))}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,o),i.exports}o.m=t,e=[],o.O=(t,n,r,i)=>{if(!n){var s=1/0;for(c=0;c<e.length;c++){for(var[n,r,i]=e[c],a=!0,d=0;d<n.length;d++)(!1&i||s>=i)&&Object.keys(o.O).every((e=>o.O[e](n[d])))?n.splice(d--,1):(a=!1,i<s&&(s=i));if(a){e.splice(c--,1);var l=r();void 0!==l&&(t=l)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[n,r,i]},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.j="tut__basic_setup",(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{var e={tut__basic_setup:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var r,i,[s,a,d]=n,l=0;if(s.some((t=>0!==e[t]))){for(r in a)o.o(a,r)&&(o.m[r]=a[r]);if(d)var c=d(o)}for(t&&t(n);l<s.length;l++)i=s[l],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(c)},n=self.webpackChunkthree_mesh_ui=self.webpackChunkthree_mesh_ui||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var r=o.O(void 0,["_imported-examples-assets__chunk","_three-mesh-ui__chunk","_vendors__chunk"],(()=>o("./examples/tut__basic_setup.js")));r=o.O(r)})();