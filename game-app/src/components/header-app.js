import { LitElement, html, css } from 'lit';

export class HeaderApp extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }

		
    `
  ];

  render() {
    return html`
			<section>
				<h1>Rock, paper, scissors</h1>
			</section>
		`;
  }
}

customElements.define('header-app', HeaderApp);
