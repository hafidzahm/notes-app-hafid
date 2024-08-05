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
  //   const getAllNotes = async () => {
  //     fetch(`${baseUrl}/notes`)
  //     .then((response) => {
  //       if (response.status >= 200 && response.status < 300) {
  //         return response.json();
  //       } else {
  //         return Promise.reject(new Error(`Something went wrong`));
  //       }
  //       })

  //       .then((responseJson) => {
  //         const { noteObject } = responseJson;

  //         if (notes.length > 0) {
  //           return Promise.resolve(notes);
  //         } else {
  //           return Promise.reject(new Error(`note not found`));
  //         }

  //       });

  //     // try {
  //     //   const options = {
  //     //     method: 'GET',
  //     // };
  //     //     const response = await fetch(`${baseUrl}/notes`);
  //     //     const responseJson = await response.json();

  //     //     // if (responseJson.error) {
  //     //     //     showResponseMessage(responseJson.message);
  //     //     //   } else {
  //     //     //     makeNote(responseJson.data);
  //     //     //     console.log("WOY");
  //     //     //   }

  //     //     if (response.status >= 200 && response.status < 300) {
  //     //       return response.json();

  //     //     } else {
  //     //       return Promise.reject(new Error(`Something went wrong`));
  //     //     }

  //     //     }

  //     //     catch (error)  {
  //     //     showResponseMessage(error);
  //     // }
  // };

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

  //   Gunakan Fungsi ini untuk pengambil data dari API
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

      notes.push(noteObject);

      document.dispatchEvent(new Event(RENDER_EVENT));
    } catch (error) {
      console.error("error adding note:", error);
    }
  }

  function generateId() {
    // notes-${Math.random().toString(36).substr(2, 9)};
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

  // const notes = await getAllNotes();
  // notes.forEach(note => {
  //   const noteElement = makeNote(note);
  //   document.getElementById("note-list-container").append(noteElement);
  // })

  function makeNote(noteObject) {
    const noteVariabel = document.createElement("note-item");

    noteVariabel.setAttribute("id", noteObject.id);
    noteVariabel.setAttribute("title", noteObject.title);
    noteVariabel.setAttribute("createdAt", noteObject.createdAt);
    noteVariabel.setAttribute("body", noteObject.body);
    noteVariabel.setAttribute("isArchived", noteObject.isArchived);
    return noteVariabel;
  }

  function saveToStorage() {
    localStorage.setItem("notes", JSON.stringify(notes));
  }

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

    // addNote();
  });

  const showResponseMessage = (message = "Check your internet connection") => {
    alert(message);
  };

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
      // getAllNotes();
    });

    // if (!localStorage.getItem("notes")) {
    //   localStorage.setItem("notes", JSON.stringify(dummies));
    //   notes = JSON.parse(localStorage.getItem("notes"));
    // } else {
    //   notes = JSON.parse(localStorage.getItem("notes")) || [];
    // }
  });
  // getAllNotes();
  // makeNote()
};

export default home;
