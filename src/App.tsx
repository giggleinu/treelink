import React, { FunctionComponent } from 'react';

import AppStyles from './App.styles';
import { Global } from '@emotion/react';
import { ILink } from '@types';
import Link from '@components/Link/Link';
import links from './data/links.json';
import profile from './data/profile.json';

export const App: FunctionComponent = () => {
	// TODO: Store profile data in a global state after the data is successfully fulfilled. Prop drilling isn't too bad in this demo so we will keep it simple.
	const { theme } = profile;

	return (
		<>
			<Global styles={AppStyles} />
			<div className="profile">
				{links.map(link => {
					// TODO: Fix typing...TS doesn't like my mock data structure
					return <Link key={link.id} data={link as ILink.Link} theme={theme} />;
				})}
			</div>
		</>
	);
};
