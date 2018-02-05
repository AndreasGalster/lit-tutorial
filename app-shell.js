import {LitElement} from './node_modules/@polymer/lit-element/lit-element.js'
import { html } from './node_modules/lit-html/lib/lit-extended.js';

class AppShell extends LitElement {

	// Public property API that triggers re-render (synched with attributes)
  static get properties() {
    return {
			picture: String,
			text: String,
    }
  }

	generateImage() {
		let baseUrl = 'http://res.cloudinary.com/productcafe/image/upload/w_600/';
		let filePath = 'lit-html/qwt_bunny.jpg';
		let text = `x_0,y_40,w_500,c_fit,co_rgb:ffffff,g_south,l_text:Roboto_34_bold_center:${this.text}/`;

		this.picture = `${baseUrl}${text}${filePath}`;
	}

	constructor() {
		super();

		fetch('https://res.cloudinary.com/productcafe/image/upload/v1517795469/qwt_bunny.jpg').then(r => this.picture = r.url);
	}

  render({picture,text}) {
    return html`
			<style>
				:host {
					--pink: #f44289;

					position: absolute;
					top: 0;
					left: 0;
					right:0;
					bottom: 0;

					background: var(--pink);
				}

				h1 {
					color: var(--pink);
					font-family: Arial;
				}

				section {
					background: white;
					max-width: 600px;

					padding: 20px;
					margin: 0 auto;
					position: relative;
				  top: 50%;
				  transform: translateY(-50%);

				}

				input {
					border: none;
					padding: 6px;
					width: 100%;
					border-bottom: 1px solid var(--pink);
					outline: none;
					margin-bottom: 20px;
				}

				input:focus {
					border-bottom: 2px solid var(--pink);
					margin-bottom: 19px;
				}

				img {
					width: 100%;
				}

				a {
					outline: none;
				}

				#button {
					background: white;
					width: 30px;
					border-radius: 2px;
					padding: 5px;
					position: fixed;
					top: 15px;
					right: 15px;
				}

				h1 {
					margin: 0;
					margin-bottom: 20px;
				}
			</style>


			<section>
				<h1>Pawsome Valentine's Image Generator</h1>

				<div>
					<input placeholder='type in a cute phrase plz' on-change=${e => {
						this.text = e.target.value.toUpperCase();
						this.generateImage();
					}}></input>
				</div>

				<a href='${picture}' id='button' download>
					<img src='https://storage.googleapis.com/material-icons/external-assets/v4/icons/svg/ic_file_download_black_24px.svg'></img>
				</a>

				<img src='${picture}'></img>
			</section>


    `;
  }

}

customElements.define('app-shell', AppShell);
