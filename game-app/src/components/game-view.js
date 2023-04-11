import { LitElement, html, css } from 'lit';

export class GameView extends LitElement {
	static get properties() {
    return {
      page: {type: String},
    }
  }

	constructor() {
    super();
    this.page = "game";
  }

  static styles = [
    css`
      :host {
        display: block;
      }

			@media screen and (min-width: 768px) {
				section {
					display: none;
				}
				span {
					display: none;
				}
    	}

			section {
				padding-top: 25%;
				width: 25%;
				height: 35%;
			}
      `
    ];

  render() {
    return html`
			<section>
				<p>Score</p>
				<p>You: - Bot: </p>
			</section>
		`;
  }
}
customElements.define('game-view', GameView);
