import { SerializedStyles, css } from '@emotion/react';

const styles = (bgColor: string, fgColor: string): SerializedStyles => css`
	.link {
		background: ${bgColor};
		color: ${fgColor};
		border-radius: 4px;
		margin-bottom: 16px;
		text-align: center;
		width: 100%;
		cursor: pointer;
		transition: ease-in-out 0.25s;

		a,
		button {
			color: ${fgColor};
			text-decoration: none;
			font-size: 16px;
			width: 100%;
			height: 100%;
			display: block;
			padding: 20px;
		}

		&:hover,
		&:focus {
			filter: invert(100%);
			transition: ease-in-out 0.25s;
		}
	}
`;
export default styles;
