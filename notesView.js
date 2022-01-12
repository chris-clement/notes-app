class NotesView {
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');
    this.buttonEl = document.querySelector('#add-note-button');
    this.buttonEl.addEventListener('click', () => {
      this.addNote()
    })
  }
  displayNotes() {
    const notes = this.model.getNotes()
    
    notes.forEach(note => {
      const noteEl = document.createElement('div');
      noteEl.innerText = note;
      noteEl.className = 'note';
      this.mainContainerEl.append(noteEl);
    });
  };
  addNote() {
    console.log("You clicked add Note");
    const noteEl = document.querySelector('#notes-message').value;
    this.model.addNote(noteEl)
    this.displayNotes()
  };
};

module.exports = NotesView