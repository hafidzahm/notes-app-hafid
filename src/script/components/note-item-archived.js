class NoteArchived extends HTMLElement {
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
    this._createdAt = new Date().toLocaleString();
    this._body = this.getAttribute("body");
    this._isArchived = this.getAttribute("isArchived");
  }

  connectedCallback() {
    this.render();
    console.log("isArchived Value:", this._isArchived);
    console.log("ev: Archived note zone-----");
  }

  disconnectedCallback() {}

  render() {
    console.log("ev: Archived note rendered-----");
    this.innerHTML = `




    <div id="note-archive-container" class="noteArchiveContainer">
          <note-item>
          <div class="button-container">


          </div>
          
          </note-item>
        </div>
          
          `;
          const unarchiveButton = document.createElement("unarchive-button");
this.querySelector(".button-container").append(unarchiveButton);
  

  }

  attributeChangedCallback(name, oldValue, newValue) {
    this[`_${name}`] = newValue;
    this.render();
  }
}

customElements.define("note-archived", NoteItem);
