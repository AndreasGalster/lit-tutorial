import {LitElement} from './node_modules/@polymer/lit-element/lit-element.js'
import { html } from './node_modules/lit-html/lib/lit-extended.js';
import { boilerplateStyles } from './boilerplate-styles.js';

class MySweetValentine extends LitElement {

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

		this.picture = 'https://res.cloudinary.com/productcafe/image/upload/v1517795469/lit-html/qwt_bunny.jpg';

	}

  render({picture,text}) {
    return html`
			${boilerplateStyles};

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
				}

				input {
					border-bottom: 1px solid var(--pink);
				}

				input:focus {
					border-bottom: 2px solid var(--pink);
				}
			</style>


			<section>
				<h1>Pawsome Valentine's Image Generator</h1>

				<input placeholder='type in a cute phrase plz' on-change=${e => {
					this.text = e.target.value.toUpperCase();
					this.generateImage();
				}}></input>

				<a href='${picture}' id='button' download>
					<img src='https://storage.googleapis.com/material-icons/external-assets/v4/icons/svg/ic_file_download_black_24px.svg'></img>
				</a>

				<img src='${picture}'></img>
			</section>


    `;
  }

}

customElements.define('my-sweet-valentine', MySweetValentine);
