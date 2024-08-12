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

          <unarchive-button></unarchive-button>
          </div>
          
          </note-item>
        </div>
          
          `;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this[`_${name}`] = newValue;
    this.render();
  }
}

customElements.define("note-archived", NoteItem);
