"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["ui_packages_ref-selector_RefSelector_tsx"],{70567:(e,t,r)=>{r.d(t,{W:()=>SearchIndex,r:()=>a});var a,n=r(44544),s=r(71643);let{getItem:i,setItem:c,removeItem:l}=(0,n.Z)("localStorage",{throwQuotaErrorsOnSet:!0});!function(e){e.Branch="branch",e.Tag="tag"}(a||(a={}));let SearchIndex=class SearchIndex{render(){this.selector.render()}async fetchData(){try{if(!this.isLoading||this.fetchInProgress)return;if(!this.bootstrapFromLocalStorage()){this.fetchInProgress=!0,this.fetchFailed=!1;let e=await fetch(`${this.refEndpoint}?type=${this.refType}`,{headers:{Accept:"application/json"}});await this.processResponse(e)}this.isLoading=!1,this.fetchInProgress=!1,this.render()}catch(e){this.fetchInProgress=!1,this.fetchFailed=!0}}async processResponse(e){if(this.emitStats(e),!e.ok){this.fetchFailed=!0;return}let t=e.clone(),r=await e.json();this.knownItems=r.refs,this.cacheKey=r.cacheKey,this.flushToLocalStorage(await t.text())}emitStats(e){if(!e.ok){(0,s.b)({incrementKey:"REF_SELECTOR_BOOT_FAILED"},!0);return}switch(e.status){case 200:(0,s.b)({incrementKey:"REF_SELECTOR_BOOTED_FROM_UNCACHED_HTTP"});break;case 304:(0,s.b)({incrementKey:"REF_SELECTOR_BOOTED_FROM_HTTP_CACHE"});break;default:(0,s.b)({incrementKey:"REF_SELECTOR_UNEXPECTED_RESPONSE"})}}search(e){let t;if(this.searchTerm=e,""===e){this.currentSearchResult=this.knownItems;return}let r=[],a=[];for(let n of(this.exactMatchFound=!1,this.knownItems))if(!((t=n.indexOf(e))<0)){if(0===t){e===n?(a.unshift(n),this.exactMatchFound=!0):a.push(n);continue}r.push(n)}this.currentSearchResult=[...a,...r]}bootstrapFromLocalStorage(){let e=i(this.localStorageKey);if(!e)return!1;let t=JSON.parse(e);return t.cacheKey===this.cacheKey&&"refs"in t?(this.knownItems=t.refs,this.isLoading=!1,(0,s.b)({incrementKey:"REF_SELECTOR_BOOTED_FROM_LOCALSTORAGE"}),!0):(l(this.localStorageKey),!1)}async flushToLocalStorage(e){try{c(this.localStorageKey,e)}catch(t){if(t.message.toLowerCase().includes("quota")){this.clearSiblingLocalStorage(),(0,s.b)({incrementKey:"REF_SELECTOR_LOCALSTORAGE_OVERFLOWED"});try{c(this.localStorageKey,e)}catch(e){e.message.toLowerCase().includes("quota")&&(0,s.b)({incrementKey:"REF_SELECTOR_LOCALSTORAGE_GAVE_UP"})}}else throw t}}clearSiblingLocalStorage(){for(let e of Object.keys(localStorage))e.startsWith(SearchIndex.LocalStoragePrefix)&&l(e)}clearLocalStorage(){l(this.localStorageKey)}get localStorageKey(){return`${SearchIndex.LocalStoragePrefix}:${this.nameWithOwner}:${this.refType}`}constructor(e,t,r,a,n){this.knownItems=[],this.currentSearchResult=[],this.exactMatchFound=!1,this.searchTerm="",this.isLoading=!0,this.fetchInProgress=!1,this.fetchFailed=!1,this.refType=e,this.selector=t,this.refEndpoint=r,this.cacheKey=a,this.nameWithOwner=n}};SearchIndex.LocalStoragePrefix="ref-selector"},62073:(e,t,r)=>{r.d(t,{D:()=>c});var a=r(67294),n=r(78249),s=r(98224);function i(){let e=(0,a.useContext)(s.kb);return e}function c(e,t,r=[]){let c=(0,a.useCallback)(e,r),l=i(),o=(0,a.useRef)(l===s.i$.ClientRender),[h,d]=(0,a.useState)(()=>l===s.i$.ClientRender?c():t),u=(0,a.useCallback)(()=>{d(c)},[c]);return(0,n.g)(()=>{o.current||d(c),o.current=!1},[c,...r]),[h,u]}},79431:(e,t,r)=>{r.d(t,{H:()=>h});var a,n,s,i=r(85893),c=r(42483),l=r(67294),o=r(78720);function h({items:e,itemHeight:t,sx:r,renderItem:a,makeKey:n}){let s=(0,l.useRef)(null),c=(0,l.useCallback)(()=>t,[t]),h=(0,o.o)({parentRef:s,size:e.length,estimateSize:c});return(0,i.jsx)(d,{ref:s,sx:r,virtualizer:h,children:h.virtualItems.map(t=>(0,i.jsx)(u,{virtualRow:t,children:a(e[t.index])},n(e[t.index])))})}let d=l.forwardRef(function({children:e,sx:t,virtualizer:r},a){return(0,i.jsx)(c.Z,{ref:a,sx:t,children:(0,i.jsx)(c.Z,{sx:{height:r.totalSize,width:"100%",position:"relative"},children:e})})});function u({children:e,virtualRow:t}){return(0,i.jsx)(c.Z,{sx:{position:"absolute",top:0,left:0,width:"100%",height:`${t.size}px`,transform:`translateY(${t.start}px)`},children:e})}try{(a=h).displayName||(a.displayName="FixedSizeVirtualList")}catch{}try{(n=VirtualListContainerInner).displayName||(n.displayName="VirtualListContainerInner")}catch{}try{(s=u).displayName||(s.displayName="ItemContainer")}catch{}},79515:(e,t,r)=>{r.d(t,{h:()=>c});var a,n=r(85893),s=r(42483);function i(e,t){if(!t)return[e];let r=e.toLowerCase().split(t.toLowerCase());if(r.length<2)return[e];let a=0,n=[];for(let s of r)n.push(e.substring(a,a+s.length)),a+=s.length,n.push(e.substring(a,a+t.length)),a+=t.length;return n}function c({text:e,search:t,hideOverflow:r=!1,overflowWidth:a=0}){let c=i(e,t),l=c.map((e,t)=>t%2==1?(0,n.jsx)("strong",{className:"color-fg-default",children:e},t):e),o=a?`${a}px`:void 0;return(0,n.jsx)(s.Z,{sx:{maxWidth:o,overflow:r?"hidden":"visible",textOverflow:"ellipsis",whiteSpace:"nowrap",color:"fg.muted"},children:l})}try{(a=c).displayName||(a.displayName="HighlightedText")}catch{}},80490:(e,t,r)=>{r.d(t,{ox:()=>eb,cq:()=>ey,li:()=>eg,Z7:()=>ep});var a,n,s,i,c,l,o,h,d,u,f,x,m,p,y,g,b,j,S,C=r(85893),R=r(31147),w=r(78912),T=r(51461),k=r(10866),L=r(85529),N=r(50901),O=r(42483),E=r(75308),v=r(50919),F=r(22390),Z=r(74121),I=r(71067),_=r(97011),D=r(67294),A=r(86283),W=r(62073),z=r(12470),B=r(73935);function K({isOpen:e,onDismiss:t,onConfirm:r}){let[a]=(0,W.D)(()=>document.body,null,[A.n4?.body]);return a?(0,B.createPortal)((0,C.jsxs)(z.Z,{isOpen:e,onDismiss:t,children:[(0,C.jsx)(z.Z.Header,{children:"Create branch"}),(0,C.jsxs)(O.Z,{sx:{p:3},children:[(0,C.jsx)(_.Z,{children:"A tag already exists with the provided branch name. Many Git commands accept both tag and branch names, so creating this branch may cause unexpected behavior. Are you sure you want to create this branch?"}),(0,C.jsxs)(O.Z,{sx:{display:"flex",justifyContent:"flex-end",mt:3},children:[(0,C.jsx)(w.z,{onClick:t,children:"Cancel"}),(0,C.jsx)(w.z,{variant:"danger",onClick:r,sx:{ml:2},children:"Create"})]})]})]}),document.body):null}try{(a=K).displayName||(a.displayName="CheckTagNameDialog")}catch{}var P=r(89445);async function $(e,t){let r=new FormData;r.set("value",t);let a=await (0,P.Q)(e,{method:"POST",body:r,headers:{Accept:"application/json"}});return!!a.ok&&!!await a.text()}async function H(e,t,r){let a=new FormData;a.set("name",t),a.set("branch",r);let n=await (0,P.Q)(e,{method:"POST",body:a,headers:{Accept:"application/json"}});if(n.ok)return{success:!0,name:(await n.json()).name};try{let{error:e}=await n.json();if(e)return{success:!1,error:e};throw Error("Unknown response from create branch API")}catch{return{success:!1,error:"Something went wrong."}}}var M=r(2708);function V(e){let{hotKey:t,onOpenChange:r,size:a,currentCommitish:n,refType:s,children:i,preventClosing:c,inputRef:l,overlayOpen:o,onOverlayChange:h,focusTrapEnabled:d=!0,buttonClassName:u,allowResizing:f}=e,x=(0,D.useRef)(`branch-picker-${Date.now()}`),m=(0,D.useCallback)(e=>{h(e),r?.(e)},[r,h]),p=(0,D.useMemo)(()=>d?{initialFocusRef:l}:{initialFocusRef:l,disabled:!0},[d,l]);return(0,C.jsx)(M.w,{open:o,overlayProps:{role:"dialog",width:"medium"},onOpen:()=>m(!0),onClose:()=>!c&&m(!1),renderAnchor:e=>(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(w.z,{...e,"data-hotkey":t,size:a,sx:{svg:{color:"fg.muted"},display:"flex",minWidth:f?0:void 0,"> span":{width:"inherit"}},trailingIcon:L.AS7,"aria-label":`${n} ${s}`,"data-testid":"anchor-button",id:x.current,className:u,children:(0,C.jsxs)(O.Z,{sx:{display:"flex"},children:[(0,C.jsx)(O.Z,{sx:{mr:1,color:"fg.muted"},children:"tag"===s?(0,C.jsx)(L.lO_,{size:"small"}):(0,C.jsx)(L.fnQ,{size:"small"})}),(0,C.jsx)(O.Z,{sx:{fontSize:1,minWidth:0,maxWidth:f?void 0:125,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:(0,C.jsxs)(_.Z,{sx:{minWidth:0},children:["\xa0",n]})})]})}),(0,C.jsx)("button",{hidden:!0,"data-hotkey":t,onClick:()=>m(!0),"data-hotkey-scope":"read-only-cursor-text-area"})]}),focusTrapSettings:p,focusZoneSettings:{disabled:!0},children:(0,C.jsx)(O.Z,{"data-testid":"overlay-content","aria-labelledby":x.current,id:"selectPanel",children:i})})}try{(n=V).displayName||(n.displayName="RefSelectorAnchoredOverlay")}catch{}function Q({text:e,onClick:t,href:r,sx:a}){let n=(0,C.jsx)(O.Z,{sx:{...a},children:e}),s={sx:{minWidth:0}};return r?(0,C.jsx)(N.S.LinkItem,{role:"link",href:r,onClick:()=>t?.(),...s,children:n}):(0,C.jsx)(N.S.Item,{role:"button",onSelect:()=>t?.(),...s,children:n})}try{(s=Q).displayName||(s.displayName="RefSelectorFooter")}catch{}var G=r(79431),U=r(63309),q=r(79515);let Y=D.memo(function({isCurrent:e,isDefault:t,href:r,gitRef:a,filterText:n,onSelect:s,onClick:i}){let c=(0,C.jsx)(J,{gitRef:a,isDefault:t,isCurrent:e,filterText:n}),l={"aria-checked":e,sx:{minWidth:0},onSelect:()=>s?.(a),onClick:()=>i?.(a)};return r?(0,C.jsx)(N.S.LinkItem,{href:r,role:"menuitemradio",...l,children:c}):(0,C.jsx)(N.S.Item,{...l,children:c})}),J=D.memo(function({isCurrent:e,isDefault:t,gitRef:r,filterText:a,showLeadingVisual:n=!0}){return(0,C.jsxs)(O.Z,{style:{display:"flex",justifyContent:"space-between"},children:[(0,C.jsxs)(O.Z,{style:{display:"flex",minWidth:0,alignItems:"flex-end"},children:[n&&(0,C.jsx)(I.Z,{icon:L.nQG,"aria-hidden":!0,sx:{pr:1,visibility:e?void 0:"hidden"}}),(0,C.jsx)(q.h,{hideOverflow:!0,search:a,text:r},r)]}),t&&(0,C.jsx)(U.Z,{children:"default"})]})});try{(i=Y).displayName||(i.displayName="RefItem")}catch{}try{(c=J).displayName||(c.displayName="RefItemContent")}catch{}function X(e){return e.refs.length>20?(0,C.jsx)(et,{...e}):(0,C.jsx)(ee,{...e})}function ee({refs:e,defaultBranch:t,currentCommitish:r,getHref:a,filterText:n,onSelectItem:s}){return(0,C.jsx)(O.Z,{sx:{maxHeight:330,overflowY:"auto"},children:e.map(e=>(0,C.jsx)(Y,{href:a?.(e),isCurrent:r===e,isDefault:t===e,filterText:n,gitRef:e,onSelect:s,onClick:s},e))})}function et({refs:e,defaultBranch:t,currentCommitish:r,getHref:a,filterText:n,onSelectItem:s}){return(0,C.jsx)(G.H,{items:e,itemHeight:32,sx:{maxHeight:330,overflowY:"auto"},makeKey:e=>e,renderItem:e=>(0,C.jsx)(Y,{href:a?.(e),isCurrent:r===e,isDefault:t===e,filterText:n,gitRef:e,onSelect:s,onClick:s},e)})}try{(l=X).displayName||(l.displayName="RefsList")}catch{}try{(o=ee).displayName||(o.displayName="FullRefsList")}catch{}try{(h=et).displayName||(h.displayName="VirtualRefsList")}catch{}var er=r(70567);function ea(e,t,r,a,n,s){let[i,c]=(0,D.useState)({status:"uninitialized",refs:[],showCreateAction:!1,searchIndex:null}),l=(0,D.useRef)({render:()=>{c(es(h.current,s))}}),o=(0,D.useRef)({render:()=>{c(es(d.current,s))}}),h=ei(()=>en(e,t,r,"branch",l.current)),d=ei(()=>en(e,t,r,"tag",o.current));return(0,D.useEffect)(()=>{let n=`${t}/${r}`;h.current.nameWithOwner!==n&&(h.current=en(e,t,r,"branch",l.current)),d.current.nameWithOwner!==n&&(d.current=en(e,t,r,"tag",o.current)),async function(){let e="branch"===a?h.current:d.current;e.render(),await e.fetchData(),e.search(""),e.render()}()},[e,t,r,a,h,d]),(0,D.useEffect)(()=>{let e="branch"===a?h.current:d.current;e.search(n),e.render()},[n,a,h,d]),i}function en(e,t,r,a,n){return new er.W("branch"===a?er.r.Branch:er.r.Tag,n,(0,k.FL)({owner:t,repo:r,action:"refs"}),e,`${t}/${r}`)}function es(e,t){let r=e.fetchFailed?"failed":e.isLoading?"loading":"loaded",a=e.currentSearchResult,n=e.refType===er.r.Branch&&t&&e.searchTerm.length>0&&!e.exactMatchFound;return{status:r,refs:a,showCreateAction:n,searchIndex:e}}function ei(e){let t=(0,D.useRef)();return t.current||(t.current=e()),t}function ec(e){let{cacheKey:t,owner:r,repo:a,canCreate:n,types:s,hotKey:i,onOpenChange:c,size:l,getHref:o,onBeforeCreate:h,onRefTypeChanged:d,currentCommitish:u,onCreateError:f,onSelectItem:x,closeOnSelect:m,selectedRefType:p,customFooterItemProps:y,buttonClassName:g,allowResizing:b}=e,[j,S]=(0,D.useState)(""),R=(0,D.useRef)(null),w=(0,D.useRef)(null),[T,L]=(0,D.useState)(!1),[N,O]=(0,D.useState)(!0),[E,v]=(0,D.useState)(!1),[F,Z]=(0,D.useState)(p??(s??ep)[0]),I=ea(t,r,a,F,j,n),_=(0,k.FL)({owner:r,repo:a,action:"branches"}),A=(0,k.dQ)({owner:r,repo:a}),W=(0,D.useCallback)(async()=>{h?.(j);let e=await H(_,j,u);e.success?o&&(I.searchIndex?.clearLocalStorage(),window.location.href=o(e.name)):f?.(e.error)},[h,j,_,u,o,f,I.searchIndex]),z=(0,D.useCallback)(async()=>{if(await $(A,j)){v(!0),O(!1);return}v(!1),O(!1),W()},[A,j,W,v]),B=(0,D.useCallback)(e=>{Z(e),d?.(e)},[Z,d]);function P(){L(!1)}let M=(0,D.useCallback)((e,t)=>{x?.(e,t),P()},[x]);return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(V,{refType:F,currentCommitish:u,focusTrapEnabled:N,preventClosing:E,size:l,onOpenChange:c,hotKey:i,inputRef:R,overlayOpen:T,onOverlayChange:L,buttonClassName:g,allowResizing:b,children:(0,C.jsx)(el,{filterText:j,onFilterChange:S,refType:F,selectedRefType:F,onRefTypeChange:B,refsState:I,onCreateError:e.onCreateError,showTagWarningDialog:E,setShowTagWarningDialog:v,onCreateBranch:z,inputRef:R,createButtonRef:w,onSelectItem:M,closeOnSelect:m,closeRefSelector:P,customFooterItemProps:y,...e})}),(0,C.jsx)(K,{isOpen:E,onDismiss:()=>{v(!1),w.current?.focus()},onConfirm:W})]})}function el({canCreate:e,currentCommitish:t,defaultBranch:r,filterText:a,getHref:n,hideShowAll:s,onSelectItem:i,closeOnSelect:c,closeRefSelector:l,onFilterChange:o,onRefTypeChange:h,owner:d,selectedRefType:u,refsState:f,refType:x,repo:m,types:p,onCreateBranch:y,inputRef:g,createButtonRef:b,customFooterItemProps:j,viewAllJustify:S}){let{refs:R,showCreateAction:w,status:T}=f;return(0,C.jsxs)(N.S,{showDividers:!0,children:[(0,C.jsxs)(O.Z,{sx:{borderBottom:"1px solid",borderColor:"border.subtle",pb:2},children:[(0,C.jsxs)(O.Z,{sx:{display:"flex",pb:2,px:2,justifyContent:"space-between",alignItems:"center"},children:[(0,C.jsx)(E.Z,{as:"h5",sx:{pl:2,fontSize:"inherit"},children:ed(p??ep)}),(0,C.jsx)(v.h,{"aria-label":"Cancel",variant:"invisible",icon:L.b0D,sx:{color:"fg.muted"},onClick:l})]}),(0,C.jsx)(eo,{defaultText:a,refType:x,canCreate:e,onFilterChange:o,ref:g})]}),(0,C.jsxs)(O.Z,{sx:{pt:2,pb:w&&0===R.length?0:2},children:[(p??ep).length>1&&(0,C.jsx)(O.Z,{sx:{px:2,pb:2},children:(0,C.jsx)(eg,{refType:x,onRefTypeChanged:h,sx:{mx:-2,borderBottom:"1px solid",borderColor:"border.muted","> nav":{borderBottom:"none"}}})}),"loading"===T||"uninitialized"===T?(0,C.jsx)(eu,{refType:x}):"failed"===T?(0,C.jsx)(eb,{refType:x}):0!==R.length||w?(0,C.jsx)(X,{filterText:a,refs:R,defaultBranch:"branch"===x?r:"",currentCommitish:x===u?t:"",getHref:n,onSelectItem:e=>{i?.(e,x),c&&l()}}):(0,C.jsx)(ef,{})]}),w&&(0,C.jsxs)(C.Fragment,{children:[R.length>0&&(0,C.jsx)(N.S.Divider,{sx:{marginTop:0,backgroundColor:"border.subtle"}}),(0,C.jsx)(em,{currentCommitish:t,newRefName:a,onCreateBranch:y,createButtonRef:b})]}),(!s||j)&&(0,C.jsx)(N.S.Divider,{sx:{marginTop:w?2:0,backgroundColor:"border.subtle"}}),!s&&(0,C.jsx)(ex,{justify:S,refType:x,owner:d,repo:m,onClick:l}),j&&(0,C.jsx)(Q,{...j,onClick:function(){j?.onClick?.(),l()}})]})}let eo=(0,D.forwardRef)(eh);function eh({refType:e,canCreate:t,onFilterChange:r,defaultText:a},n){return(0,C.jsx)(O.Z,{sx:{px:2},children:(0,C.jsx)(F.Z,{value:a,sx:{width:"100%"},placeholder:"tag"===e?"Find a tag...":t?"Find or create a branch...":"Find a branch...",ref:n,onInput:e=>{let t=e.target;t instanceof HTMLInputElement&&r(t.value)}})})}function ed(e){return e.includes("branch")&&e.includes("tag")?"Switch branches/tags":e.includes("branch")?"Switch branches":e.includes("tag")?"Switch tags":void 0}function eu({refType:e}){return(0,C.jsx)(O.Z,{sx:{display:"flex",justifyContent:"center",p:2},children:(0,C.jsx)(Z.Z,{size:"medium","aria-label":`Loading ${"branch"===e?"branches":"tags"}...`})})}function ef(){return(0,C.jsx)(O.Z,{sx:{p:3,display:"flex",justifyContent:"center"},children:"Nothing to show"})}function ex({refType:e,owner:t,repo:r,onClick:a,justify:n="start"}){let s="branch"===e?"branches":"tags";return(0,C.jsx)(N.S.LinkItem,{role:"link",href:(0,k.FL)({owner:t,repo:r,action:s}),onClick:a,sx:{display:"flex",justifyContent:"center"},children:(0,C.jsxs)(O.Z,{sx:{display:"flex",justifyContent:n},children:["View all ",s]})})}function em({currentCommitish:e,newRefName:t,onCreateBranch:r,createButtonRef:a}){return(0,C.jsxs)(N.S.Item,{role:"button",onSelect:r,ref:a,children:[(0,C.jsx)(I.Z,{icon:L.fnQ,sx:{mr:2,color:"fg.muted"}}),(0,C.jsx)(_.Z,{children:"Create branch\xa0"}),(0,C.jsx)(_.Z,{sx:{fontWeight:600,fontFamily:"monospace"},children:t}),(0,C.jsx)(_.Z,{children:"\xa0from\xa0"}),(0,C.jsx)(_.Z,{sx:{fontWeight:600,fontFamily:"monospace"},children:e})]})}try{(d=ec).displayName||(d.displayName="RefSelectorV1")}catch{}try{(u=el).displayName||(u.displayName="RefSelectorActionList")}catch{}try{(f=eo).displayName||(f.displayName="RefTextFilter")}catch{}try{(x=eh).displayName||(x.displayName="RefTextFilterWithRef")}catch{}try{(m=eu).displayName||(m.displayName="Loading")}catch{}try{(p=ef).displayName||(p.displayName="RefsZeroState")}catch{}try{(y=ex).displayName||(y.displayName="ViewAllRefsAction")}catch{}try{(g=em).displayName||(g.displayName="CreateRefAction")}catch{}let ep=["branch","tag"];function ey(e){return(0,C.jsx)(ec,{...e})}function eg({refType:e,onRefTypeChanged:t,sx:r}){return(0,C.jsxs)(R.Z,{sx:{pl:2,...r},"aria-label":"Ref type",children:[(0,C.jsx)(R.Z.Link,{as:w.z,id:"branch-button","aria-controls":"branches",selected:"branch"===e,onClick:()=>t("branch"),sx:{borderBottomRightRadius:0,borderBottomLeftRadius:0},children:"Branches"}),(0,C.jsx)(R.Z.Link,{as:w.z,id:"tag-button","aria-controls":"tags",selected:"tag"===e,onClick:()=>t("tag"),sx:{borderBottomRightRadius:0,borderBottomLeftRadius:0},children:"Tags"})]})}function eb({refType:e}){return(0,C.jsxs)(T.Z,{variant:"danger",children:["Could not load ","branch"===e?"branches":"tags"]})}try{(b=ey).displayName||(b.displayName="RefSelector")}catch{}try{(j=eg).displayName||(j.displayName="RefTypeTabs")}catch{}try{(S=eb).displayName||(S.displayName="LoadingFailed")}catch{}}}]);
//# sourceMappingURL=ui_packages_ref-selector_RefSelector_tsx-d0c1674153ee.js.map