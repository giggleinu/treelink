import React, { FunctionComponent } from 'react';

import styles from './Link.styles';

export interface LinkProps {
	type?: string;
}

/**
 * Base component for Link
 */
const Link: FunctionComponent<LinkProps> = ({ type }) => {
	return <div css={styles}>Link </div>;
};

export default Link;
