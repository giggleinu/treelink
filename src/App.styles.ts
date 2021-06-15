import AppFonts from './App.fonts';
import { css } from '@emotion/react';

export default css`
	${AppFonts};

	#root {
		font-family: 'Karla';
	}

	html,
	body {
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
	}

	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	.profile {
		padding: 12px;
		max-width: 800px;
		margin: 0 auto;
	}
`;
