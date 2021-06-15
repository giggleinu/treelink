import { ILink, ProfileTheme } from '@types';
import React, { FunctionComponent } from 'react';

import ClassicLink from '@components/ClassicLink';
import { LinkType } from '@enums';

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
	const linkUrl = data && 'url' in data ? data.url : '';

	const { title } = data;

	// Default theme if no theme is returned from the API.
	const { linkFgColor = 'white', linkBgColor = '#39E09B' } = theme || {};

	switch (data.type) {
		case LinkType.CLASSIC:
			link = <ClassicLink title={title} url={linkUrl} fgColor={linkFgColor} bgColor={linkBgColor} />;
			break;
		default:
			break;
	}
	return <>{link}</>;
};

export default Link;
