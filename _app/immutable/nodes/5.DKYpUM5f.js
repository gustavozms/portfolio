import{s as V,n as j,o as O,f as Q,b as T}from"../chunks/scheduler.BSqHwusD.js";import{S as B,i as H,e as M,c as E,h as S,f as p,b as x,d as P,k as g,A as ee,B as te,v as W,s as A,t as q,w as X,a as D,j as F,g as ne,x as Y,l as U,p as Z,n as J,y as K}from"../chunks/index.CU-tknCJ.js";function ae(c){let t,s,e,r;return{c(){t=M("div"),s=M("canvas"),this.h()},l(n){t=E(n,"DIV",{class:!0});var i=S(t);s=E(i,"CANVAS",{class:!0}),S(s).forEach(p),i.forEach(p),this.h()},h(){x(s,"class","bg-white overflow-hidden"),x(t,"class","fixed inset-0 flex items-center justify-center w-screen h-screen overflow-hidden bg-white")},m(n,i){P(n,t,i),g(t,s),c[2](s),e||(r=ee(s,"contextmenu",te(c[1])),e=!0)},p:j,i:j,o:j,d(n){n&&p(t),c[2](null),e=!1,r()}}}let R=128,f=8;function se(c,t,s){let e,r,n,i,u=[];const G=()=>{const a=window.innerWidth/window.innerHeight;a>1?(i=R,n=Math.floor(R*a)):(n=R,i=Math.floor(R/a))},b=()=>{G(),u=Array.from({length:n},()=>Array.from({length:i},()=>({state:Math.random()>.5?1:0,fadeLevel:0})))},y=()=>{if(r){r.clearRect(0,0,e.width,e.height);for(let a=0;a<n;a++)for(let l=0;l<i;l++){const h=u[a][l];h.state===1?(r.fillStyle="#FE2C55",r.fillRect(a*f,l*f,f,f)):h.fadeLevel>0?(r.fillStyle=`rgba(254, 44, 85, ${1-h.fadeLevel})`,r.fillRect(a*f,l*f,f,f),u[a][l].fadeLevel=Math.min(h.fadeLevel+.1,1)):(r.fillStyle="white",r.fillRect(a*f,l*f,f,f))}}},z=()=>{u=u.map((l,h)=>l.map((v,_)=>{const L=m(h,_);return v.state===1&&(L<2||L>3)?{state:0,fadeLevel:.1}:v.state===0&&L===3?{state:1,fadeLevel:0}:v})),y()},m=(a,l)=>{let h=0;for(let v=-1;v<=1;v++)for(let _=-1;_<=1;_++){if(v===0&&_===0)continue;const L=(a+v+n)%n,k=(l+_+i)%i;h+=u[L][k].state}return h},C=()=>{},w=()=>{},o=()=>{e&&(G(),s(0,e.width=n*f,e),s(0,e.height=i*f,e),b(),y())},d=()=>{const a=[[[0,0],[1,0],[2,0],[2,1],[1,2]],[[0,0],[1,0],[0,1],[1,1],[2,1],[1,2]],[[0,0],[1,0],[2,0]],[[0,0],[0,1],[1,0],[1,1]]],l=Math.floor(Math.random()*3)+1;for(let h=0;h<l;h++){const v=a[Math.floor(Math.random()*a.length)],_=Math.floor(Math.random()*(n-5)),L=Math.floor(Math.random()*(i-5));v.forEach(([k,N])=>{_+k<n&&L+N<i&&(u[_+k][L+N]={state:1,fadeLevel:0})})}};O(()=>{e&&(r=e.getContext("2d"),o()),y();const a=setInterval(z,10),l=setInterval(d,2e3);return window.addEventListener("resize",o),e.addEventListener("mousedown",C),e.addEventListener("mouseup",w),()=>{clearInterval(a),clearInterval(l),window.removeEventListener("resize",o),e.removeEventListener("mousedown",C),e.removeEventListener("mouseup",w)}});function $(a){Q.call(this,c,a)}function I(a){T[a?"unshift":"push"](()=>{e=a,s(0,e)})}return[e,$,I]}class re extends B{constructor(t){super(),H(this,t,se,ae,V,{})}}function ie(c){let t,s,e,r,n,i,u,G,b,y,z,m,C="Conway's Game of Life",w;return t=new re({}),{c(){W(t.$$.fragment),s=A(),e=M("div"),r=M("div"),n=M("div"),i=M("h1"),u=q(c[0]),G=A(),b=M("p"),y=q(c[1]),z=A(),m=M("a"),m.textContent=C,this.h()},l(o){X(t.$$.fragment,o),s=D(o),e=E(o,"DIV",{class:!0});var d=S(e);r=E(d,"DIV",{class:!0});var $=S(r);n=E($,"DIV",{class:!0});var I=S(n);i=E(I,"H1",{class:!0});var a=S(i);u=F(a,c[0]),a.forEach(p),G=D(I),b=E(I,"P",{class:!0});var l=S(b);y=F(l,c[1]),l.forEach(p),I.forEach(p),$.forEach(p),z=D(d),m=E(d,"A",{href:!0,class:!0,"data-svelte-h":!0}),ne(m)!=="svelte-gxltjt"&&(m.textContent=C),d.forEach(p),this.h()},h(){x(i,"class","text-5xl font-bold text-gray-800 m-0"),x(b,"class","text-2xl text-gray-600 mt-3"),x(n,"class","flex flex-col items-center justify-center"),x(r,"class","bg-white p-8 rounded-xl shadow-lg"),x(m,"href","https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"),x(m,"class","fixed bottom-4 right-4 transition-colors"),x(e,"class","fixed inset-0 flex items-center justify-center bg-white/10")},m(o,d){Y(t,o,d),P(o,s,d),P(o,e,d),g(e,r),g(r,n),g(n,i),g(i,u),g(n,G),g(n,b),g(b,y),g(e,z),g(e,m),w=!0},p(o,[d]){(!w||d&1)&&U(u,o[0]),(!w||d&2)&&U(y,o[1])},i(o){w||(Z(t.$$.fragment,o),w=!0)},o(o){J(t.$$.fragment,o),w=!1},d(o){o&&(p(s),p(e)),K(t,o)}}}function oe(c,t,s){let{name:e="Gustavo Zahorcsak Matias Silvano"}=t,{subtitle:r="Bioinformatician & Software Developer"}=t;return c.$$set=n=>{"name"in n&&s(0,e=n.name),"subtitle"in n&&s(1,r=n.subtitle)},[e,r]}class le extends B{constructor(t){super(),H(this,t,oe,ie,V,{name:0,subtitle:1})}}function ce(c){let t,s;return t=new le({}),{c(){W(t.$$.fragment)},l(e){X(t.$$.fragment,e)},m(e,r){Y(t,e,r),s=!0},p:j,i(e){s||(Z(t.$$.fragment,e),s=!0)},o(e){J(t.$$.fragment,e),s=!1},d(e){K(t,e)}}}class ue extends B{constructor(t){super(),H(this,t,null,ce,V,{})}}export{ue as component};
