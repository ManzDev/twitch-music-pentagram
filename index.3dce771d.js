const g=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const t of n)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function r(n){const t={};return n.integrity&&(t.integrity=n.integrity),n.referrerpolicy&&(t.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?t.credentials="include":n.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(n){if(n.ep)return;n.ep=!0;const t=r(n);fetch(n.href,t)}};g();var f='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 297 297" style="enable-background:new 0 0 297 297" xml:space="preserve"><path style="fill:#f9b65f" d="M155.629 218.245c8.355-10.711 32.4-18.058 41.303-26.961 18.891-18.891 7.414-48.252-17.775-73.441s-54.549-36.666-73.441-17.775c-8.903 8.903-16.25 32.947-26.961 41.303-21.989 17.153-47.71 9.413-64.676 26.379-26.238 26.238-13.869 59.072 21.115 94.056s67.818 47.353 94.056 21.115c16.965-16.966 9.226-42.687 26.379-64.676z"/><path style="opacity:.3;fill:#f9b65f" d="M191.814 132.417c8.863 17.144 9.451 33.893-2.855 46.199-8.903 8.903-32.947 16.25-41.303 26.961-17.153 21.989-9.413 47.71-26.379 64.676-26.238 26.238-59.072 13.869-94.056-21.115-7.596-7.596-14.122-15.09-19.422-22.438 6.032 11.328 15.379 23.09 27.394 35.105 34.984 34.984 67.818 47.353 94.056 21.115 16.966-16.966 9.227-42.688 26.379-64.676 8.355-10.711 32.4-18.058 41.303-26.961 15.335-15.334 10.659-37.566-5.117-58.866z"/><path transform="rotate(45.001 198.354 98.646)" style="fill:#935733" d="M182.516 7.935h31.671v181.426h-31.671z"/><path transform="rotate(-45.001 205.678 105.978)" style="opacity:.3;fill:#935733" d="M114.966 100.501h181.426v10.948H114.966z"/><circle style="fill:#794c2b" cx="123.651" cy="173.349" r="24.884"/><circle style="opacity:.31;fill:#794c2b" cx="123.651" cy="173.349" r="20.399"/><circle style="fill:#ae9676" cx="123.651" cy="173.349" r="9.727"/><path style="fill:#794c2b" d="m55.39 213.86 27.75 27.75a6.167 6.167 0 0 0 8.721 0l3.116-3.116a6.167 6.167 0 0 0 0-8.721l-27.75-27.75a6.167 6.167 0 0 0-8.721 0l-3.116 3.116a6.167 6.167 0 0 0 0 8.721zM243.319 66.29l-12.608-12.608a10.243 10.243 0 0 1-.811-13.572l28.438-36.194c3.794-4.829 10.956-5.257 15.298-.915L294 23.365c4.343 4.343 3.914 11.504-.915 15.298l-36.194 28.438a10.244 10.244 0 0 1-13.572-.811z"/><path style="opacity:.31;fill:#794c2b" d="m294 23.365-1.792-1.792a10.196 10.196 0 0 1-2.622 3.091l-36.194 28.438a10.244 10.244 0 0 1-13.572-.811l-10.816-10.816a10.239 10.239 0 0 0 1.708 12.208l12.608 12.608a10.243 10.243 0 0 0 13.572.811l36.194-28.438c4.828-3.795 5.256-10.957.914-15.299z"/></svg>',y='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve"><path style="fill:#4d4d4d" d="M467.404 303.544v1.239H44.596v-1.239H0v198.49h44.596v-43.568h422.808v43.568H512v-198.49z"/><path style="fill:#666" d="M319.172 60.137H512v152.989H.012V60.137h192.816z"/><path style="fill:#f2f2f2" d="M512 268.717v2.458H.012v-36.864H512zM319.172 60.137v104.057H192.828V9.966h126.344z"/><path style="fill:#4d4d4d" d="M223.798 43.176h64.417v12.388h-64.417zM223.798 80.607h64.417v12.388h-64.417zM512 199.499H.012v39.009H35.19v38.405h12.388v-38.405h26.634v38.405h12.387v-38.405h26.634v38.405h12.388v-38.405h26.634v38.405h12.387v-38.405h26.634v38.405h12.388v-38.405h26.634v38.405h12.388v-38.405h26.633v38.405h12.388v-38.405h26.634v38.405h12.388v-38.405h26.634v38.405h12.387v-38.405h26.634v38.405h12.388v-38.405h26.634v38.405h12.387v-38.405h26.634v38.405h12.388v-38.405H512zM223.798 118.056h64.417v12.388h-64.417z"/><path style="fill:#666" d="M512 266.381v44.596H.012v-44.596h470.613z"/><path style="opacity:.47;fill:#333;enable-background:new" d="M44.596 310.971h422.808v33.447H44.596z"/></svg>',b=`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 404 404" xml:space="preserve">
  <polygon style="fill:#9CDD05" points="27.155,202.15 27.155,404.3 377.145,202.15"/>
  <polygon style="fill:#B2FA09" points="27.155,0 27.155,202.15 377.145,202.15"/>
</svg>
`;const h=["B","A#","A","G#","G","F#","F","E","D#","D","C#","C"],u=["piano","acousticguitar"],m=3,x=h.map(i=>i+m),l={piano:{},acousticguitar:{}};x.forEach(i=>{const e=i.replace("#","s");u.forEach(r=>{l[r][i]=new Audio(`./samples/${r}/${e}.mp3`)})});class c extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        display: block;
        border: 1px solid #ccc7;
        background: var(--highlight-color, transparent);
      }

      :host(:hover) {
        border: 1px solid #aaa;
      }

      :host([instrument]) {
        background-color: var(--color);
        border: 1px solid (--color);
        background-size: cover;
        background-repeat: no-repeat;
        filter: drop-shadow(2px 2px 1px #0005);
      }

      :host([instrument="piano"]) {
        background-image: url("assets/avocado.svg");
        border: 1px solid transparent;
      }
      :host([instrument="acousticguitar"]) {
        background-image: url("assets/spherical-cow.svg");
        border: 1px solid transparent;
      }
    `}get instrument(){return this.getAttribute("instrument")||"piano"}connectedCallback(){this.note=this.getAttribute("note")||"C5",this.render(),this.addEventListener("click",()=>this.select()),this.addEventListener("contextmenu",e=>this.unselect(e))}select(){const e=new CustomEvent("ASSIGN_INSTRUMENT",{detail:{note:this},composed:!0});this.dispatchEvent(e),this.play()}unselect(e){e.preventDefault(),this.removeAttribute("instrument")}play(){l[this.instrument][this.note].currentTime=0,l[this.instrument][this.note].play()}render(){this.shadowRoot.innerHTML=`
    <style>${c.styles}</style>
    `}}customElements.define("pentagram-note",c);const w=12,E=25,d=500;class p extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}),this.currentInstrument=0}static get styles(){return`
      :host {
      }

      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 1250px;
        margin: auto;
      }

      .pentagram {
        display: inline-grid;
        grid-template-columns: repeat(25, 50px);
        grid-template-rows: repeat(12, 50px);
        border: 1px solid black;
        background: #fff;
        background-image: linear-gradient(to right, red 5px, transparent 5px);
      }

      .pentagram.playing {
        animation: pentagram-playing 12.5s linear forwards;
      }

      @keyframes pentagram-playing {
        0% { background-position: 0 0; }
        100% { background-position: 1250px 0; }
      }

      .toolbar {
        display: flex;
        align-items: center;
        width: 100%;
      }

      h3 {
        font-family: Montserrat;
        font-size: 1.7rem;
        margin: 0;
        color: #fff;
      }

      .instruments {
        margin: 20px;
        display: flex;
        gap: 20px;
      }

      .icon-button {
        width: 48px;
        height: 48px;
        padding: 10px;
        border: 2px solid transparent;
      }

      .icon-button[selected] {
        border-color: #fff;
      }

      .icon-button svg {
        transition: transform 0.25s;
      }

      .icon-button:hover svg {
        transform: translate(0, -6px);
        cursor: pointer;
      }

      .control {
        margin-left: auto;
      }
    `}connectedCallback(){this.render(),this.createPentagram(),this.prepareButtons(),this.addEventListener("ASSIGN_INSTRUMENT",e=>this.assignInstrument(e.detail.note))}assignInstrument(e){e.setAttribute("instrument",u[this.currentInstrument])}prepareButtons(){const e=Array.from(this.shadowRoot.querySelectorAll(".instruments .icon-button"));e.forEach((s,n)=>{s.addEventListener("click",t=>{e.forEach(o=>o.removeAttribute("selected")),s.setAttribute("selected",""),this.currentInstrument=n})}),this.shadowRoot.querySelector(".play").addEventListener("click",()=>this.playSong())}createPentagram(){const e=this.shadowRoot.querySelector(".pentagram");for(let r=0;r<w;r++)for(let s=0;s<E;s++){const n=document.createElement("pentagram-note");n.setAttribute("note",h[r]+m),n.setAttribute("time",s),e.appendChild(n)}}playSong(){const e=this.shadowRoot.querySelector(".pentagram"),s=Array.from(this.shadowRoot.querySelectorAll("pentagram-note")).filter(t=>t.hasAttribute("instrument")).map(t=>({note:t.note,instrument:t.instrument,time:t.getAttribute("time"),element:t})).sort((t,o)=>t.time-o.time),n=s[s.length-1].time;this.startTimerEndAnimation(n),e.classList.add("playing");for(let t=0;t<=n;t++){const o=s.filter(a=>a.time===t.toString()),v=t*d;setTimeout(()=>{o.forEach(a=>{a.element.play()})},v)}}startTimerEndAnimation(e){const r=this.shadowRoot.querySelector(".pentagram");setTimeout(()=>{r.classList.remove("playing")},e*d+10+d)}render(){this.shadowRoot.innerHTML=`
    <style>${p.styles}</style>
    <div class="container">

      <div class="pentagram"></div>

      <div class="toolbar">
        <div class="instruments">
          <h3>Instruments</h3>
          <div class="icon-button" selected>${y}</div>
          <div class="icon-button">${f}</div>
        </div>

        <div class="control">
          <div class="play icon-button">
            ${b}
          </div>
        </div>
      </div>

    </div>`}}customElements.define("pentagram-editor",p);
