import { SerializedStyles, css } from '@emotion/react';

const styles = (bgColor: string, fgColor: string): SerializedStyles => css`
	.link {
		background: ${bgColor};
		color: ${fgColor};
		border-radius: 4px;
		padding: 12px;
		margin-bottom: 10px;
		text-align: center;
		width: 100%;
		cursor: pointer;
		transition: ease-in-out 0.25s;

		a {
			color: ${fgColor};
			text-decoration: none;
			font-size: 16px;
		}

		&:hover,
		&:focus {
			filter: invert(100%);
			transition: ease-in-out 0.25s;
		}
	}
`;
export default styles;
