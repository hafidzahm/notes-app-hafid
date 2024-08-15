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
    const id = this.parentElement.parentElement.getAttribute("id");
    console.log("unarchive note clicked")
    this.dispatchEvent(
      new CustomEvent("note-unarchive", {
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
