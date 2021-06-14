import React, { FunctionComponent } from 'react';

import AppStyles from './App.styles';
import { Global } from '@emotion/react';
import Link from './components/Link/Link';

export const App: FunctionComponent = () => (
	<>
		<Global styles={AppStyles} />
		<Link type="Basic" color="green" />
	</>
);
