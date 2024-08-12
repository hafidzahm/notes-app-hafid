class ArchiveButton extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
    const archiveButton = this.querySelector("button");
    if (archiveButton) {
      archiveButton.addEventListener("click", this.handleArchive.bind(this));
      console.log("ev: handleArchive connected");
    }
  }

  disconnectedCallback() {
    const archiveButton = this.querySelector("button");
    if (archiveButton) {
      archiveButton.removeEventListener("click", this.handleArchive.bind(this));
      console.log("ev: handleArchive disconnected");
    }
  }

  handleArchive() {
    const id = parseInt(event.target.dataset.id);
    console.log(id);
    console.log("ev: handleArchive clicked");
    this.dispatchEvent(
      new CustomEvent("book-archive", {
        detail: {
          id,
        },
        bubbles: true,
      }),
    );
  }

  render() {
    this.innerHTML = `
            <style>
                button {
                    color: blue;
                    background-color: green;
                    border-color: #d43f3a;
                    width:100%;
                    padding: 6px;
                    border-radius: 4px;
                    border: none;
                    cursor: pointer;
                }
            </style>
            <button>Pindah ke Arsip</button>
        `;
  }
}

customElements.define("archive-button", ArchiveButton);
