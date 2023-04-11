import { LitElement, html, css } from "lit";
import {when} from "lit/directives/when.js";
import "./header-app.js";
import "./game-view.js";

export class HomeApp extends LitElement {
  static get properties() {
    return {
      page: {type: String},
			input: {type: String},
			invalidUSer: {type: Boolean},
			showGame : {type: Boolean}
    }
  }

  constructor() {
    super();
    this.page = "home";
		this.input = "";
		this.invalidUSer = false;
		this.showGame = false;
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

		section {
			padding-left: 23%;
			padding-top: 25%;
			justify-content: center;
		}

		div {
			display: flex;
			flex-direction: column;
			align-items: center;
			background-image: linear-gradient(to bottom right, #75c2f981, #a371bc94);
			width: 70%;
			height: 200px;
			border-radius: 15px;
			padding-top: 10%;
		}

    h2 {
      color: black;
			width: 100%;
			font-size: 17px;
			text-align: center;
    }

		input {
			width: 60%;
			height: 30px;
			text-align: center;
			margin-bottom: 15px;
			border-radius: 15px;
			border-color:  #75c2f981;
		}

		button {
			width: 41%;
			height: 30px;
			margin-bottom: 5%;
			border-radius: 15px;
			border-color:  #75c2f981;
			background-color: #75c2f981;
		}

		.valid-user--toggle {
			transform: translateX(0%);
			transition: all 0.3s linear;
		}

		.invalid-user--toggle {
			transform: translateX(0%);
		}
  `;

  render() {
    return html`
	  	<header-app></header-app>
			${when(this.showGame,
				() => html`<game-view></game-view>`,
				() => html`
					<section>
							<div> 
								<h2>Create a new player</h2>
								<input
									@input=${(ev)=>this.input = ev.target.value}
									type="text"
									placeholder="Player name"
								>  
								<button id="button" @click=${this.handleInput}>Join</button>
								
								${this.invalidUSer
									? html `<p>Your user name ${this.input} is not valid, please try again</p>`
									: html ``} 
							</div>
						</section>
					`
				)}	
    `;
  }

		handleInput() {
			if (this.input.length > 0) {
				this.invalidUSer = false;
				this.goGame();
			} else {
				this.invalidUSer = true;
			}
		}

		goGame() {
			this.page = "game";
			this.showGame = true;
		}

}

customElements.define("home-app", HomeApp);