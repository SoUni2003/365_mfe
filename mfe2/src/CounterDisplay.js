export default class CounterDisplay extends HTMLElement {
  constructor() {
    super();
    this.count = 0;
    this.render();
  }

  connectedCallback() {
    window.addEventListener("message", (event) => {
      if (event.data.type === "INCREMENT_COUNT") {
        this.count++;
        this.render();
      }
    });
  }

  render() {
    this.innerHTML = `<h2>Giá trị Count: ${this.count}</h2>`;
  }
}

customElements.define("mfe-two", CounterDisplay);
