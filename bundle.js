(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // notesModel.js
  var require_notesModel = __commonJS({
    "notesModel.js"(exports, module) {
      var NotesModel2 = class {
        constructor() {
          this.notes = [];
        }
        getNotes() {
          return this.notes;
        }
        addNote(note) {
          this.notes.push(note);
        }
        reset() {
          this.notes = [];
        }
      };
      module.exports = NotesModel2;
    }
  });

  // notesView.js
  var require_notesView = __commonJS({
    "notesView.js"(exports, module) {
      var NotesView2 = class {
        constructor(model2) {
          this.model = model2;
          this.mainContainerEl = document.querySelector("#main-container");
          this.addButtonEl = document.querySelector("#add-note-button");
          this.addButtonEl.addEventListener("click", () => {
            const newNote = document.querySelector("#notes-message").value;
            this.addNote(newNote);
          });
        }
        displayNotes() {
          const notes = this.model.getNotes();
          document.querySelectorAll(".note").forEach((note) => note.remove());
          notes.forEach((note) => {
            console.log(note);
            const noteEl = document.createElement("div");
            noteEl.innerText = note;
            noteEl.className = "note";
            this.mainContainerEl.append(noteEl);
          });
        }
        addNote(newNote) {
          document.querySelector("#notes-message").value = "";
          console.log("You clicked add Note");
          this.model.addNote(newNote);
          this.displayNotes();
        }
      };
      module.exports = NotesView2;
    }
  });

  // index.js
  var NotesModel = require_notesModel();
  var model = new NotesModel();
  console.log(model.getNotes());
  console.log("The notes app is running");
  var NotesView = require_notesView();
  var view = new NotesView(model);
  model.addNote("This is an example note");
  view.displayNotes();
})();
