class DeleteButton extends HTMLElement {
  constructor() {
    super();

    this.render();
  }

  render() {
    this.innerHTML = `
            <style>
                button {
                    color: blue;
                    background-color: green;
                    border-color: #d43f3a;
                    width:100%;
                    padding: 6px;
                    border-radius: 4px;
                    border: none;
                    cursor: pointer;
                }
            </style>
            <button class="delete-button">Hapus catatan</button>
        `;
  }
}

customElements.define("delete-button", DeleteButton);
