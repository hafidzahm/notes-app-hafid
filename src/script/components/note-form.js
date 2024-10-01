class NoteForm extends HTMLElement {
  constructor() {
    super();

    this.render();
  }
  render() {
    this.innerHTML = `
        <div id="form-spin">
        <form id="form"data-aos="fade-up"
        data-aos-duration="2500">
          <div class="form-title"data-aos="fade-up"
          data-aos-duration="2500">
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
          

          <div class="form-body"data-aos="fade-up"
          data-aos-duration="2500">
            <label for="note">Catatan</label>
            <textarea name="body" id="body"></textarea>
          </div>
          <!-- checkbox note isArchived -->
          <div class="checkbox-element hidden">
          <input id="isArchived" type="checkbox"></input>
              <label for="isArchived">Arsipkan Catatan</label>
              
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
