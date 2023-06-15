"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["codespaces"],{11645:(e,t,o)=>{var r=o(36071),n=o(59753),s=o(65935),i=o(58700);function a(e){let t=new URL(document.location.href,window.location.origin),o=new URLSearchParams(t.search),r=["vscs_target"];for(let[t,n]of e.entries()){if(r.includes(t)||!n){o.delete(t);continue}o.set(t,n)}window.history.replaceState({},"",`?${o.toString()}`)}function l(){let e=new URL(document.location.href,window.location.origin),t=new URLSearchParams(e.search);t.set("response_error","true"),window.location.replace(`${window.location.pathname}?${t.toString()}`)}(0,n.on)("remote-input-error","#js-codespaces-repository-select",()=>{let e=document.querySelector("#js-codespaces-unable-load-repositories-warning");e.hidden=!1}),(0,s.AC)(".js-new-codespace-form",async function(e,t){let o=e.closest("[data-replace-remote-form-target]"),r=o.querySelector(".js-new-codespace-submit-button");r instanceof HTMLInputElement&&(r.disabled=!0),e.classList.remove("is-error"),e.classList.add("is-loading");try{r&&r.setAttribute("disabled","true");let e=await t.html();if(200!==e.status&&l(),o.replaceWith(e.html),"true"===o.getAttribute("data-allow-update-url")){let e=new FormData(document.querySelector("form.js-new-codespace-form"));a(e)}}catch(e){throw l(),e}});let c=null;function d(e){if(c=e,null!==e){let e=document.querySelector(".js-codespace-loading-steps");e.setAttribute("data-current-state",c)}}(0,r.N7)(".js-codespace-loading-steps",{constructor:HTMLElement,add:e=>{let t=e.getAttribute("data-current-state");t&&d(t)}}),(0,r.N7)(".js-codespace-advance-state",{constructor:HTMLElement,add:e=>{let t=e.getAttribute("data-state");t&&d(t)}});let u=null;function p(e){(0,s.AC)(".js-fetch-cascade-token",async function(e,t){try{let e=await t.json(),o=e.json;u=o.token}catch(e){}}),(0,i.Bt)(e)}function h(e,t,o){let r=document.querySelector(e);if(r){let e=Date.now(),r=()=>{let r=Date.now()-e;if(u||r>=o){clearInterval(n),t(u||void 0);return}},n=setInterval(r,50)}}function f(e,t){if(""!==t.value){let t=e.querySelector("form");(0,i.Bt)(t)}else{let e=document.querySelector(".js-fetch-cascade-token");p(e),h(".js-workbench-form-container",m,1e4)}}function m(e){let t=document.querySelector(".js-workbench-form-container form");t&&e?(y(t,e),g(t,e),(0,i.Bt)(t)):d("failed")}function y(e,t){let o=e.querySelector(".js-cascade-token");o&&o.setAttribute("value",t)}function g(e,t){let o=e.querySelector(".js-partner-info");if(o){let e=o.getAttribute("value");e&&(e=e.replace("%CASCADE_TOKEN_PLACEHOLDER%",t),o.setAttribute("value",e))}}(0,r.N7)(".js-auto-submit-form",{constructor:HTMLFormElement,initialize:i.Bt}),(0,r.N7)(".js-workbench-form-container",{constructor:HTMLElement,add:e=>{let t=e.querySelector(".js-cascade-token");f(e,t)}});var b=o(76006),v=o(69567),w=o(19146),T=o(67525);function E(e){let t=e.querySelectorAll(".js-toggle-hidden");for(let e of t)e.hidden=!e.hidden;let o=e.querySelectorAll(".js-toggle-disabled");for(let e of o)e.getAttribute("aria-disabled")?e.removeAttribute("aria-disabled"):e.setAttribute("aria-disabled","true")}async function A(){let e=document.querySelector(".js-codespaces-details-container");e&&(e.open=!1);let t=document.querySelector("new-codespace");if(t&&!t.getAttribute("data-no-submit-on-create"))try{let e=await fetch("/codespaces/new");if(e&&e.ok){let o=(0,T.r)(document,await e.text());t.replaceWith(o)}}catch(e){}}async function _(e,t){let o=document.querySelector(`#${e}`),r=await (0,w.W)({content:o.content.cloneNode(!0),dialogClass:"project-dialog"});return t&&t.setAttribute("aria-expanded","true"),r.addEventListener("dialog:remove",function(){t&&E(t)},{once:!0}),r}async function S(e){let t=await fetch(e.action,{method:e.method,body:new FormData(e),headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest"}});if(t.ok){let o=await t.json();if(o.codespace_url)window.location.href=o.codespace_url,E(e),A(),L();else{let t=e.closest("get-repo")||e.closest("new-codespace");t?(e.setAttribute("data-src",o.loading_url),e.dispatchEvent(new CustomEvent("pollvscode"))):e.closest("create-button")&&(e.setAttribute("data-src",o.loading_url),e.dispatchEvent(new CustomEvent("prpollvscode"))),E(e)}}else if(422===t.status){let o=await t.json();if("concurrency_limit_error"===o.error_type)await _("concurrency-error",e);else{let t=document.querySelector("template.js-flash-template"),r=o.error;t.after(new v.R(t,{className:"flash-error",message:r})),E(e)}}}async function L(){let e=document.querySelector(".js-codespaces-completable"),t=e&&e.getAttribute("data-src");if(!t)return;let o=await fetch(t,{method:"GET",headers:{Accept:"text/fragment+html","X-Requested-With":"XMLHttpRequest"}});if(o.ok){let t=(0,T.r)(document,await o.text());e.replaceWith(t)}else throw Error(`Unexpected response: ${o.statusText}`)}(0,n.on)("submit",".js-toggle-hidden-codespace-form",function(e){let t=e.currentTarget;E(t)}),(0,n.on)("submit",".js-create-codespaces-form-command",function(e){let t=e.currentTarget;t.classList.contains("js-open-in-vscode-form")||(A(),E(t))}),(0,n.on)("submit","form.js-open-in-vscode-form",async function(e){e.preventDefault();let t=e.currentTarget;await S(t)});let D=class ConcurrencyLimitElement extends HTMLElement{async connectedCallback(){_("concurrency-error")}};D=function(e,t,o,r){var n,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(i=(s<3?n(i):s>3?n(t,o,i):n(t,o))||i);return s>3&&i&&Object.defineProperty(t,o,i),i}([b.Ih],D);var j=o(14992),x=function(e,t,o,r){var n,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(i=(s<3?n(i):s>3?n(t,o,i):n(t,o))||i);return s>3&&i&&Object.defineProperty(t,o,i),i};let k=class NewCodespaceElement extends HTMLElement{async connectedCallback(){let e=new URL(document.location.href,window.location.origin),t=new URLSearchParams(e.search);t.has("response_error")&&(t.delete("response_error"),window.history.replaceState({},"",`?${t.toString()}`))}toggleLoadingVscode(){let e=this.loadingVscode.hidden,t=this.children;for(let o=0;o<t.length;o++)t[o].hidden=e;this.loadingVscode.hidden=!e}machineTypeSelected(e){let t=e.currentTarget,o=t.getAttribute("data-sku-name");this.skuNameInput&&o&&(this.skuNameInput.value=o),this.advancedOptionsForm&&(0,i.Bt)(this.advancedOptionsForm)}pollForVscode(e){this.toggleLoadingVscode();let t=e.currentTarget.getAttribute("data-src");t&&this.vscodePoller.setAttribute("src",t)}vscsTargetUrlUpdated(e){let t=e.currentTarget;this.vscsTargetUrl.value=t.value}async declarativeSecretsHashUpdated(e){let t=e.currentTarget,o=t.getAttribute("data-name");if(!o)return;let r=t.value,n=(0,j.Jx)(t.getAttribute("data-public-key"));"checkbox"!==t.getAttribute("type")||t.checked||(r=""),r?this.secrets_hash.set(o,(0,j.cv)(await (0,j.HI)(n,r))):this.secrets_hash.delete(o),this.declarativeSecretsHash.value=JSON.stringify(Object.fromEntries(this.secrets_hash))}constructor(...e){super(...e),this.secrets_hash=new Map}};x([b.fA],k.prototype,"declarativeSecretsHash",void 0),x([b.fA],k.prototype,"vscsTargetUrl",void 0),x([b.fA],k.prototype,"loadingVscode",void 0),x([b.fA],k.prototype,"vscodePoller",void 0),x([b.fA],k.prototype,"advancedOptionsForm",void 0),x([b.fA],k.prototype,"skuNameInput",void 0),k=x([b.Ih],k);var C=function(e,t,o,r){var n,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(i=(s<3?n(i):s>3?n(t,o,i):n(t,o))||i);return s>3&&i&&Object.defineProperty(t,o,i),i};let P=class ExportBranchElement extends HTMLElement{connectedCallback(){this.abortPoll=new AbortController,this.loadingIndicator.hidden||this.startPoll()}disconnectedCallback(){this.abortPoll?.abort()}async exportBranch(e){e.preventDefault(),this.form.hidden=!0,this.loadingIndicator.hidden=!1;let t=await fetch(this.form.action,{method:this.form.method,body:new FormData(this.form),headers:{Accept:"text/fragment+html","X-Requested-With":"XMLHttpRequest"}});t.ok?this.startPoll():(this.form.hidden=!1,this.loadingIndicator.hidden=!0)}async startPoll(){let e=this.getAttribute("data-exported-codespace-url")||"",t=await this.poll(e);if(t){if(t.ok)this.loadingIndicator.hidden=!0,this.viewBranchLink.hidden=!1;else{let e=this.getAttribute("data-export-error-redirect-url")||"";window.location.href=encodeURI(e)}}}async poll(e,t=1e3){if(this.abortPoll?.signal.aborted)return;let o=await fetch(e,{signal:this.abortPoll?.signal});return 202===o.status||404===o.status?(await new Promise(e=>setTimeout(e,t)),this.poll(e,1.5*t)):o}constructor(...e){super(...e),this.abortPoll=null}};C([b.fA],P.prototype,"form",void 0),C([b.fA],P.prototype,"loadingIndicator",void 0),C([b.fA],P.prototype,"viewBranchLink",void 0),P=C([b.Ih],P);var R=o(34892),q=function(e,t,o,r){var n,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(i=(s<3?n(i):s>3?n(t,o,i):n(t,o))||i);return s>3&&i&&Object.defineProperty(t,o,i),i};let M=class OptionsPopoverElement extends HTMLElement{connectedCallback(){let e=document.getElementById("codespaces-dropdown-list");null!=e&&(e.onscroll=()=>this.updateDetailsOnScroll(0,e.scrollTop+window.pageYOffset),document.onscroll=()=>this.updateDetailsOnScroll(0,e?.scrollTop+window.pageYOffset),onresize=()=>this.updateDetailsOnScroll(0,e?.scrollTop+window.pageYOffset))}reset(e){for(e?.preventDefault(),this.dropdownDetails&&(this.dropdownDetails.hidden=!1),this.modalDetails&&(this.modalDetails.hidden=!0),this.exportDetails&&(this.exportDetails.hidden=!0),this.publishDetails&&(this.publishDetails.hidden=!0),this.forkDetails&&(this.forkDetails.hidden=!0),this.editorDetails&&(this.editorDetails.hidden=!0),this.skuForm&&(this.skuForm.hidden=!1);this.resultMessage?.firstChild;)this.resultMessage.removeChild(this.resultMessage.firstChild);this.resultMessage&&(this.resultMessage.hidden=!0),this.errorMessage&&(this.errorMessage.hidden=!0)}updateDetailsOnScroll(e,t){let o=document.getElementById("codespaces-dropdown-list");if(null!=o){this.reset(void 0);let o=document.querySelectorAll("details");for(let r of o)this.isSubMenu(r)&&r.children[1]&&(t&&t>e?r.children[1].style.marginTop=`-${t}px`:r.children[1].style.marginTop="0px")}}isSubMenu(e){return"options-popover.dropdownDetails"===e.getAttribute("data-target")||"options-popover.editorDetails"===e.getAttribute("data-target")||"options-popover.exportDetails"===e.getAttribute("data-target")||"options-popover.publishDetails"===e.getAttribute("data-target")}showSettingsModal(){this.dropdownDetails.hidden=!0,this.modalDetails.open=!0,this.modalDetails.hidden=!1}showExportModal(){this.dropdownDetails.hidden=!0,this.exportDetails&&(this.exportDetails.open=!0,this.exportDetails.hidden=!1),this.insertBranchExportComponent()}showEditors(){this.dropdownDetails.hidden=!0,this.editorDetails&&(this.editorDetails.open=!0,this.editorDetails.hidden=!1)}closeEditors(){this.dropdownDetails.open=!0,this.dropdownDetails.hidden=!1,this.editorDetails&&(this.editorDetails.open=!1,this.editorDetails.hidden=!0)}showPublishAndExportModal(){this.dropdownDetails.hidden=!0,this.publishDetails&&(this.publishDetails.open=!0,this.publishDetails.hidden=!1),this.insertBranchExportComponent()}showForkAndExportModal(){this.dropdownDetails.hidden=!0,this.forkDetails&&(this.forkDetails.open=!0,this.forkDetails.hidden=!1),this.insertBranchExportComponent()}showRenamePrompt(){if(this.renameButton&&this.renameForm&&this.renameInput){let e=this.renameButton.getAttribute("data-rename-prompt"),t=this.renameButton.getAttribute("data-display-name");if(e&&t){let o=prompt(e,t)||null,r=o?.trim();r&&t!==r&&(this.renameInput.value=r,(0,i.Bt)(this.renameForm))}}}async insertBranchExportComponent(){let e=this.querySelector("[data-branch-export-url]");if(!e)return;let t=e.getAttribute("data-branch-export-url");if(!t)return;let o=await (0,R.a_)(document,t);o&&(e.textContent="",e.appendChild(o))}applyPublishParams(){if(this.publishForm){let e=Object.fromEntries(new FormData(this.publishForm).entries()),t=this.querySelector('[data-target="export-branch.form"]');if(t){let o=`?name=${e.name}&visibility=${e.visibility}`,r=(t.getAttribute("action")||"").split("?")[0]+o;t.setAttribute("action",r)}}}openDeepLink(e){e.preventDefault();let t=e.target,o=t.closest("button")?.getAttribute("data-update-url");o&&window.open(o,"_self"),this.reset(e)}};q([b.fA],M.prototype,"dropdownDetails",void 0),q([b.fA],M.prototype,"modalDetails",void 0),q([b.fA],M.prototype,"settingsModal",void 0),q([b.fA],M.prototype,"skuForm",void 0),q([b.fA],M.prototype,"resultMessage",void 0),q([b.fA],M.prototype,"errorMessage",void 0),q([b.fA],M.prototype,"exportDetails",void 0),q([b.fA],M.prototype,"publishDetails",void 0),q([b.fA],M.prototype,"publishForm",void 0),q([b.fA],M.prototype,"forkDetails",void 0),q([b.fA],M.prototype,"editorDetails",void 0),q([b.fA],M.prototype,"renameButton",void 0),q([b.fA],M.prototype,"renameForm",void 0),q([b.fA],M.prototype,"renameInput",void 0),M=q([b.Ih],M);var O=o(55843),I=o(82368),H=function(e,t,o,r){var n,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(i=(s<3?n(i):s>3?n(t,o,i):n(t,o))||i);return s>3&&i&&Object.defineProperty(t,o,i),i};let F=class CodespaceZeroConfigElement extends HTMLElement{connectedCallback(){this.toggleLocationConfigs("production")}updateVscsTargets(){for(let e of(this.vscsTargetUrl.disabled="local"!==this.vscsTarget.value,this.toggleLocationConfigs(this.vscsTarget.value),this.vscsTargets))e.value=this.vscsTarget.value}updateVscsTargetUrls(){for(let e of this.vscsTargetUrls)e.value=this.vscsTargetUrl.value}updateLocations(e){let t=e.currentTarget;this.setLocationValues(t.value)}setLocationValues(e){for(let t of this.locations)t.value=e}toggleLocationConfigs(e){for(let t of this.locationConfigs)if(t.getAttribute("data-vscs-target")===e){t.hidden=!1;let e=t.querySelector("option");e&&(e.selected=!0,this.setLocationValues(e.value))}else t.hidden=!0}};H([b.fA],F.prototype,"regionConfig",void 0),H([b.fA],F.prototype,"vscsTarget",void 0),H([b.fA],F.prototype,"vscsTargetUrl",void 0),H([b.GO],F.prototype,"locationConfigs",void 0),H([b.GO],F.prototype,"vscsTargets",void 0),H([b.GO],F.prototype,"vscsTargetUrls",void 0),H([b.GO],F.prototype,"locations",void 0),F=H([b.Ih],F)},14992:(e,t,o)=>{o.d(t,{HI:()=>s,Jx:()=>i,cv:()=>a});var r=o(69567),n=o(59753);async function s(e,t){let r=new TextEncoder,n=r.encode(t),{seal:s}=await Promise.all([o.e("vendors-node_modules_blakejs_index_js-node_modules_tweetnacl_nacl-fast_js"),o.e("_empty-file_js-app_assets_modules_github_tweetsodium_ts")]).then(o.bind(o,20179));return s(n,e)}function i(e){let t=atob(e).split("").map(e=>e.charCodeAt(0));return Uint8Array.from(t)}function a(e){let t="";for(let o of e)t+=String.fromCharCode(o);return btoa(t)}function l(e){return async function(t){let o=t.currentTarget;if(t.defaultPrevented||!o.checkValidity())return;let n=i(o.getAttribute("data-public-key"));for(let i of(t.preventDefault(),o.elements)){let t=i;if(t.id.endsWith("secret")){if(t.disabled=!0,t.required&&!t.value){let e=`${t.name} is invalid!`,o=document.querySelector("template.js-flash-template");o.after(new r.R(o,{className:"flash-error",message:e}));return}let i=`${t.name}_encrypted_value`;if(!t.value){o.elements.namedItem(i).disabled=e;continue}o.elements.namedItem(i).value=a(await s(n,t.value))}}o.submit()}}(0,n.on)("submit","form.js-encrypt-submit",async function(e){let t=e.currentTarget;if(e.defaultPrevented||!t.checkValidity())return;let o=t.elements.namedItem("secret_value");if(o.disabled=!0,!o.value)return;e.preventDefault();let r=i(t.getAttribute("data-public-key"));t.elements.namedItem("encrypted_value").value=a(await s(r,o.value)),t.submit()}),(0,n.on)("submit","form.js-encrypt-bulk-submit",l(!0)),(0,n.on)("submit","form.js-encrypt-bulk-submit-enable-empty",l(!1))},19146:(e,t,o)=>{o.d(t,{W:()=>n});var r=o(59753);async function n(e){let t=document.querySelector("#site-details-dialog"),o=t.content.cloneNode(!0),n=o.querySelector("details"),s=n.querySelector("details-dialog"),i=n.querySelector(".js-details-dialog-spinner");e.detailsClass&&n.classList.add(...e.detailsClass.split(" ")),e.dialogClass&&s.classList.add(...e.dialogClass.split(" ")),e.label?s.setAttribute("aria-label",e.label):e.labelledBy&&s.setAttribute("aria-labelledby",e.labelledBy),document.body.append(o);try{let t=await e.content;i.remove(),s.prepend(t)}catch(o){i.remove();let t=document.createElement("span");t.textContent=e.errorMessage||"Couldn't load the content",t.classList.add("my-6"),t.classList.add("mx-4"),s.prepend(t)}return n.addEventListener("toggle",()=>{n.hasAttribute("open")||((0,r.f)(s,"dialog:remove"),n.remove())}),s}},34892:(e,t,o)=>{o.d(t,{DF:()=>p,Fr:()=>h,a_:()=>u});var r=o(67525);function n(e){let t=[...e.querySelectorAll("meta[name=html-safe-nonce]")].map(e=>e.content);if(t.length<1)throw Error("could not find html-safe-nonce on document");return t}let s=class ResponseError extends Error{constructor(e,t){super(`${e} for HTTP ${t.status}`),this.response=t}};function i(e,t,o=!1){let r=t.headers.get("content-type")||"";if(!o&&!r.startsWith("text/html"))throw new s(`expected response with text/html, but was ${r}`,t);if(o&&!(r.startsWith("text/html")||r.startsWith("application/json")))throw new s(`expected response with text/html or application/json, but was ${r}`,t);let n=t.headers.get("x-html-safe");if(n){if(!e.includes(n))throw new s("response X-HTML-Safe nonce did not match",t)}else throw new s("missing X-HTML-Safe nonce",t)}var a=o(22490),l=o(7180);let c="server-x-safe-html",d=a.Z.createPolicy(c,{createHTML:(e,t)=>l.O.apply({policy:()=>(i(n(document),t),e),policyName:c,fallback:e})});async function u(e,t,o){let n=new Request(t,o);n.headers.append("X-Requested-With","XMLHttpRequest");let s=await self.fetch(n);if(s.status<200||s.status>=300)throw Error(`HTTP ${s.status}${s.statusText||""}`);let i=d.createHTML(await s.text(),s);return(0,r.r)(e,i)}function p(e,t,o=1e3,r=[200]){return async function o(n){let s=new Request(e,t);s.headers.append("X-Requested-With","XMLHttpRequest");let i=await self.fetch(s);if(202===i.status)return await new Promise(e=>setTimeout(e,n)),o(1.5*n);if(r.includes(i.status))return i;if(i.status<200||i.status>=300)throw Error(`HTTP ${i.status}${i.statusText||""}`);throw Error(`Unexpected ${i.status} response status from poll endpoint`)}(o)}async function h(e,t,o){let{wait:r=500,acceptedStatusCodes:n=[200],max:s=3,attempt:i=0}=o||{},a=async()=>new Promise((o,a)=>{setTimeout(async()=>{try{let r=new Request(e,t);r.headers.append("X-Requested-With","XMLHttpRequest");let a=await self.fetch(r);if(n.includes(a.status)||i+1===s)return o(a);o("retry")}catch(e){a(e)}},r*i)}),l=await a();return"retry"!==l?l:h(e,t,{wait:r,acceptedStatusCodes:n,max:s,attempt:i+1})}},55843:(e,t,o)=>{var r=o(76006),n=function(e,t,o,r){var n,s=arguments.length,i=s<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(i=(s<3?n(i):s>3?n(t,o,i):n(t,o))||i);return s>3&&i&&Object.defineProperty(t,o,i),i};let s=class InputDemuxElement extends HTMLElement{connectedCallback(){this.control&&(this.storedInput=Array(this.control.children.length).fill("")),this.addEventListener("input",this.relayInput.bind(this)),this.addEventListener("keydown",this.relayKeydown.bind(this));let e=this.closest("details");e&&e.addEventListener("toggle",()=>{e.open&&this.source.focus()})}relayKeydown(e){if((this.isControlTab(e.target)||e.target===this.source)&&("ArrowDown"===e.key||"Tab"===e.key))e.preventDefault(),e.stopPropagation(),this.routeCustomEvent(new CustomEvent("focus-list"));else if("Escape"===e.key){let e=this.closest("details");e&&e.removeAttribute("open")}}isControlTab(e){return!!e&&!!this.control&&Array.from(this.control.children).includes(e)}relayInput(e){if(!e.target)return;let t=e.target,o=t.value;this.routeCustomEvent(new CustomEvent("input-entered",{detail:o}))}routeCustomEvent(e){let t=this.sinks[this.selectedIndex];t.dispatchEvent(e)}get selectedIndex(){if(!this.control)return 0;let e=this.control.querySelector('[aria-selected="true"]');return e?Array.from(this.control.children).indexOf(e):0}storeInput(){this.storedInput[this.selectedIndex]=this.source.value}updateInput(e){this.source.value=this.storedInput[this.selectedIndex];let t=e.detail.relatedTarget.getAttribute("data-filter-placeholder");this.source.placeholder=t,this.source.setAttribute("aria-label",t),this.notifySelected()}notifySelected(){let e=this.sinks[this.selectedIndex],t=new CustomEvent("tab-selected");e.dispatchEvent(t)}};n([r.fA],s.prototype,"source",void 0),n([r.GO],s.prototype,"sinks",void 0),n([r.fA],s.prototype,"control",void 0),s=n([r.Ih],s)},67525:(e,t,o)=>{o.d(t,{r:()=>s});var r=o(22490);let n=r.Z.createPolicy("parse-html-no-op",{createHTML:e=>e});function s(e,t){let o=e.createElement("template");return o.innerHTML=n.createHTML(t),e.importNode(o.content,!0)}},89359:(e,t,o)=>{function r(e){let t=document.querySelectorAll(e);if(t.length>0)return t[t.length-1]}function n(){let e=r("meta[name=analytics-location]");return e?e.content:window.location.pathname}function s(){let e=r("meta[name=analytics-location-query-strip]"),t="";e||(t=window.location.search);let o=r("meta[name=analytics-location-params]");for(let e of(o&&(t+=(t?"&":"?")+o.content),document.querySelectorAll("meta[name=analytics-param-rename]"))){let o=e.content.split(":",2);t=t.replace(RegExp(`(^|[?&])${o[0]}($|=)`,"g"),`$1${o[1]}$2`)}return t}function i(){return`${window.location.protocol}//${window.location.host}${n()+s()}`}o.d(t,{S:()=>i})},24601:(e,t,o)=>{o.d(t,{aJ:()=>E,cI:()=>v,eK:()=>m});var r=o(82918),n=o(83314),s=o(28382),i=o(89359),a=o(68202),l=o(53729),c=o(86283);let d=!1,u=0,p=Date.now(),h=new Set(["Failed to fetch","NetworkError when attempting to fetch resource."]);function f(e){return!!("AbortError"===e.name||"TypeError"===e.name&&h.has(e.message)||e.name.startsWith("ApiError")&&h.has(e.message))}function m(e,t={}){f(e)||y(b(g(e),t))}async function y(e){if(!_())return;let t=document.head?.querySelector('meta[name="browser-errors-url"]')?.content;if(t){if(T(e.error.stacktrace)){d=!0;return}u++;try{await fetch(t,{method:"post",body:JSON.stringify(e)})}catch{}}}function g(e){return{type:e.name,value:e.message,stacktrace:v(e)}}function b(e,t={}){return Object.assign({error:e,sanitizedUrl:(0,i.S)()||window.location.href,readyState:document.readyState,referrer:(0,a.wP)(),timeSinceLoad:Math.round(Date.now()-p),user:E()||void 0,bundler:l.A7,ui:Boolean(document.querySelector('meta[name="ui"]'))},t)}function v(e){return(0,s.Q)(e.stack||"").map(e=>({filename:e.file||"",function:String(e.methodName),lineno:(e.lineNumber||0).toString(),colno:(e.column||0).toString()}))}let w=/(chrome|moz|safari)-extension:\/\//;function T(e){return e.some(e=>w.test(e.filename)||w.test(e.function))}function E(){let e=document.head?.querySelector('meta[name="user-login"]')?.content;if(e)return e;let t=(0,r.b)();return`anonymous-${t}`}let A=!1;function _(){return!A&&!d&&u<10&&(0,n.Gb)()}if(c.iG?.addEventListener("pageshow",()=>A=!1),c.iG?.addEventListener("pagehide",()=>A=!0),"function"==typeof BroadcastChannel){let e=new BroadcastChannel("shared-worker-error");e.addEventListener("message",e=>{m(e.data.error)})}},58700:(e,t,o)=>{o.d(t,{Bt:()=>s,DN:()=>l,KL:()=>u,Se:()=>a,qC:()=>p,sw:()=>c});var r=o(5582);function n(e,t,o){return e.dispatchEvent(new CustomEvent(t,{bubbles:!0,cancelable:o}))}function s(e,t){t&&(i(e,t),(0,r.j)(t)),n(e,"submit",!0)&&e.submit()}function i(e,t){if(!(e instanceof HTMLFormElement))throw TypeError("The specified element is not of type HTMLFormElement.");if(!(t instanceof HTMLElement))throw TypeError("The specified element is not of type HTMLElement.");if("submit"!==t.type)throw TypeError("The specified element is not a submit button.");if(!e||e!==t.form)throw Error("The specified element is not owned by the form element.")}function a(e,t){if("boolean"==typeof t){if(e instanceof HTMLInputElement)e.checked=t;else throw TypeError("only checkboxes can be set to boolean value")}else{if("checkbox"===e.type)throw TypeError("checkbox can't be set to string value");e.value=t}n(e,"change",!1)}function l(e,t){for(let o in t){let r=t[o],n=e.elements.namedItem(o);n instanceof HTMLInputElement?n.value=r:n instanceof HTMLTextAreaElement&&(n.value=r)}}function c(e){if(!(e instanceof HTMLElement))return!1;let t=e.nodeName.toLowerCase(),o=(e.getAttribute("type")||"").toLowerCase();return"select"===t||"textarea"===t||"input"===t&&"submit"!==o&&"reset"!==o||e.isContentEditable}function d(e){return new URLSearchParams(e)}function u(e,t){let o=new URLSearchParams(e.search),r=d(t);for(let[e,t]of r)o.append(e,t);return o.toString()}function p(e){return d(new FormData(e)).toString()}},5582:(e,t,o)=>{function r(e){let t=e.closest("form");if(!(t instanceof HTMLFormElement))return;let o=n(t);if(e.name){let r=e.matches("input[type=submit]")?"Submit":"",n=e.value||r;o||((o=document.createElement("input")).type="hidden",o.classList.add("js-submit-button-value"),t.prepend(o)),o.name=e.name,o.value=n}else o&&o.remove()}function n(e){let t=e.querySelector("input.js-submit-button-value");return t instanceof HTMLInputElement?t:null}o.d(t,{j:()=>r,u:()=>n})},86283:(e,t,o)=>{o.d(t,{Qg:()=>r.Qg,W6:()=>r.W6,cF:()=>r.cF,iG:()=>n.iG,jX:()=>n.jX,n4:()=>n.n4,zu:()=>n.zu});var r=o(35647),n=o(73614)},73614:(e,t,o)=>{o.d(t,{iG:()=>n,jX:()=>i,n4:()=>r,zu:()=>s});let r="undefined"==typeof document?void 0:document,n="undefined"==typeof window?void 0:window,s="undefined"==typeof history?void 0:history,i="undefined"==typeof location?{pathname:"",origin:"",search:"",hash:""}:location},35647:(e,t,o)=>{o.d(t,{Qg:()=>s,W6:()=>n,cF:()=>i});var r=o(73614);let n=void 0===r.n4,s=!n;function i(){return!!n||Boolean(r.n4.querySelector('react-app[data-ssr="true"]'))}},7180:(e,t,o)=>{o.d(t,{O:()=>a,d:()=>TrustedTypesPolicyError});var r=o(46426),n=o(71643),s=o(24601);let TrustedTypesPolicyError=class TrustedTypesPolicyError extends Error{};function i({policy:e,policyName:t,fallback:o,fallbackOnError:i=!1}){try{if((0,r.c)("BYPASS_TRUSTED_TYPES_POLICY_RULES"))return o;return e()}catch(e){if(e instanceof TrustedTypesPolicyError||((0,s.eK)(e),(0,n.b)({incrementKey:"TRUSTED_TYPES_POLICY_ERROR",trustedTypesPolicyName:t}),!i))throw e}return o}let a={apply:i}},22490:(e,t,o)=>{o.d(t,{Z:()=>a});var r=o(86283);function n(e){return()=>{throw TypeError(`The policy does not implement the function ${e}`)}}let s={createHTML:n("createHTML"),createScript:n("createScript"),createScriptURL:n("createScriptURL")},i={createPolicy:(e,t)=>({name:e,...s,...t})},a=globalThis.trustedTypes??i,l=!1;r.n4?.addEventListener("securitypolicyviolation",e=>{"require-trusted-types-for"!==e.violatedDirective||l||(console.warn(`Hi fellow Hubber!
    You're probably seeing a Report Only Trusted Types error near this message. This is intended behaviour, staff-only,
    does not impact application control flow, and is used solely for statistic collection. Unfortunately we
    can't gather these statistics without adding the above warnings to your console. Sorry about that!
    Feel free to drop by #pse-architecture if you have any additional questions about Trusted Types or CSP.`),l=!0)})}},e=>{var t=t=>e(e.s=t);e.O(0,["vendors-node_modules_github_selector-observer_dist_index_esm_js","vendors-node_modules_stacktrace-parser_dist_stack-trace-parser_esm_js-node_modules_github_bro-a4c183","vendors-node_modules_virtualized-list_es_index_js-node_modules_github_template-parts_lib_index_js","vendors-node_modules_github_remote-form_dist_index_js-node_modules_delegated-events_dist_inde-911b971","ui_packages_soft-nav_soft-nav_ts","app_assets_modules_github_ref-selector_ts"],()=>t(11645));var o=e.O()}]);
//# sourceMappingURL=codespaces-4156eefc50ac.js.map