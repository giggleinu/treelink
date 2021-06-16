import React, { FunctionComponent } from 'react';

import { ILink } from '@types';
import styles from '@components/Link/Link.styles';

export interface ShowsLinkProps {
	/** Title of link */
	title: string;

	/** Bg colour of link button */
	bgColor: string;

	/** Fg color (text, icons) of link button */
	fgColor: string;

	/** Shows list */
	shows: ILink.Show[];
}

/**
 * Shows Link component
 */
const ShowsLink: FunctionComponent<ShowsLinkProps> = ({ title, bgColor = '#39E09B', fgColor = 'black', shows }) => {
	console.log(shows);
	return (
		<div css={styles(bgColor, fgColor)}>
			<div className="link">
				<button title={title}>{title}</button>
			</div>
		</div>
	);
};

export default ShowsLink;
