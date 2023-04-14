import { LitElement, html, css } from 'lit';

export class GameView extends LitElement {
	static get properties() {
    return {
      page: {type: String},
			playerName: {type: String},
			playerSelection: {type: String},
			botSelection: {type: String},
			winner: {type: String},
			playerScore: {type: Number}
    }
  }

	constructor() {
    super();
    this.page = "game";
		this.playerName = "";
		this.botSelection = "";
		this.playerSelection = "";
		this.winner = "";
		this.playerScore = 0;
  }

  static styles = [
    css`
      :host {
        display: block;
      }

			section {
				height: 100%;
				padding-left: 5%;
				justify-content: center;
				
			}

			ul {
				background-image: linear-gradient(to bottom right, #5e70b181, #4a65af81, #7589e381, #6373a981);
				width: 89.9%;
				border-radius: 15px;
				margin-bottom: 3%;
				overflow: hidden;
				list-style: none;
				height: 50px;
				display: flex;
				flex-direction: row;
				justify-content: space-between;			
			}

			a {
				padding-right: 2%;
				font-size: 22px;
				float: left;
				font-weight: bold;
			}

			.exitHome {
				width: 49px;
				height: 49px;
				margin-left: 25%;
			}

			.game-box {
				display: flex;
				flex-direction: column;
				align-items: center;
				background-image: linear-gradient(to bottom right, #40627a81, #84a6be81, #5f89a781, #7bb4dc81);
				width: 95%;
				height: 450px;
				border-radius: 15px;
				padding-top: 6%;
				margin-bottom: 5%;
				font-size: 19px;
				font-weight: bold;
			}

			.chose-option {
				display: flex;
				flex-direction: row;
				width: 60%;
				justify-content: space-evenly;
			}

			.player-chose {
				color: #b32fdbd4;
				font-weight: bold;
			}

			.bot-chose {
				color: #123a8ad2;
				font-weight: bold;
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

			@media screen and (min-width: 1024px) {
				ul {
					padding-left: 2%;
					margin-top: 2%;
					width: 92%;
					height: 190px;
				}

				a {
					font-size: 30px;
					padding-right: 2%;
				}
				
				.game-box {
					height: 1300px;
					margin-top: 2%;
					font-size: 40px;
				}

				img {
					width: 300px;
					height: 300px;
				}
			}
    `
  ];

  render() {
    return html`
			<section>
				<nav>
					<ul>
						<li>
							<a @click="${this.goHome}" href="/home" class="exit-icon">
							<img class="exitHome" src="../src/assets/game/home.png"></a>
						</li>
						
						<li>
							<a>Welcome: ${this.playerName}</a>
						</li>
					</ul>
				</nav>
					
				<div class="game-box">
					<p class="score">${this.playerName} score is: ${this.playerScore}</p>
					
					<div class="chose-option">
						<p class="player-chose">You chose: ${this.playerSelection} </p>
						<p class="bot-chose">Bot chose: ${this.botSelection}</p>
					</div>

					<div>
						<button @click="${this.rockClicked}">
						<img src="../src/assets/game/rock.jpg">
						</button>

						<button @click="${this.paperClicked}">
							<img src="../src/assets/game/paper.jpg"></a>
						</button>

						<button @click="${this.scissorsClicked}">
							<img src="../src/assets/game/scissors.jpg"></a>
						</button>
					</div>

					<p id="result-message">${this.resultMessage}</p>
				</div>
			</section>
		`;
  }

	startGame(event) {
		this.page = "game";
		this.shadowRoot.querySelector("game-view").playerName = event.detail.playerName;
		this.shadowRoot.querySelector("game-view").playerScore = event.detail.playerScore;
	}

	goHome(event) {
		console.log("go Home");
		event.preventDefault();
		window.location.href = "/";
	}

	rockClicked() { //DEJAR EN UNA SOLA FUNCIÓN
		this.playerSelection = "rock";
		setTimeout(() => {
			this.botSelection = this.botPlay();
			this.getWinner(this.playerSelection, this.botSelection);
		}, 1000);
	}

	paperClicked() {
		this.playerSelection = "paper";
		setTimeout(() => {
			this.botSelection = this.botPlay();
			this.getWinner(this.playerSelection, this.botSelection);
		}, 1000);
	}
 
	scissorsClicked() {
		this.playerSelection = "scissors";
		setTimeout(() => {
			this.botSelection = this.botPlay();
			this.getWinner(this.playerSelection, this.botSelection);
		}, 1000);
	}

	botPlay() {
		const randomSelection = Math.random();
		let botSelection = "";

		if (randomSelection < 0.33) {
			botSelection = "rock";
		} else if (randomSelection < 0.66) {
			botSelection = "paper";
		} else {
			botSelection = "scissors";
		}
		return botSelection;
	}

	getWinner(playerSelection, botSelection) {
		if (
				(playerSelection === "rock" && botSelection === "scissors") ||
				(playerSelection === "paper" && botSelection === "rock") ||
				(playerSelection === "scissors" && botSelection === "paper")) {
					//In this if, player wins
					this.resultMessage = this.playerName + " player wins";
					this.playerScore++;
			} else if (
				(botSelection === playerSelection)) {
					//In this else if, bot wins
					this.resultMessage = "There is a tie in the game";

				} else {
					this.resultMessage = "Bot wins";
					this.playerScore--;
				}
	}
}
customElements.define('game-view', GameView);
