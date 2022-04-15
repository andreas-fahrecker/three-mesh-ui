(()=>{"use strict";var e,t={"./examples/api__manual_positioning.js":(e,t,n)=>{var o=n("./node_modules/three/build/three.module.js"),i=n("./node_modules/three/examples/jsm/webxr/VRButton.js"),r=n("./node_modules/three/examples/jsm/controls/OrbitControls.js"),a=n("./node_modules/three/examples/jsm/geometries/BoxLineGeometry.js"),s=n("./src/three-mesh-ui.js"),d=n("./examples/assets/Roboto-msdf.json");const l=n.p+"5a41f46a5020bc8f41ff554d0d890ad3.png",u=window.innerWidth,c=window.innerHeight;let p,h,m,w,f,g,b;function _(e,t,n){b=new s.ZP.Block({height:.08,width:.6,justifyContent:"center",backgroundOpacity:.2}),b.add(new s.ZP.Text({content:e})),b.autoLayout=!1,b.position.set(t,n,0),g.add(b)}function v(){const e=Date.now();g.set({width:.25*Math.sin(e/1e3)+1.2,height:.15*Math.sin(e/500)+.7}),f.set({width:.25*Math.sin(e/1200)+1.8,height:1.4}),s.ZP.update(),w.update(),m.render(p,h)}window.addEventListener("load",(function(){p=new o.xsS,p.background=new o.Ilk(5263440),h=new o.cPb(60,u/c,.1,100),m=new o.CP7({antialias:!0}),m.setPixelRatio(window.devicePixelRatio),m.setSize(u,c),m.xr.enabled=!0,document.body.appendChild(i.N.createButton(m)),document.body.appendChild(m.domElement),w=new r.z(h,m.domElement),h.position.set(0,1.6,0),w.target=new o.Pa4(0,1,-1.8),w.update();const e=new o.ejS(new a.d(6,6,6,10,10,10).translate(0,3,0),new o.nls({color:8421504}));p.add(e),f=new s.ZP.Block({padding:.05,backgroundColor:new o.Ilk(14277081),backgroundOpacity:.5,justifyContent:"end",alignItems:"end",fontColor:new o.Ilk(3355443),fontFamily:d,fontTexture:l}),f.position.set(0,1,-1.8),f.rotation.x=-.55,p.add(f),g=new s.ZP.Block({backgroundColor:new o.Ilk(16777215),backgroundOpacity:.5}),f.add(g),_("set .autoLayout = false",-.1,.15),_("on a Block component",.1,.05),_("to make three-mesh-ui",-.1,-.05),_("skip its automatic layout",.1,-.15),m.setAnimationLoop(v)})),window.addEventListener("resize",(function(){h.aspect=window.innerWidth/window.innerHeight,h.updateProjectionMatrix(),m.setSize(window.innerWidth,window.innerHeight)}))}},n={};function o(e){var i=n[e];if(void 0!==i)return i.exports;var r=n[e]={exports:{}};return t[e](r,r.exports,o),r.exports}o.m=t,e=[],o.O=(t,n,i,r)=>{if(!n){var a=1/0;for(u=0;u<e.length;u++){for(var[n,i,r]=e[u],s=!0,d=0;d<n.length;d++)(!1&r||a>=r)&&Object.keys(o.O).every((e=>o.O[e](n[d])))?n.splice(d--,1):(s=!1,r<a&&(a=r));if(s){e.splice(u--,1);var l=i();void 0!==l&&(t=l)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[n,i,r]},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.j="api__manual_positioning",(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{var e={api__manual_positioning:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var i,r,[a,s,d]=n,l=0;if(a.some((t=>0!==e[t]))){for(i in s)o.o(s,i)&&(o.m[i]=s[i]);if(d)var u=d(o)}for(t&&t(n);l<a.length;l++)r=a[l],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(u)},n=self.webpackChunkthree_mesh_ui=self.webpackChunkthree_mesh_ui||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var i=o.O(void 0,["_imported-examples-assets__chunk","_three-mesh-ui__chunk","_vendors__chunk"],(()=>o("./examples/api__manual_positioning.js")));i=o.O(i)})();