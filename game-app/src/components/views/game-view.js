import { LitElement, html, css } from 'lit';

export class GameView extends LitElement {
	static get properties() {
    return {
      page: {type: String},
			playerName: {type: String},
			playerSelection: {type: String},
			botSelection: {type: String},
			rock: {type: Boolean},
			paper: {type: Boolean},
			scissors: {type: Boolean},
			winner: {type: String}

    }
  }

	constructor() {
    super();
    this.page = "game";
		this.inputValue = "";
		this.botSelection = "";
		this.rock = false;
		this.paper = false;
		this.scissors = false;
		this.playerSelection = "";
		this.winner = "";
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
				margin-left: 5%;
				font-size: 22px;
				float: left;
				font-weight: bold;
			}

			.exitHome {
				width: 49px;
				height: 49px;
				margin-top: -10px;
				margin-left: 450px;
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

			
      `
    ];

  render() {
    return html`
			<section>
				<nav>
					<ul>
						<li>
							<a>Player: ${this.playerName}</a>
						</li>
						
						<li>
							<a @click="${this.goHome}" href="/home">
							<img class="exitHome" src="../src/assets/game/home.png"></a>
						</li>
					</ul>
				</nav>
					
				<div class="game-box">
					<p class="score">${this.playerName} score is: </p>
					
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


	goHome(event) {
		event.preventDefault();
		window.location.href = "/";
	}

	rockClicked() {
		this.playerSelection = "rock";
		this.rock = true;
		setTimeout(() => {
			this.botSelection = this.botPlay();
			this.getWinner(this.playerSelection, this.botSelection);
		}, 1000);
	}

	paperClicked() {
		this.playerSelection = "paper";
		this.rock = false;
		setTimeout(() => {
			this.botSelection = this.botPlay();
			this.getWinner(this.playerSelection, this.botSelection);
		}, 1000);
	}

	scissorsClicked() {
		this.playerSelection = "scissors";
		this.rock = false;
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
			} else if (
				(botSelection === "rock" && playerSelection === "scissors") ||
				(botSelection === "paper" && playerSelection === "rock") ||
				(botSelection === "scissors" && playerSelection === "paper")) {
					//In this else if, bot wins
					this.resultMessage = "Bot wins";
				} else {
					this.resultMessage = "There is a tie in the game";
				}
	}

	
}
customElements.define('game-view', GameView);
