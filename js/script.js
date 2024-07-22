// import notesData from './notes.js';
import '../src/script/components/index.js'
const notesData = [
  {
    id: 'notes-jT-jjsyz61J8XKiI',
    title: 'Welcome to Notes, Dimas!',
    body: 'Welcome to Notes! This is your first note. You can archive it, delete it, or create new ones.',
    createdAt: '2022-07-28T10:03:12.594Z',
    archived: false,
  },
  {
    id: 'notes-aB-cdefg12345',
    title: 'Meeting Agenda',
    body: 'Discuss project updates and assign tasks for the upcoming week.',
    createdAt: '2022-08-05T15:30:00.000Z',
    archived: false,
  },
  {
    id: 'notes-XyZ-789012345',
    title: 'Shopping List',
    body: 'Milk, eggs, bread, fruits, and vegetables.',
    createdAt: '2022-08-10T08:45:23.120Z',
    archived: false,
  },
  {
    id: 'notes-1a-2b3c4d5e6f',
    title: 'Personal Goals',
    body: 'Read two books per month, exercise three times a week, learn a new language.',
    createdAt: '2022-08-15T18:12:55.789Z',
    archived: false,
  },
  {
    id: 'notes-LMN-456789',
    title: 'Recipe: Spaghetti Bolognese',
    body: 'Ingredients: ground beef, tomatoes, onions, garlic, pasta. Steps:...',
    createdAt: '2022-08-20T12:30:40.200Z',
    archived: false,
  },
  {
    id: 'notes-QwErTyUiOp',
    title: 'Workout Routine',
    body: 'Monday: Cardio, Tuesday: Upper body, Wednesday: Rest, Thursday: Lower body, Friday: Cardio.',
    createdAt: '2022-08-25T09:15:17.890Z',
    archived: false,
  },
  {
    id: 'notes-abcdef-987654',
    title: 'Book Recommendations',
    body: "1. 'The Alchemist' by Paulo Coelho\n2. '1984' by George Orwell\n3. 'To Kill a Mockingbird' by Harper Lee",
    createdAt: '2022-09-01T14:20:05.321Z',
    archived: false,
  },
  {
    id: 'notes-zyxwv-54321',
    title: 'Daily Reflections',
    body: 'Write down three positive things that happened today and one thing to improve tomorrow.',
    createdAt: '2022-09-07T20:40:30.150Z',
    archived: false,
  },
  {
    id: 'notes-poiuyt-987654',
    title: 'Travel Bucket List',
    body: '1. Paris, France\n2. Kyoto, Japan\n3. Santorini, Greece\n4. New York City, USA',
    createdAt: '2022-09-15T11:55:44.678Z',
    archived: false,
  },
  {
    id: 'notes-asdfgh-123456',
    title: 'Coding Projects',
    body: '1. Build a personal website\n2. Create a mobile app\n3. Contribute to an open-source project',
    createdAt: '2022-09-20T17:10:12.987Z',
    archived: false,
  },
  {
    id: 'notes-5678-abcd-efgh',
    title: 'Project Deadline',
    body: 'Complete project tasks by the deadline on October 1st.',
    createdAt: '2022-09-28T14:00:00.000Z',
    archived: false,
  },
  {
    id: 'notes-9876-wxyz-1234',
    title: 'Health Checkup',
    body: 'Schedule a routine health checkup with the doctor.',
    createdAt: '2022-10-05T09:30:45.600Z',
    archived: false,
  },
  {
    id: 'notes-qwerty-8765-4321',
    title: 'Financial Goals',
    body: '1. Create a monthly budget\n2. Save 20% of income\n3. Invest in a retirement fund.',
    createdAt: '2022-10-12T12:15:30.890Z',
    archived: false,
  },
  {
    id: 'notes-98765-54321-12345',
    title: 'Holiday Plans',
    body: 'Research and plan for the upcoming holiday destination.',
    createdAt: '2022-10-20T16:45:00.000Z',
    archived: false,
  },
  {
    id: 'notes-1234-abcd-5678',
    title: 'Language Learning',
    body: 'Practice Spanish vocabulary for 30 minutes every day.',
    createdAt: '2022-10-28T08:00:20.120Z',
    archived: false,
  },
]
const RENDER_EVENT = 'render-notes';

function addNote() {
  // const id = `notes-${Math.random().toString(36).substr(2, 9)}`
  const id = generateId();
  const noteTitle = document.getElementById('title-note').value;
  const noteBody = document.getElementById('body-note').value;
  const createdAt = new Date().toISOString();
  const archived = false;

  const noteObject = generateNoteObject(id, noteTitle, noteBody, createdAt, archived);
  notesData.push(noteObject);

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
// document.dispatchEvent(new Event (RENDER_EVENT));
}

// document.addEventListener('DOMContentLoaded', function() {
//   const input = document.querySelector('input');
//   const errorMessage = document.getElementById('title_notes_verif');
//   const requireTitle = document.getElementById('title_required');
//   input.addEventListener('input', function() {
//     if (input.textLength <= 3) {
//       errorMessage.setAttribute('class', 'visible')
//       requireTitle.setAttribute('class', 'none');
//     } else if (input.textLength == 0) {
//       errorMessage.setAttribute('class', 'none')
//       requireTitle.setAttribute('class', 'visible');
//     } else if (input.textLength >= 3) {
//       errorMessage.setAttribute('class', 'none')
//       requireTitle.setAttribute('class', 'none');
//     }
//   }) 
// })

document.addEventListener('DOMContentLoaded', function () {
    const noteForm = document.getElementById('form')
    noteForm.addEventListener('submit', function (event) {
        event.preventDefault();
        addNote()
    })
});

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

document.addEventListener(RENDER_EVENT, function () {
  console.log(notesData);
  const allNOTEList = document.getElementById('note-list-container')
  allNOTEList.innerHTML = '';
  for (const noteItem of notesData) {
    const noteElement = makeNote(noteItem);
    allNOTEList.append(noteElement)
  }

  
});

