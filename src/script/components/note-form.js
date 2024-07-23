class NoteForm extends HTMLElement{
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
              name="title-note"
              id="title-note"
              required
              minlength="3"
              aria-describedby="inputValidation"
            />
            <p id="inputValidation" class="validation-message"></p>
          </div>
          

          <div class="form-body">
            <label for="note">Catatan</label>
            <textarea cols="1000" name="body-note" id="body-note"></textarea>
          </div>
          <div class="form-button">
            <button class="button submit-button">Simpan catatan</button>
          </div>
        </form>
      </div>`

    }
}

customElements.define('note-form', NoteForm)