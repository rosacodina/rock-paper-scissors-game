import { LitElement, html, css } from 'lit';

export class GameView extends LitElement {
	static get properties() {
    return {
      page: {type: String},
			playerName: {type: String},
			rock: {type: Boolean}
    }
  }

	constructor() {
    super();
    this.page = "game";
		this.inputValue = "";
		this.rock = false;
  }

  static styles = [
    css`
      :host {
        display: block;
      }

			section {
				height: 100%;
				padding-left: 5%;
				padding-top: 3%;
				justify-content: center;
			}

			ul {
				background-image: linear-gradient(to bottom right, #5e70b181, #4a65af81, #7589e381, #6373a981);
				width: 89.9%;
				border-radius: 15px;
				margin-bottom: 4%;
				padding-top: 1.6%;
				overflow: hidden;
				list-style: none;
				height: 40px;
			}

			a {
				margin-left: 8%;
				font-size: 18px;
				float: left;
			}

			.exit {
				width: 49px;
				height: 49px;
				margin-top: -10px;
				margin-left: 1055%;


			}

			.game-box {
				display: flex;
				flex-direction: column;
				align-items: center;
				background-image: linear-gradient(to bottom right, #40627a81, #84a6be81, #5f89a781, #7bb4dc81);
				width: 95%;
				height: 450px;
				border-radius: 15px;
				padding-top: 10%;
				margin-bottom: 5%;
			}

			button {
				background-image: linear-gradient(to bottom right, #40627a81, #84a6be81, #5f89a781, #7bb4dc81);
				border: none;
			}
			
			img {
				border-radius: 50%;
				width: 130px;
				height: 130px;
				margin-right: 10px;
			}

			
      `
    ];

  render() {
    return html`
			<section>
				<nav>
					<ul>
						<li>
							<a>Player ${this.playerName}</a>
						</li>
						
						<li>
							<a @click="${this.goHome}" href="/home">
							<img class="exit" src="../src/assets/game/home.png"></a>
						</li>
					</ul>

				</nav>
					
				<div class="game-box">
					<p>${this.playerName} score: </p>
					<p>You chose: ${this.rock}  - Bot: </p>

					<div>
						<button @click="${this.rockClicked}">
						<img src="../src/assets/game/rock.jpg">
						</button>

						<button>
							<img src="../src/assets/game/paper.jpg"></a>
						</button>
						<button>
							<img src="../src/assets/game/scissors.jpg"></a>
						</button>
					</div>

				</div>
			</section>
		`;
  }


	goHome(event) {
		event.preventDefault();
		window.location.href = "/";
	}

	rockClicked() {
		this.rock = true;
	}
}
customElements.define('game-view', GameView);
