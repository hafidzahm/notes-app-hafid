class NoteItem extends HTMLElement {
  static observedAttributes = [
    "id",
    "title",
    "createdAt",
    "body",
    "isArchived",
    "button",
  ];
  constructor() {
    super();
    this._id = this.getAttribute("id");
    this._title = this.getAttribute("title");
    this._createdAt = new Date().toLocaleString();
    this._body = this.getAttribute("body");
    this._isArchived = this.getAttribute("isArchived");
    this._button = this.getAttribute("button");
  }

  connectedCallback() {
    this.render();
    console.log("note-nonarchived zones-active");
  }

  disconnectedCallback() {
    console.log("note-nonarchived zones-nonactive");
  }

  render() {
    console.log("isArchived Value:", this._isArchived);
    console.log("ev: Note nonarchived rendered-----");
    this.innerHTML = `




         
    <div id="note-list-container" class="noteListContainer">
    <note-item>
    <div class="button-container">

    </div>
    </note-item>

  </div>
      
          
          `;
          const archiveButton = document.createElement("archive-button");
this.querySelector(".button-container").append(archiveButton);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this[`_${name}`] = newValue;
    this.render();
  }
}

customElements.define("note-nonarchived", NoteItem);
