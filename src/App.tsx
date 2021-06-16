import React, { FunctionComponent } from 'react';

import AppStyles from './App.styles';
import { Global } from '@emotion/react';
import { ILink } from '@types';
import Link from '@components/Link/Link';
import links from './data/links.json';
import profile from './data/profile.json';

export const App: FunctionComponent = () => {
	// TODO: Store profile data in a global state after the data is successfully fulfilled. Prop drilling isn't too bad in this demo so we will keep it simple.
	const { theme, id, photo } = profile;

	return (
		<>
			<Global styles={AppStyles} />
			{/* TODO: Create Profile/Bio component. */}
			<div className="profile">
				<img src={photo} />
				<h1>@{id}</h1>
				{links.map(link => {
					return <Link key={link.id} data={link as ILink.Link} theme={theme} />;
				})}
				{/* TODO: Linktree SVG Logo goes here */}
			</div>
		</>
	);
};
