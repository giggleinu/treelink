import { SerializedStyles, css } from '@emotion/react';

const styles = (bgColor: string, fgColor: string): SerializedStyles => css`
	margin-bottom: 16px;

	.link {
		color: ${fgColor};
		text-align: center;
		width: 100%;
		transition: ease-in-out 0.25s;

		a,
		button {
			background: ${bgColor};
			color: ${fgColor};
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

	/* TODO: Replace hardcoded colour values from profile theme */
	.link-panel {
		background-color: #f5f7f8;
		padding: 0 20px;
		display: none;

		&.is-expanded {
			display: block;
		}

		a.show-item {
			padding: 20px 0;
			border-bottom: 1px solid #dadee0;
			display: flex;
			justify-content: space-between;
			align-items: center;

			p {
				margin: 0;
				text-align: left;

				&.location {
					font-size: 12px;
					margin-top: 12px;
				}
			}

			.cta {
				font-size: 12px;

				svg {
					transform: rotate(-90deg);
				}
			}
		}

		.link-footer {
			padding: 20px 0;
			text-align: center;
		}
	}
`;
export default styles;
