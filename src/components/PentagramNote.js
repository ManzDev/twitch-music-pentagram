import {
  NOTES,
  INSTRUMENTS_NAMES,
  CURRENT_OCTAVE
} from "../modules/Instruments.js";

const OCTAVE_NOTES = NOTES.map(note => note + CURRENT_OCTAVE);
const INSTRUMENTS = {
  piano: {},
  acousticguitar: {}
};

OCTAVE_NOTES.forEach(note => {
  const filenote = note.replace("#", "s");
  INSTRUMENTS_NAMES.forEach(instrumentName => {
    INSTRUMENTS[instrumentName][note] = new Audio(`./samples/${instrumentName}/${filenote}.mp3`);
  });
});

class PentagramNote extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
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
    `;
  }

  get instrument() {
    return this.getAttribute("instrument") || "piano";
  }

  connectedCallback() {
    this.note = this.getAttribute("note") || "C5";
    this.render();
    this.addEventListener("click", () => this.select());
    this.addEventListener("contextmenu", (ev) => this.unselect(ev));
  }

  select() {
    const event = new CustomEvent("ASSIGN_INSTRUMENT", { detail: { note: this }, composed: true });
    this.dispatchEvent(event);
    this.play();
  }

  unselect(ev) {
    ev.preventDefault();
    this.removeAttribute("instrument");
  }

  play() {
    INSTRUMENTS[this.instrument][this.note].currentTime = 0;
    INSTRUMENTS[this.instrument][this.note].play();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${PentagramNote.styles}</style>
    `;
  }
}

customElements.define("pentagram-note", PentagramNote);
