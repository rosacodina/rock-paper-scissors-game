import { LitElement, html, css } from 'lit';
import {Router} from "@vaadin/router";
import "../src/components/home-app";

class GameApp extends LitElement {

  static properties = {
  }

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
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
  }

  render() {
    return html`
      <div id="app">
      </div>
      
    
    `;
  }

  firstUpdated() {
    const output = this.renderRoot.querySelector("#app");
    const router = new Router(output); 
    router.setRoutes([
      {path: "/", component: "home-app"},
      {path: "/game", component: "game-app"},
      {path: "(.*)", component: "home-app"}, 

    ]);
  }
}

customElements.define('game-app', GameApp);