import '../components/index.js'
import NotesData from'../data/local/notes.js'
const notes = NotesData.getAll();



const home = () => {

function addNote() {

  const id = generateId();
  const noteTitle = document.getElementById('title-note').value;
  const noteBody = document.getElementById('body-note').value;
  const createdAt = new Date().toISOString();
  const archived = false;

  const noteObject = generateNoteObject(id, noteTitle, noteBody, createdAt, archived);
  notes.push(noteObject);

  document.dispatchEvent(new Event(RENDER_EVENT));
};

function generateId() {
  // notes-${Math.random().toString(36).substr(2, 9)};
  return `notes-${Math.random().toString(36).substr(2, 9)}`
}

function generateNoteObject (id, title, body, createdAt, archived) {
  return {
      id,
      title,
      body,
      createdAt,
      archived
  }
}

function makeNote(noteObject) {
const noteTitle = document.createElement('h1');
noteTitle.innerText = noteObject.title;

const createdAt = document.createElement('h3');
const tanggal = new Date(noteObject.createdAt);
const tanggalString = tanggal.toLocaleString();
createdAt.innerText = `Dibuat pada tanggal ${tanggalString}`;

const noteBody = document.createElement('h2');
noteBody.innerText = noteObject.body;

const archived = document.createElement('p');
archived.innerText = noteObject.archived;
archived.classList.add('hidden')

const noteContainer = document.createElement('div');
noteContainer.classList.add('container-note');
noteContainer.append(noteTitle, createdAt, noteBody, archived);

const listNoteContainer = document.createElement('div');
listNoteContainer.classList.add('container-list-note')
listNoteContainer.append(noteContainer);
listNoteContainer.setAttribute('id', `note-${noteObject.id}`)
return listNoteContainer;

}

  const noteForm = document.getElementById('form')
  noteForm.addEventListener('submit', function (event) {
      submit.preventDefault();
      addNote()
  })


// document.addEventListener('DOMContentLoaded', function () {
//   const formButton = document.getElementById('add-note-button')
//   formButton.addEventListener('click', function () {
//     const formVisible = document.getElementById('form-spin')
//     formVisible.setAttribute('class','visible')
// })

// });


  const form = document.querySelector('form');
  const input = document.querySelector('input');

  form.addEventListener('submit', (event) => event.preventDefault());

  const inputValidationHandler = (event) => {
    event.target.setCustomValidity('');
    if (event.target.validity.valueMissing) {
      event.target.setCustomValidity('Wajib diisi, jangan dikosongin yak!');
      return;
    }
    
    if (event.target.validity.tooShort) {
      event.target.setCustomValidity('Diisi minimal 3 karakter yak!');
      return;
    }

  }

  input.addEventListener('change', inputValidationHandler);
  input.addEventListener('invalid',inputValidationHandler);
  input.addEventListener('blur', (event) => {
    const isValid = event.target.validity.valid;
    const errorMessage = event.target.validationMessage
    const connectedValidationEl = inputValidation
    ? document.getElementById('inputValidation')
    : null;

    if (connectedValidationEl && errorMessage && !isValid) {
      connectedValidationEl.innerText = errorMessage;
      console.log(errorMessage)
    } else {
      connectedValidationEl.innerText = '';
    }

    
  })

  console.log(notes);
  const allNOTEList = document.getElementById('note-list-container')
  allNOTEList.innerHTML = '';
  for (const noteItem of notes) {
    const noteElement = makeNote(noteItem);
    allNOTEList.append(noteElement)
  }

  



}

export default home