import { SerializedStyles, css } from '@emotion/react';

const styles = (bgColor?: string, fgColor?: string): SerializedStyles => css`
	margin-bottom: 16px;

	.link {
		color: ${fgColor || `#263238`};
		text-align: center;
		width: 100%;
		transition: ease-in-out 0.25s;

		a {
			background: ${bgColor || `#39E09B`};
			color: ${fgColor};
			font-size: 16px;
			width: 100%;
			height: 100%;
			display: block;
			padding: 20px;
			border-radius: 4px;
		}

		&:hover,
		&:focus {
			filter: invert(100%);
			transition: ease-in-out 0.25s;
		}
	}
`;
export default styles;
