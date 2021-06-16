import React, { FunctionComponent, useState } from 'react';

import styles from './ExpandableLink.styles';

export interface ExpandableLinkProps {
	/** Title of link */
	title: string;

	/** Bg colour of link button */
	bgColor?: string;

	/** Fg color (text, icons) of link button */
	fgColor?: string;

	/** Content to be displayed on click of link button */
	expandedContent: JSX.Element;
}

/**
 * Expandable Link component
 */
const ExpandableLink: FunctionComponent<ExpandableLinkProps> = ({ title, bgColor, fgColor, expandedContent }) => {
	const [expanded, setExpanded] = useState<boolean>(false);

	const isExpanded = expanded ? ' is-expanded' : '';

	return (
		<div css={styles(fgColor, bgColor)}>
			<div className="link">
				<button title={title} onClick={() => setExpanded(!expanded)}>
					{title}
				</button>
			</div>
			{expandedContent && <div className={`link-panel${isExpanded}`}>{expandedContent}</div>}
		</div>
	);
};

export default ExpandableLink;
