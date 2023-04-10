import { LitElement, html, css } from 'lit';
import "../src/components/home-app";
import "../src/components/header-app";


import {Router} from "@vaadin/router";

class GameApp extends LitElement {

  static properties = {
    header: String,
  }

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
			font-family: 'PT Sans', sans-serif;
			font-family: 'Raleway', sans-serif;		
			}

			@media screen and (min-width: 768px) {
        section {
          display: none;
        }
        span {
          display: none;
        }
      }

  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
      <div>
        <header-app></header-app>
        <home-app></home-app>
      </div>
      
    
    `;
  }

  firstUpdated() {
    const output = this.renderRoot.querySelector("#app");
    const router = new Router(output);
    router.setRoutes([
      {path: "/home", component: "home-app"},
    ]);
  }
}

customElements.define('game-app', GameApp);