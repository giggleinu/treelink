import React, { FunctionComponent } from 'react';

import { ILink } from '@types';
import styles from '@components/Link/Link.styles';

interface ClassicLinkProps {
	title: string;
	url: string;
	bgColor: string;
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
