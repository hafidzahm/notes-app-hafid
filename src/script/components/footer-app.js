class FooterApp extends HTMLElement {
  constructor() {
    super();

    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="footer-app" >
            <h1 class="app-footer">Notes App, 2024</h1>
            <h2 class="app-desc">Abdul Hafizh Mahfudin</h2>
        </div>
        
        
        
        `;
  }
}

customElements.define("footer-app", FooterApp);
