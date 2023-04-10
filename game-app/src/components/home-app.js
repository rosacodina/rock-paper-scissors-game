import { LitElement, html, css } from "lit";

export class HomeApp extends LitElement {
  static get properties() {
    return {
      page: String,
    }
  }

  constructor() {
    super();
    this.page = "home";
  }

  static styles = css`
    :host {
      min-height: 80vh;
      display: flex;
      flex-direction: column;
    }


    h1 {
        background-color: black;
        width: 100px;
        color: red;
    }
  `;

    render() {
        return html`
        <section>            
    </section>

        `;
    }
}

customElements.define("home-app", HomeApp);