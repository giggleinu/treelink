import React, { FunctionComponent, useState } from 'react';

import Arrow from '@assets/icons/arrow.svg';
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
	const [expanded, setExpanded] = useState<boolean>(false);

	const isExpanded = expanded ? 'is-expanded' : '';

	return (
		<div css={styles(bgColor, fgColor)}>
			<div className="link">
				<button title={title} onClick={() => setExpanded(!expanded)}>
					{title}
				</button>
			</div>
			<div className={`link-panel ${isExpanded}`}>
				{shows.map(show => (
					<a href={show.url} className="show-item">
						<div className="show-info">
							<p className="date">{show.date}</p>
							<p className="location">{show.location}</p>
						</div>
						<span className="cta">{show.isSoldOut ? 'Sold out' : <Arrow />}</span>
					</a>
				))}
				{/* TODO: Replace text with SongKick logo */}
				<div className="link-footer">Songkick</div>
			</div>
		</div>
	);
};

export default ShowsLink;
