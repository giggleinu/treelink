import React, { FunctionComponent } from 'react';

import { ILink } from '@types';
import styles from '@components/Link/Link.styles';

interface ClassicLinkProps {
	/** Title of link */
	title: string;

	/** Url destination on click of link */
	url: string;

	/** Bg colour of link button */
	bgColor: string;

	/** Fg color (text, icons) of link button */
	fgColor: string;
}

/**
 * Classic Link component
 */
const ClassicLink: FunctionComponent<ClassicLinkProps> = ({ title, url, bgColor, fgColor }) => {
	return (
		<div css={styles(bgColor, fgColor)}>
			<div className="link classic">
				<a href={url} title={title}>
					{title}
				</a>
			</div>
		</div>
	);
};

export default ClassicLink;
