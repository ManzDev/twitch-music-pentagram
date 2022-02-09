import acousticGuitarIcon from "../assets/acoustic-guitar.svg?raw";
import pianoIcon from "../assets/piano.svg?raw";
import playIcon from "../assets/play.svg?raw";
import { NOTES, INSTRUMENTS_NAMES, CURRENT_OCTAVE } from "../modules/Instruments.js";
import "./PentagramNote.js";

const NUM_NOTES = 12;
const NUM_TIMES = 25;
const TIME_PER_NOTE = 500;

class PentagramEditor extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.currentInstrument = 0;
  }

  static get styles() {
    return /* css */`
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
    `;
  }

  connectedCallback() {
    this.render();
    this.createPentagram();
    this.prepareButtons();
    this.addEventListener("ASSIGN_INSTRUMENT", (ev) => this.assignInstrument(ev.detail.note));
  }

  assignInstrument(note) {
    note.setAttribute("instrument", INSTRUMENTS_NAMES[this.currentInstrument]);
  }

  prepareButtons() {
    const iconButtons = Array.from(this.shadowRoot.querySelectorAll(".instruments .icon-button"));
    iconButtons.forEach((iconButton, index) => {
      iconButton.addEventListener("click", (ev) => {
        iconButtons.forEach((iconButton) => iconButton.removeAttribute("selected"));
        iconButton.setAttribute("selected", "");
        this.currentInstrument = index;
      });
    });

    const playButton = this.shadowRoot.querySelector(".play");
    playButton.addEventListener("click", () => this.playSong());
  }

  createPentagram() {
    const pentagram = this.shadowRoot.querySelector(".pentagram");

    for (let noteIndex = 0; noteIndex < NUM_NOTES; noteIndex++) {
      for (let figureIndex = 0; figureIndex < NUM_TIMES; figureIndex++) {
        const note = document.createElement("pentagram-note");
        note.setAttribute("note", NOTES[noteIndex] + CURRENT_OCTAVE);
        note.setAttribute("time", figureIndex);
        pentagram.appendChild(note);
      }
    }
  }

  playSong() {
    const pentagram = this.shadowRoot.querySelector(".pentagram");
    const allNotes = Array.from(this.shadowRoot.querySelectorAll("pentagram-note"));
    const notes = allNotes
      .filter(note => note.hasAttribute("instrument"))
      .map(note => ({
        note: note.note,
        instrument: note.instrument,
        time: note.getAttribute("time"),
        element: note
      }))
      .sort((a, b) => a.time - b.time);

    const lastTime = notes[notes.length - 1].time;
    this.startTimerEndAnimation(lastTime);

    pentagram.classList.add("playing");
    for (let i = 0; i <= lastTime; i++) {
      const filteredNotes = notes.filter(note => note.time === i.toString());
      const time = i * TIME_PER_NOTE;
      setTimeout(() => {
        filteredNotes.forEach(note => {
          note.element.play();
        });
      }, time);
    }
  }

  startTimerEndAnimation(lastTime) {
    const pentagram = this.shadowRoot.querySelector(".pentagram");
    setTimeout(() => {
      pentagram.classList.remove("playing");
    }, (lastTime * TIME_PER_NOTE + 10) + TIME_PER_NOTE);
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${PentagramEditor.styles}</style>
    <div class="container">

      <div class="pentagram"></div>

      <div class="toolbar">
        <div class="instruments">
          <h3>Instruments</h3>
          <div class="icon-button" selected>${pianoIcon}</div>
          <div class="icon-button">${acousticGuitarIcon}</div>
        </div>

        <div class="control">
          <div class="play icon-button">
            ${playIcon}
          </div>
        </div>
      </div>

    </div>`;
  }
}

customElements.define("pentagram-editor", PentagramEditor);
