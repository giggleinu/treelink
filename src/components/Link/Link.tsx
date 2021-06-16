import { ILink, ProfileTheme } from '@types';
import React, { FunctionComponent, useState } from 'react';

import ClassicLink from '@/components/Link/ClassicLink';
import { LinkType } from '@enums';
import ShowsLink from '@/components/Link/ShowsLink';

export interface LinkProps {
	/** Link data object */
	data: ILink.Link;

	/** Profile Theme colours */
	theme: ProfileTheme;
}

/**
 * Link wrapper component which returns
 * a different link component depending on link type
 */
const Link: FunctionComponent<LinkProps> = ({ data, theme }) => {
	let link;
	const { title } = data;

	const { linkFgColor, linkBgColor } = theme || {};

	switch (data.type) {
		case LinkType.CLASSIC:
			const { url } = data;
			link = <ClassicLink title={title} url={url} fgColor={linkFgColor} bgColor={linkBgColor} />;
			break;
		case LinkType.SHOWS:
			const { shows } = data;
			link = <ShowsLink title={title} fgColor={linkFgColor} bgColor={linkBgColor} shows={shows} />;
			break;

		default:
			break;
	}
	return <>{link}</>;
};

export default Link;
