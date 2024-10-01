class LoadingIndicator extends HTMLElement {
  constructor() {
    super();

    this.render();
  }

  render() {
    this.innerHTML = `
        <style>
        .this {
            width: 100vw;
            height: 100vh;
            background-color: white;
            position: fixed;
            top: 0;
            left: 0;
        }

        
        </style>
      <img src="loading-indicator.gif" size= "60x60">

          `;
  }
}

customElements.define("loading-indicator", LoadingIndicator);
