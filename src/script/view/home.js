import "../components/index.js";
import dummies from "../data/local/notes.js";
import formValidation from "../components/form-validation.js";
import buttonState from "../components/button-state.js";
// import notes from "../data/local/notes.js";
// import "../data/api.js"
//
const notes = [];
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
      // await getAllNotes();
      return responseJson;
    } catch (error) {
      showResponseMessage(error);
    }
  };
  const unarchivedNoteApi = async (noteId) => {
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch(
        `${baseUrl}/notes/${noteId}/unarchive`,
        options,
      );
      const responseJson = await response.json();

      console.log(responseJson);
      showResponseMessage(responseJson.message);
      return responseJson
    } catch (error) {
      showResponseMessage(error);
    }
  };

  const addNoteArchivedApi = async (noteId) => {
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch(
        `${baseUrl}/notes/${noteId}/archive`,
        options,
      );
      const responseJson = await response.json();
      console.log(responseJson);
      showResponseMessage(responseJson.message);
      return responseJson;
    } catch (error) {
      showResponseMessage(error);
    }
  };

  const getNoteArchivedApi = () => {
    return fetch(`${baseUrl}/notes/archived`)
      .then((response) => {
        if (response.status >= 200 && response.status <= 300) {
          return response.json();
        } else {
          return Promise.reject(new Error(`Something went wrong`));
        }
      })
      .then((responseJson) => {
        const { data: id } = responseJson;

        console.log(responseJson);
        return Promise.resolve(id);
      });
  };

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
    // fetch(`${baseUrl}/notes/${noteId}`, {
    //   method: 'DELETE',
    //   headers: {
    //     'X-Auth-Token': '12345',
    //   },
    // })
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((responseJson) => {
    //     showResponseMessage(responseJson.message);
    //     getAllNotes();
    //     console.log(responseJson.message)
    //   })
    //   .catch((error) => {
    //     showResponseMessage(error);
    //   });

    return fetch(`${baseUrl}/notes/${noteId}`, {
      method: "DELETE",
    })
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        showResponseMessage(responseJson.message);
        console.log(responseJson.message);
        getAllNotes();
        getNoteArchivedApi();
      })
      .catch((error) => {
        showResponseMessage(error);
        console.log(error);
      });
  };

  async function addNote() {
    const id = generateId();
    const title = document.getElementById("title").value;
    const createdAt = generateDate();
    const body = document.getElementById("body").value;

    const isArchived = document.getElementById("isArchived").checked;

    const noteObject = generateNoteObject(
      id,
      title,
      createdAt,
      body,
      isArchived,
    );
    try {
      const response = await addNoteApi(noteObject);
      const responseId = response.data.id;
      console.log(responseId, isArchived);
      if (isArchived) {
            await addNoteArchived(responseId);
      }

        
      
    } catch (error) {
      console.error("error adding note:", error);
    }
    notes.push(noteObject);
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
    const noteContainer = document.querySelector(".note-container");

    noteVariabel.setAttribute("id", noteObject.id);
    noteVariabel.setAttribute("title", noteObject.title);
    noteVariabel.setAttribute("createdAt", noteObject.createdAt);
    noteVariabel.setAttribute("body", noteObject.body);
    noteVariabel.setAttribute(
      "isArchived",
      noteObject.isArchived ? "true" : "false",
    );
    noteVariabel.addEventListener("note-delete", (event) => {
      const noteId = noteObject.id;
      deleteNote(noteId);

      console.log(`-----deleteNote event: ${noteId} deleted-----`);
      console.log("ev: deleteEvent initialized");
    });
    console.log(
      "isArchived attribute set to:",
      noteVariabel.getAttribute("isArchived"),
    );

    

    if (!noteObject.isArchived) {
      const archiveButton = document.createElement("archive-button");
      archiveButton.addEventListener("archive-button",  (event) => {
        addNoteArchivedApi();
        console.log(`-----archiveNote event: ${noteId} archived-----`);
        console.log("ev: archiveEvent initialized");
      });
      const buttonContainer = noteVariabel.querySelector("button-container");
      archiveButton.append(buttonContainer);
    } else {
      const unarchiveButton = document.createElement("unarchive-button");
      unarchiveButton.addEventListener("unarchive-button",  (event) => {
        unarchivedNoteApi();
        console.log(`-----unarchiveNote event: ${noteId} archived-----`);
        console.log("ev: unarchiveEvent initialized");
      });
      const buttonContainer = noteVariabel.querySelector("button-container");
      unarchiveButton.append(buttonContainer);
    }
    noteVariabel.append(noteContainer);
    return noteVariabel;
  }

  async function deleteNote(noteId) {
    const noteTarget = findNoteTarget(noteId);
    console.log(findNoteTarget(noteId));

    try {
      await deleteNoteApi(noteId);
      if (noteTarget === -1) return;
      notes.splice(noteTarget, 1);

      console.log("async delete initialized=====");
    } catch (error) {
      console.log(error);
    }

    document.dispatchEvent(new Event(RENDER_EVENT));
  }

  function findNoteTarget(noteId) {
    for (const index in notes) {
      if (notes[index].id === noteId) {
        return index;
      }

      console.log(index);
    }
    return -1;
  }

  async function addNoteArchived(noteId) {
    try {
      const response = await addNoteArchivedApi(noteId);
    } catch (error) {
      console.log(error);
    }
    document.dispatchEvent(new Event(RENDER_EVENT));
  }

  async function addToUnarchived() {
    const noteId = generateId();
    const noteTargetId = findNote(noteId);
    try {
      await unarchivedNoteApi(noteId);
      if (noteTargetId == null) return;

      noteTargetId.isArchived = false;
    } catch (error) {
      console.log(error);
    }

    document.dispatchEvent(new Event(RENDER_EVENT));
  }

  function findNote(noteId) {
    for (const note of notes) {
      if (note.id === noteId) {
        return note;
      }
    }
    return null;
  }

  function saveToStorage() {
    localStorage.setItem("notes", JSON.stringify(notes));
  }

  const showResponseMessage = (message = "Check your internet connection") => {
    alert(message);
  };

  //RENDER EVENT
  document.addEventListener(RENDER_EVENT, async function () {
    formValidation();

    // const noteContainer = document.getElementById("note-list-container");
    // noteContainer.innerHTML = "";

    // notes.forEach((note) => {
    //   const noteElement = makeNote(note);
    //   noteContainer.append(noteElement);
    // });

    const archivedNoteContainer = document.getElementById(
      "note-archive-container",
    );
    archivedNoteContainer.innerHTML = "";

    const noteContainer = document.getElementById("note-list-container");
    noteContainer.innerHTML = "";




    for (const note of notes) {
      const noteElement = makeNote(note);
      if (!note.isArchived) {
            getAllNotes()
            noteContainer.append(noteElement);
      } else {
            getNoteArchivedApi()
            archivedNoteContainer.append(noteElement);
      }
}

  });

  //DOM
  document.addEventListener("DOMContentLoaded", async () => {
    formValidation();
    buttonState();

 

    try {
      
      const notesNon = await getAllNotes();
      notesNon.forEach((note) => {
        const noteElement = makeNote(note);
        document.querySelector("#note-list-container").append(noteElement);
      });


    } catch (error) {
      console.error("error fetching notes:", error);
    }

    try {
      const archivedNotes = await getNoteArchivedApi();
      archivedNotes.forEach((note) => {
        const noteElement = makeNote(note);
        document.querySelector("#note-archive-container").append(noteElement);
      });
    } catch (error) {
      console.error("error fetching notes:", error);
    }

    const noteForm = document.getElementById("form");

    noteForm.addEventListener("submit", async function (event) {
      event.preventDefault();
      formValidation();
      await addNote();
    


      noteForm.reset();

    });
  });

};

export default home;
