class NoteForm extends HTMLElement {
  constructor() {
    super();

    this.render();
  }
  render() {
    this.innerHTML = `
        <div id="form-spin">
        <form id="form">
          <div class="form-title">
            <label for="title">Judul catatan</label>
            <input
              type="text"
              name="title"
              id="title"
              required
              minlength="3"
              aria-describedby="inputValidation"
            />
            <p id="inputValidation" class="validation-message"></p>
          </div>
          

          <div class="form-body">
            <label for="note">Catatan</label>
            <textarea cols="1000" name="body" id="body"></textarea>
          </div>
          <!-- checkbox note isArchived -->
          <div class="checkbox-element">
              <label for="isArchived">Arsipkan Catatan</label>
              <input id="isArchived" type="checkbox"></input>
          </div>

          <div class="form-button">
          <button
            class="button submit-button"
            id="submit-button"
            type="submit">
            Simpan catatan
          </button>
          </div>

        
        </form>
      </div>`;
  }
}

customElements.define("note-form", NoteForm);
