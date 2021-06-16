import { SerializedStyles, css } from '@emotion/react';

const styles = (bgColor: string, fgColor: string): SerializedStyles => css`
	.link {
		color: ${fgColor};
		margin-bottom: 16px;
		text-align: center;
		width: 100%;
		transition: ease-in-out 0.25s;

		a,
		button {
			background: ${bgColor};
			color: ${fgColor};
			text-decoration: none;
			font-size: 16px;
			width: 100%;
			height: 100%;
			display: block;
			padding: 20px;
			cursor: pointer;
			border-radius: 4px;
		}

		button {
			border: none;
		}

		&:hover,
		&:focus {
			filter: invert(100%);
			transition: ease-in-out 0.25s;
		}
	}
`;
export default styles;
