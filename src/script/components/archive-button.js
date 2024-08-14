class ArchiveButton extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
    const archiveButton = this.querySelector("button");

    archiveButton.addEventListener("click", this.handleArchive.bind(this));
  }

  disconnectedCallback() {
    const archiveButton = this.querySelector("button");

    archiveButton.removeEventListener("click", this.handleArchive.bind(this));
  }

  handleArchive() {
    const id = this.parentElement.parentElement.getAttribute("id");

    this.dispatchEvent(
      new CustomEvent("note-archive", {
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
            <button>Pindah ke Arsip</button>
        `;
  }
}

customElements.define("archive-button", ArchiveButton);
