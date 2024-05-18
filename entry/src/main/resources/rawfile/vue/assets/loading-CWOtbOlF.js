import{A as L,u as D,z as v,K as y,a6 as Y,ae as b}from"./vendor-DXERZ8cL.js";import{u as k}from"./index-BNkrxnL_.js";function H(e){return typeof e=="function"?e():D(e)}typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const w=()=>{};function W(e,r){function t(...o){return new Promise((a,l)=>{Promise.resolve(e(()=>r.apply(this,o),{fn:r,thisArg:this,args:o})).then(a).catch(l)})}return t}function A(...e){let r=0,t,o=!0,a=w,l,i,s,n,c;!L(e[0])&&typeof e[0]=="object"?{delay:i,trailing:s=!0,leading:n=!0,rejectOnCancel:c=!1}=e[0]:[i,s=!0,n=!0,c=!1]=e;const p=()=>{t&&(clearTimeout(t),t=void 0,a(),a=w)};return d=>{const u=H(i),g=Date.now()-r,m=()=>l=d();return p(),u<=0?(r=Date.now(),m()):(g>u&&(n||!o)?(r=Date.now(),m()):s&&(l=new Promise((h,M)=>{a=c?M:h,t=setTimeout(()=>{r=Date.now(),o=!0,h(m()),p()},Math.max(0,u-g))})),!n&&!t&&(t=setTimeout(()=>o=!0,u)),o=!1,l)}}function C(e,r=200,t=!1,o=!0,a=!1){return W(A(r,t,o,a),e)}const T=/[YMDHhms]o|\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a{1,2}|A{1,2}|m{1,2}|s{1,2}|Z{1,2}|SSS/g;function $(e,r,t,o){let a=e<12?"AM":"PM";return o&&(a=a.split("").reduce((l,i)=>l+=`${i}.`,"")),t?a.toLowerCase():a}function f(e){const r=["th","st","nd","rd"],t=e%100;return e+(r[(t-20)%10]||r[t]||r[0])}function x(e,r,t={}){var o;const a=e.getFullYear(),l=e.getMonth(),i=e.getDate(),s=e.getHours(),n=e.getMinutes(),c=e.getSeconds(),p=e.getMilliseconds(),S=e.getDay(),d=(o=t.customMeridiem)!=null?o:$,u={Yo:()=>f(a),YY:()=>String(a).slice(-2),YYYY:()=>a,M:()=>l+1,Mo:()=>f(l+1),MM:()=>`${l+1}`.padStart(2,"0"),MMM:()=>e.toLocaleDateString(t.locales,{month:"short"}),MMMM:()=>e.toLocaleDateString(t.locales,{month:"long"}),D:()=>String(i),Do:()=>f(i),DD:()=>`${i}`.padStart(2,"0"),H:()=>String(s),Ho:()=>f(s),HH:()=>`${s}`.padStart(2,"0"),h:()=>`${s%12||12}`.padStart(1,"0"),ho:()=>f(s%12||12),hh:()=>`${s%12||12}`.padStart(2,"0"),m:()=>String(n),mo:()=>f(n),mm:()=>`${n}`.padStart(2,"0"),s:()=>String(c),so:()=>f(c),ss:()=>`${c}`.padStart(2,"0"),SSS:()=>`${p}`.padStart(3,"0"),d:()=>S,dd:()=>e.toLocaleDateString(t.locales,{weekday:"narrow"}),ddd:()=>e.toLocaleDateString(t.locales,{weekday:"short"}),dddd:()=>e.toLocaleDateString(t.locales,{weekday:"long"}),A:()=>d(s,n),AA:()=>d(s,n,!1,!0),a:()=>d(s,n,!0),aa:()=>d(s,n,!0,!0)};return r.replace(T,(g,m)=>{var h,M;return(M=m??((h=u[g])==null?void 0:h.call(u)))!=null?M:g})}const E=e=>/,\s*\{/.test(e)||!(e.startsWith("http")||e.startsWith("data:")||e.startsWith("blob:"));function U(e){return location.origin+"/image?path="+encodeURIComponent(e)+"&url="+encodeURIComponent(sessionStorage.getItem("bookUrl"))+"&width="+k().config.readWidth}const z=e=>{let r=new Date().getTime(),t=Math.floor((r-e)/1e3),o="";return t<=30?o="刚刚":t<60?o=t+"秒前":t<3600?o=Math.floor(t/60)+"分钟前":t<86400?o=Math.floor(t/3600)+"小时前":t<2592e3?o=Math.floor(t/86400)+"天前":o=x(new Date(e),"YYYY-MM-DD"),o},F='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"/></svg>',V=(e,r,t=F)=>{const o=v(!1);let a=null;const l=()=>o.value=!1,i=()=>o.value=!0;y(o,n=>{if(!n)return a==null?void 0:a.close();a=b.service({target:D(e),spinner:t,text:r,lock:!0,background:"rgba(0, 0, 0, 0)"})});const s=n=>{if(!(n instanceof Promise))throw TypeError("loadingWrapper argument must be Promise");return i(),n.finally(l)};return Y(()=>{l()}),{isLoading:o,showLoading:i,closeLoading:l,loadingWrapper:s}};export{C as a,z as d,U as g,E as i,V as u};