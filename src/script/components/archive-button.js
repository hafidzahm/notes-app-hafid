import Swal from "sweetalert2";
class ArchiveButton extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
    const archiveButton = this.querySelector(".archive-button");

    archiveButton.addEventListener("click", this.handleArchive.bind(this));
  }

  disconnectedCallback() {
    const archiveButton = this.querySelector(".archive-button");

    archiveButton.removeEventListener("click", this.handleArchive.bind(this));
  }

  handleArchive() {
    const baseUrl = "https://notes-api.dicoding.dev/v2";
    const id = this.parentElement.parentElement.getAttribute("id");
    console.log("ARCHIVE-BUTTON CLICKED", id);
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
        // showResponseMessage(responseJson.message);
        window.location.reload();
        if (response) {
          localStorage.setItem(
            "NOTE_ARCHIVE",
            JSON.stringify({ success: true }),
          );
        }
        return responseJson;
      } catch (error) {
        // showResponseMessage(error);
        Swal.fire({
          title: `Gagal mengarsipkan catatan. Cek internet anda, dan coba beberapa saat lagi.`,
          icon: "warning",
          confirmButtonText: "OK",
        });
      }
    };
    addNoteArchivedApi(id);
    const showResponseMessage = (
      message = "Check your internet connection",
    ) => {
      alert(message);
    };
  }

  render() {
    this.innerHTML = `
            <style>
                button {
                    color: green;
                    background-color: white;
                    border-color: #d43f3a;
                    width:100%;
                    padding: 6px;
                    border-radius: 4px;
                    border: none;
                    cursor: pointer;
                }
            </style>
            <button class="archive-button">Pindah ke Arsip</button>
        `;
  }
}

customElements.define("archive-button", ArchiveButton);
