import { SerializedStyles, css } from '@emotion/react';

const styles = (): SerializedStyles => css`
	.platform-item {
		display: flex;
		align-items: center;

		&:last-of-type {
			.platform-player {
				border-bottom: none;
			}
		}

		.platform-player {
			border: none;
			background-color: transparent;
			border-bottom: 1px solid #dadee0;
			width: 100%;
			display: flex;
			justify-content: space-between;
			padding: 20px 0;

			.cta {
				transform: rotate(-90deg);
			}
		}

		.platform-icon {
			opacity: 0.5;
			margin-right: 20px;
		}
	}
`;
export default styles;
