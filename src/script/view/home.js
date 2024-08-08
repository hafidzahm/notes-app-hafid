import "../components/index.js";
import dummies from "../data/local/notes.js";
import formValidation from "../components/form-validation.js";
// import notes from "../data/local/notes.js";
// import "../data/api.js"
//
let notes = [];
const RENDER_EVENT = "RENDER_EVENT";
const baseUrl = "https://notes-api.dicoding.dev/v2";

const home = async () => {
  const addNoteApi = async (noteObject) => {
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          title: noteObject.title,
          body: noteObject.body,
        }),
      };
      const response = await fetch(`${baseUrl}/notes`, options);
      const responseJson = await response.json();
      showResponseMessage(responseJson.message);
      getAllNotes();
    } catch (error) {
      showResponseMessage(error);
    }
  };

  //   Gunakan Fungsi ini untuk mengambil data dari API
  const getAllNotes = () => {
    return fetch(`${baseUrl}/notes`)
      .then((response) => {
        if (response.status >= 200 && response.status <= 300) {
          return response.json();
        } else {
          return Promise.reject(new Error(`Something went wrong`));
        }
      })
      .then((responseJson) => {
        const { data: notes } = responseJson;
        return Promise.resolve(notes);
      });
  };

  const deleteNoteApi = (noteId) => {
    return fetch(`${baseUrl}/notes/${noteId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.status >= 200 && response.status <= 300) {

          return response.json();
        } else {
          return Promise.reject(new Error(`Something went wrong`));
        }
      })
      .then((responseJson) => {
        if (responseJson.length < 0) {
          return Promise.resolve(responseJson);
        } else {
          return Promise.reject(new Error(`Note is not found`));
        }
        
      });
  }



  async function addNote() {
    const id = generateId();
    const title = document.getElementById("title").value;
    const createdAt = generateDate();
    const body = document.getElementById("body").value;

    const isArchived = false;

    const noteObject = generateNoteObject(
      id,
      title,
      createdAt,
      body,
      isArchived,
    );
    try {
      await addNoteApi(noteObject);
      console.log(`noteId: "${noteObject.id}" with title "${noteObject.title}" added`)
      console.log(JSON.parse(JSON.stringify(noteObject)));
      console.log('-----addNoteEv:Note added-----')

      notes.push(noteObject);
      console.log(notes)

      
    } catch (error) {
      console.error("error adding note:", error);
    }
    document.dispatchEvent(new Event(RENDER_EVENT));
  }

  function generateId() {
   
    return `notes-${Math.random().toString(36).substr(2, 9)}`;
  }

  function generateDate() {
    const tanggal = new Date().toLocaleString();
    return `Dibuat pada tanggal ${tanggal}`;
  }

  function generateNoteObject(id, title, createdAt, body, isArchived) {
    return {
      id,
      title,
      createdAt,
      body,
      isArchived,
    };
  }

  function makeNote(noteObject) {
    const noteVariabel = document.createElement("note-item");

    noteVariabel.setAttribute("id", noteObject.id);
    noteVariabel.setAttribute("title", noteObject.title);
    noteVariabel.setAttribute("createdAt", noteObject.createdAt);
    noteVariabel.setAttribute("body", noteObject.body);
    noteVariabel.setAttribute("isArchived", noteObject.isArchived);
    noteVariabel.addEventListener("book-delete", (event) => {
      const noteId = noteObject.id;
      deleteNote(noteId);
      console.log(`-----deleteNote event: ${noteId} deleted-----`)
      console.log("ev: deleteEvent initialized")
    })

    return noteVariabel;
  }


 async function deleteNote(noteId) {
    const noteTarget = findNoteTarget(noteId);
    console.log(`noteId: ${noteId}`)

    try{
      await deleteNoteApi(noteId)
      if (noteTarget === -1) return;
      notes.splice(noteTarget, 1);
      
      console.log("async delete initialized=====")
    } catch (error) {
      console.error("error deleting note:", error);
    }

    document.dispatchEvent(new Event(RENDER_EVENT));

  }

  function findNoteTarget(noteId) {
    for (const index in notes) {
      if (notes[index].id === noteId) {
          return index;
      }
  }
  return -1

  }




















  function saveToStorage() {
    localStorage.setItem("notes", JSON.stringify(notes));
  }

  const showResponseMessage = (message = "Check your internet connection") => {
    alert(message);
  };

  //RENDER EVENT
 document.addEventListener(RENDER_EVENT, async function () {
    const noteContainer = document.getElementById("note-list-container");
    noteContainer.innerHTML = "";

    notes.forEach((note) => {
      const noteElement = makeNote(note);
      noteContainer.append(noteElement);
    });
    console.log("render");

    try {
      const notes = await getAllNotes();
      notes.forEach((note) => {
        const noteElement = makeNote(note);
        document.getElementById("note-list-container").append(noteElement);
      });

    } catch (error) {
      console.error("error fetching notes:", error);
    }
  });

//DOM
  document.addEventListener("DOMContentLoaded", async () => {
    formValidation();

    try {
      const notes = await getAllNotes();
      notes.forEach((note) => {
        const noteElement = makeNote(note);
        document.getElementById("note-list-container").append(noteElement);
      });
    } catch (error) {
      console.error("error fetching notes:", error);
    }

    console.log("dom");
    const noteForm = document.getElementById("form");
    noteForm.addEventListener("submit", async function (event) {
      event.preventDefault();
      await addNote();
      noteForm.reset();
    });
  });
};

export default home;
