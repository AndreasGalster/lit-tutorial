import { html } from './node_modules/lit-html/lib/lit-extended.js';

export const boilerplateStyles = html`
	<style>
		h1 {
			font-family: Arial;
			margin: 0;
			margin-bottom: 20px;
		}

		input {
			border: none;
			padding: 6px;
			width: 100%;
			outline: none;
			margin-bottom: 20px;
		}

		input:focus {
			margin-bottom: 19px;
		}

		a {
			outline: none;
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

		img {
			width: 100%;
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

	</style>
`;
