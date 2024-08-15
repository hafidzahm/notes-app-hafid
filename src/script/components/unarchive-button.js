
class UnarchiveButton extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
    const unarchiveButton = this.querySelector(".unarchive-button");

    unarchiveButton.addEventListener("click", this.handleUnarchive.bind(this));
  }

  disconnectedCallback() {
    const unarchiveButton = this.querySelector(".unarchive-button");

    unarchiveButton.removeEventListener(
      "click",
      this.handleUnarchive.bind(this),
    );
  }

  handleUnarchive() {
    const baseUrl = "https://notes-api.dicoding.dev/v2";
    const id = this.parentElement.parentElement.getAttribute("id");
    console.log("UNARCHIVE-BUTTON CLICKED", id)
    const unarchiveNoteApi = async (noteId) => {
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
        // showResponseMessage(responseJson.message);
        window.location.reload();
        if (response) {
          localStorage.setItem('NOTE_UNARCHIVE', JSON.stringify({success: true}));
        }
        return responseJson;
      } catch (error) {
        // showResponseMessage(error);
        Swal.fire({
          title: `GAGAL MEMBUANG ARSIP`,
          icon: "warning",
          confirmButtonText: "OK",
        });
      }
    };
    unarchiveNoteApi(id);
    const showResponseMessage = (message = "Check your internet connection") => {
      alert(message);
    };
  }

  render() {
    this.innerHTML = `
            <style>
                button {
                    color: white;
                    background-color: green;
                    border-color: #d43f3a;
                    width:100%;
                    padding: 6px;
                    border-radius: 4px;
                    border: none;
                    cursor: pointer;
                }
            </style>
            <button class="unarchive-button">Batalkan Arsip</button>
        `;
  }
}

customElements.define("unarchive-button", UnarchiveButton);
