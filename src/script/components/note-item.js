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
    this._createdAt = new Date().toLocaleString("id-ID");
    this._body = this.getAttribute("body");
    this._isArchived = this.getAttribute("isarchived");
  }

  connectedCallback() {
    this.render();
    const deleteButton = this.querySelector("delete-button");

    deleteButton.addEventListener("click", this.handleDelete.bind(this));
  }

  disconnectedCallback() {
    const deleteButton = this.querySelector("delete-button");

    deleteButton.removeEventListener("click", this.handleDelete.bind(this));
  }

  handleDelete() {
    const id = this._id;

    this.dispatchEvent(
      new CustomEvent("note-delete", {
        detail: {
          id,
        },
        bubbles: true,
      }),
    );
  }

  render() {
    this.innerHTML = `




         
          <div id=${this._id} class="container-list-note" data-aos="fade-up"
          data-aos-duration="2500">

          <div class="container-note">
           <h1>${this._title}</h1>
           <h3>                        
          Dibuat pada tanggal:
          <h3>${this._createdAt}</h3>
            <h2>${this._body}</h2>
            <p class="hidden">${this.getAttribute("isarchived")}</p>
          </div>

          <div class="button-container">
          
          <delete-button></delete-button>
          
          </div>
          
          </div>
      
          
          `;

    const archiveButton = document.createElement("archive-button");
    const unarchiveButton = document.createElement("unarchive-button");
    if (this.getAttribute("isarchived") === "true") {
      this.querySelector(".button-container").append(unarchiveButton);
    } else {
      this.querySelector(".button-container").append(archiveButton);
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this[`_${name}`] = newValue;
    this.render();
  }
}

customElements.define("note-item", NoteItem);
