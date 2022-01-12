class NotesView {
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');
    this.addButtonEl = document.querySelector('#add-note-button');
    this.addButtonEl.addEventListener('click', () => {
      const newNote = document.querySelector('#notes-message').value;
      this.addNote(newNote);
    });
  };
  displayNotes() {
    const notes = this.model.getNotes();
    document.querySelectorAll('.note').forEach(note => note.remove())
    notes.forEach(note => {
      console.log(note)
      const noteEl = document.createElement('div');
      noteEl.innerText = note;
      noteEl.className = 'note';
      this.mainContainerEl.append(noteEl);
    });
  };
  addNote(newNote) {
    console.log("You clicked add Note");
    this.model.addNote(newNote);
    this.displayNotes();
  };
};

module.exports = NotesView