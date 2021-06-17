import React, { FunctionComponent } from 'react';

import Arrow from '@assets/icons/arrow.svg';
import ExpandableLink from '@/components/ExpandableLink';
import { ILink } from '@types';

export interface ShowsLinkProps {
	/** Title of link */
	title: string;

	/** Bg colour of link button */
	bgColor?: string;

	/** Fg color (text, icons) of link button */
	fgColor?: string;

	/** Shows list */
	shows?: ILink.Show[];
}

/**
 * Shows Link component
 */
const ShowsLink: FunctionComponent<ShowsLinkProps> = ({ title, bgColor, fgColor, shows }) => {
	const expandedContent = (
		<div className="expanded-content" data-testid="shows-panel">
			{shows?.map(show => (
				<a key={`${show.date}-${show.location}`} href={show.url} className="show-item">
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
	);

	return <ExpandableLink title={title} expandedContent={expandedContent} bgColor={bgColor} fgColor={fgColor} />;
};

export default ShowsLink;
