import React, { FunctionComponent } from 'react';

import styles from './Link.styles';

export interface LinkProps {
	type: string;
	color: string;
}

/**
 * Base component for Link
 */
const Link: FunctionComponent<LinkProps> = ({ type, color }) => {
	return (
		<div css={styles} style={{ color: color }}>
			{type} Link Component
		</div>
	);
};

export default Link;
