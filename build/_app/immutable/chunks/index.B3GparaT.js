var E=Object.defineProperty;var j=(e,t,n)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var p=(e,t,n)=>j(e,typeof t!="symbol"?t+"":t,n);import{r as h,n as y,f as w,h as C,i as S,j as B,k as b,l as I,m as P,p as N,q as T,v as q,w as H}from"./scheduler.BvLojk_z.js";let $=!1;function M(){$=!0}function O(){$=!1}function D(e,t,n,a){for(;e<t;){const s=e+(t-e>>1);n(s)<=a?e=s+1:t=s}return e}function L(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const i=[];for(let r=0;r<t.length;r++){const o=t[r];o.claim_order!==void 0&&i.push(o)}t=i}const n=new Int32Array(t.length+1),a=new Int32Array(t.length);n[0]=-1;let s=0;for(let i=0;i<t.length;i++){const r=t[i].claim_order,o=(s>0&&t[n[s]].claim_order<=r?s+1:D(1,s,_=>t[n[_]].claim_order,r))-1;a[i]=n[o]+1;const u=o+1;n[u]=i,s=Math.max(u,s)}const c=[],l=[];let f=t.length-1;for(let i=n[s]+1;i!=0;i=a[i-1]){for(c.push(t[i-1]);f>=i;f--)l.push(t[f]);f--}for(;f>=0;f--)l.push(t[f]);c.reverse(),l.sort((i,r)=>i.claim_order-r.claim_order);for(let i=0,r=0;i<l.length;i++){for(;r<c.length&&l[i].claim_order>=c[r].claim_order;)r++;const o=r<c.length?c[r]:null;e.insertBefore(l[i],o)}}function R(e,t){if($){for(L(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function ee(e,t,n){$&&!n?R(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function U(e){e.parentNode&&e.parentNode.removeChild(e)}function V(e){return document.createElement(e)}function x(e){return document.createTextNode(e)}function te(){return x(" ")}function ne(){return x("")}function ie(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function re(e){return e.dataset.svelteH}function W(e){return Array.from(e.childNodes)}function z(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function A(e,t,n,a,s=!1){z(e);const c=(()=>{for(let l=e.claim_info.last_index;l<e.length;l++){const f=e[l];if(t(f)){const i=n(f);return i===void 0?e.splice(l,1):e[l]=i,s||(e.claim_info.last_index=l),f}}for(let l=e.claim_info.last_index-1;l>=0;l--){const f=e[l];if(t(f)){const i=n(f);return i===void 0?e.splice(l,1):e[l]=i,s?i===void 0&&e.claim_info.last_index--:e.claim_info.last_index=l,f}}return a()})();return c.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,c}function F(e,t,n,a){return A(e,s=>s.nodeName===t,s=>{const c=[];for(let l=0;l<s.attributes.length;l++){const f=s.attributes[l];n[f.name]||c.push(f.name)}c.forEach(l=>s.removeAttribute(l))},()=>a(t))}function ae(e,t,n){return F(e,t,n,V)}function G(e,t){return A(e,n=>n.nodeType===3,n=>{const a=""+t;if(n.data.startsWith(a)){if(n.data.length!==a.length)return n.splitText(a.length)}else n.data=a},()=>x(t),!0)}function le(e){return G(e," ")}function se(e,t){t=""+t,e.data!==t&&(e.data=t)}function fe(e,t,n,a){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,"")}function ce(e,t){return new e(t)}const m=new Set;let d;function ue(){d={r:0,c:[],p:d}}function oe(){d.r||h(d.c),d=d.p}function J(e,t){e&&e.i&&(m.delete(e),e.i(t))}function de(e,t,n,a){if(e&&e.o){if(m.has(e))return;m.add(e),d.c.push(()=>{m.delete(e),a&&(n&&e.d(1),a())}),e.o(t)}else a&&a()}function _e(e){e&&e.c()}function me(e,t){e&&e.l(t)}function K(e,t,n){const{fragment:a,after_update:s}=e.$$;a&&a.m(t,n),b(()=>{const c=e.$$.on_mount.map(T).filter(S);e.$$.on_destroy?e.$$.on_destroy.push(...c):h(c),e.$$.on_mount=[]}),s.forEach(b)}function Q(e,t){const n=e.$$;n.fragment!==null&&(I(n.after_update),h(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function X(e,t){e.$$.dirty[0]===-1&&(q.push(e),H(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function he(e,t,n,a,s,c,l=null,f=[-1]){const i=P;N(e);const r=e.$$={fragment:null,ctx:[],props:c,update:y,not_equal:s,bound:w(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(i?i.$$.context:[])),callbacks:w(),dirty:f,skip_bound:!1,root:t.target||i.$$.root};l&&l(r.root);let o=!1;if(r.ctx=n?n(e,t.props||{},(u,_,...g)=>{const v=g.length?g[0]:_;return r.ctx&&s(r.ctx[u],r.ctx[u]=v)&&(!r.skip_bound&&r.bound[u]&&r.bound[u](v),o&&X(e,u)),_}):[],r.update(),o=!0,h(r.before_update),r.fragment=a?a(r.ctx):!1,t.target){if(t.hydrate){M();const u=W(t.target);r.fragment&&r.fragment.l(u),u.forEach(U)}else r.fragment&&r.fragment.c();t.intro&&J(e.$$.fragment),K(e,t.target,t.anchor),O(),C()}N(i)}class $e{constructor(){p(this,"$$");p(this,"$$set")}$destroy(){Q(this,1),this.$destroy=y}$on(t,n){if(!S(n))return y;const a=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return a.push(n),()=>{const s=a.indexOf(n);s!==-1&&a.splice(s,1)}}$set(t){this.$$set&&!B(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Y="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Y);export{$e as S,le as a,W as b,ae as c,U as d,V as e,ie as f,re as g,ee as h,he as i,de as j,x as k,G as l,R as m,se as n,ne as o,oe as p,fe as q,ue as r,te as s,J as t,ce as u,_e as v,me as w,K as x,Q as y};
