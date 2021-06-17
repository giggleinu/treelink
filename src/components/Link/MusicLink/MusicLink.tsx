import React, { FunctionComponent, useState } from 'react';

import AppleMusic from '@assets/icons/apple-music.svg';
import Arrow from '@assets/icons/arrow.svg';
import ExpandableLink from '@/components/ExpandableLink';
import { ILink } from '@types';
import { MusicPlatform } from '@enums';
import SoundCloud from '@assets/icons/soundcloud.svg';
import Spotify from '@assets/icons/spotify.svg';
import styles from './MusicLink.styles';

export interface MusicLinkProps {
	/** Title of link */
	title: string;

	/** Bg colour of link button */
	bgColor?: string;

	/** Fg color (text, icons) of link button */
	fgColor?: string;

	/** Song platforms list */
	platforms: ILink.SongPlatform[];
}

// TODO: Create content folder for UI content mapping
const platformIcon = {
	[MusicPlatform.SPOTIFY]: <Spotify />,
	[MusicPlatform.APPLE_MUSIC]: <AppleMusic />,
	[MusicPlatform.SOUNDCLOUD]: <SoundCloud />,
};

const platformPrettyName = {
	[MusicPlatform.SPOTIFY]: 'Spotify',
	[MusicPlatform.APPLE_MUSIC]: 'Apple Music',
	[MusicPlatform.SOUNDCLOUD]: 'Sound Cloud',
};

/**
 * Shows Link component
 */
const MusicLink: FunctionComponent<MusicLinkProps> = ({ title, bgColor, fgColor, platforms }) => {
	const [selectedPlayer, setSelectedPlayer] = useState<MusicPlatform>();

	const expandedContent = (
		<div css={styles} className="expanded-content" data-testid="music-panel">
			{/* TODO: MUSIC Player iframe */}
			{selectedPlayer && <div style={{ padding: 20 }}>Music player: {selectedPlayer}</div>}
			{platforms.map(platform => (
				<div key={`${platform.name}`} className="platform-item">
					<a className="platform-icon" href={platform.url}>
						{platformIcon[platform.name as MusicPlatform]}
					</a>
					<button className="platform-player" onClick={() => setSelectedPlayer(platform.name)}>
						<div className="platform-name">{platformPrettyName[platform.name as MusicPlatform]}</div>
						<span className="cta">
							<Arrow />
						</span>
					</button>
				</div>
			))}
		</div>
	);

	return (
		<ExpandableLink
			title={title}
			expandedContent={expandedContent}
			bgColor={bgColor}
			fgColor={fgColor}
			data-testid="music"
		/>
	);
};

export default MusicLink;
