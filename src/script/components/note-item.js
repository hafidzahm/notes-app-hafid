class NoteItem extends HTMLElement {
  static observedAttributes = [
    "id",
    "title",
    "createdAt",
    "body",
    "isArchived",
  ];
  constructor() {
    super();
    this._id = this.getAttribute("id");
    this._title = this.getAttribute("title");
    this["_createdAt"] = this.getAttribute("createdAt");
    this._body = this.getAttribute("body");
    this._isArchived = this.getAttribute("isArchived");
  }

  handleDelete() {
    const id = parseInt(event.target.dataset.id);
    console.log('ev: handleDelete clicked')
    this.dispatchEvent(
      new CustomEvent("book-delete", {
        detail: {
          id,
        },
        bubbles: true,
      }),
    );
  }


  connectedCallback() {
    this.render();
    console.log("ev: handleDelete connected")
    const deleteButton = this.querySelector("delete-button");

      deleteButton.addEventListener("click", this.handleDelete);

  }

  disconnectedCallback() {
    const deleteButton = this.querySelector("delete-button");

    deleteButton.removeEventListener("click", this.handleDelete);
    console.log("ev: handleDelete disconnected")
  }

  render() {
    console.log("ev: Note rendered-----");
    this.innerHTML = `




          <div id="note-list-container" class="noteListContainer">
          <div id=${this._id} class="container-list-note">
          <div class="container-note">
          <h1>${this._title}</h1>
          <h3>                        
          Dibuat pada tanggal:
          ${new Date(this["_createdAt"]).toLocaleDateString("id-ID", {
            dateStyle: "full",
          })}</h3>
          <h2>${this._body}</h2>
          <p class="hidden">${this._isArchived}</p>
          <delete-button id=${this._id}></delete-button>
          
          </div>

          </div>
        </div>
          
          `;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this[`_${name}`] = newValue;
    this.render();
  }
}

customElements.define("note-item", NoteItem);
