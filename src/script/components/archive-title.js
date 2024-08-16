class ArchiveTitle extends HTMLElement {
  constructor() {
    super();

    this.render();
  }

  render() {
    this.innerHTML = `
          
          <div class="archive-bar" data-aos="fade-up"
          data-aos-duration="2500">
              <div class="app-name"><span id="notes-text">Arsip Catatan</span></span></div>
          </div>
          
          `;
  }
}

customElements.define("archive-title", ArchiveTitle);
