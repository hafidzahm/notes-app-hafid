class AppBar extends HTMLElement {
  constructor() {
    super();

    this.render();
  }

  render() {
    this.innerHTML = `
        
        <div class="app-bar" data-aos="fade-up"
        data-aos-duration="2500">
            <div class="app-name"><span id="notes-text">Notes</span><span id="app-text">App </span></div>
        </div>
        
        `;
  }
}

customElements.define("app-bar", AppBar);
