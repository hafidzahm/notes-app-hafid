class UnarchiveButton extends HTMLElement {
  constructor() {
    super();

  }

  connectedCallback() {
    this.render();
    const unarchiveButton = this.querySelector("button")
    if (unarchiveButton) {
   unarchiveButton.addEventListener("click", this.handleUnarchive.bind(this));
      console.log("ev: handleUnarchive connected")


    }
    unarchiveButton.addEventListener("click", this.handleUnarchive.bind(this));
    console.log("ev: handleUnarchive connected")
  }

  disconnectedCallback() {
    const unarchiveButton = this.querySelector("button")
    if (unarchiveButton) {
      unarchiveButton.removeEventListener("click", this.handleUnarchive.bind(this));
      console.log("ev: handleUnarchive disconnected")

    }
  }

  handleUnarchive() {
    const id = parseInt(event.target.dataset.id);
    console.log(id)
    console.log('ev: handleArchive clicked')
    this.dispatchEvent(
      new CustomEvent("book-unarchive", {
        detail: {
          id,
        },
        bubbles: true,
      }),
    );
  }

  render() {
    this._innerHTML = `
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
            <button>Batalkan Arsip</button>
        `;
  }
}

customElements.define("unarchive-button", UnarchiveButton);
