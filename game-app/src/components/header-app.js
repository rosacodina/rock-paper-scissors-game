import { LitElement, html, css } from 'lit';

export class HeaderApp extends LitElement {
	static properties = {
  }

	constructor() {
		super();
	}
	
	static styles = [
    css`
      :host {
        display: block;
      }

			section {
        padding-top: 1%;
        background-image: linear-gradient(to bottom right,   #FF6EC4, #902fcc, #7e4fe3, #643dab, #6ea3ff, #506fc0, #71a2d3, #3c77cf);
        background-size: cover;
        height: 42%;
        padding: 10% 0;
        clip-path: polygon(0 0, 180% 0, 10% 140%, 0 100%);
				display: flex;
				flex-direction: column;
      }

      h1 {
        text-align: center;
        margin-top: -9px;
        color: white;
				width: 100%;
      }

			div {
				position: relative;
				width:85%;
				height: 100px;
				margin-left: 43%;
			}

			img {
				position: absolute;
				top: 0;
				left: 0;
				width: 100px;
				height: 100px;
				opacity: 0;
				z-index: 1;
				animation: fade 5s ease-in-out infinite;
				animation-iteration-count: infinite;
				animation-fill-mode: both;
			}

			img:nth-child(1) {
				animation-delay: 0s;
			}

			img:nth-child(2) {
				animation-delay: 2s;
				z-index: 2;	
			}

			div img:nth-child(3) {
				animation-delay: 3s;
				z-index: 3;
			}

			@keyframes fade {
				0% { //status that indicate the progress of the animation
					opacity:0;
				}

				16% {
					opacity: 1;
				}

				83% {
					opacity: 1;
				}

				100% {
					opacity: 0;
				}
			}

			@media screen and (min-width: 1024px) {
        section {
					height: 220px;
					margin-top: -250px;
					justify-content: center;
					align-items: center;
					display: flex;
					flex-direction: column;
				}
				
				h1 {
          font-size: 100px;
					margin-top: 180px;
					margin-bottom: 20px;
					width: 100%;
        } 

				div {
					width: 85%;
					height: 600px;
					margin-left: 52%;
				}

				img {
					margin-left: 10%;
					width: 120px;
					height: 120px;
				}
      }
    `
  ];

  render() {
    return html`
			<section>
				<h1>Rock, paper, scissors</h1>
				<div>
					<img src="../src/assets/header/game.png" alt="Scissors image">
					<img src="./src/assets/header/paper.png" alt="Paper image">
					<img src="./src/assets/header/scissors.png" alt="Game image">
				</div>
			</section>
		`;
  }
}

customElements.define('header-app', HeaderApp);
