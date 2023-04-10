import { LitElement, html, css } from "lit";

export class HomeApp extends LitElement {
  static get properties() {
    return {
      page: String,
			input: String,
    }
  }

  constructor() {
    super();
    this.page = "home";
		this.input = "";
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
  `;

    render() {
      return html`
      <section>
				<div> 
					<h2>Create a new player</h2>
					<input
						@input="${this.handleInput}"
						type="text"
						placeholder="Player name"
					>  
					<button @click="${this.handleClick}">Join</button>
					<p id="#welcome">Welcome ${this.input}</p> 
				</div>      
    	</section>
        `;
    }

		handleInput(event) {
			this.input = event.target.value;
		}

		handleClick() {
			if (this.input === "") {
				this.error = "Please, introduce a valid name"
			} else {
				
			}
		}



		
}

customElements.define("home-app", HomeApp);