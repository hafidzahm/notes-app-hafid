import "../components/index.js";
import dummies from "../data/local/notes.js";
import formValidation from "../components/form-validation.js";
let notesData = [];
const RENDER_EVENT = "RENDER_EVENT";

const home = () => {
  function addNote() {
    const id = generateId();
    const title = document.getElementById("title-note").value;
    const body = document.getElementById("body-note").value;
    const createdAt = generateDate();
    const isArchived = false;

    const noteObject = {
      id,
      title,
      body,
      createdAt,
      isArchived,
    };

    notesData.push(noteObject);

    document.dispatchEvent(new Event(RENDER_EVENT));
  }

  function generateId() {
    // notes-${Math.random().toString(36).substr(2, 9)};
    return `notes-${Math.random().toString(36).substr(2, 9)}`;
  }

  function generateDate() {
    const tanggal = new Date().toLocaleString();
    return `Dibuat pada tanggal ${tanggal}`;
  }

  function makeNote(noteItem) {
    const noteVariabel = document.createElement("note-item");

    noteVariabel.setAttribute("id", noteItem.id);
    noteVariabel.setAttribute("title", noteItem.title);
    noteVariabel.setAttribute("createdAt", noteItem.createdAt);
    noteVariabel.setAttribute("body", noteItem.body);
    noteVariabel.setAttribute("isArchived", noteItem.isArchived);
    noteVariabel.addEventListener("book-delete", (event) => {
      const noteId = event.detail.id;
      deleteNote(noteId);
    });
    return noteVariabel;
  }

  function saveToStorage() {
    localStorage.setItem("notes", JSON.stringify(notesData));
  }
  const noteForm = document.getElementById("form");
  noteForm.addEventListener("submit", function (event) {
    event.preventDefault();
    addNote();
    saveToStorage();
    noteForm.reset();
  });

  document.addEventListener(RENDER_EVENT, function () {
    const noteContainer = document.getElementById("note-list-container");
    noteContainer.innerHTML = "";

    for (const noteItem of notesData) {
      noteContainer.append(makeNote(noteItem));
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    formValidation();

    if (!localStorage.getItem("notes")) {
      localStorage.setItem("notes", JSON.stringify(dummies));
      notesData = JSON.parse(localStorage.getItem("notes"));
    } else {
      notesData = JSON.parse(localStorage.getItem("notes")) || [];
    }
    document.dispatchEvent(new Event(RENDER_EVENT));
  });
};

export default home;
