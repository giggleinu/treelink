import AppStyles from '../src/App.styles';
import { Global } from '@emotion/react';
import React from 'react';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

export const decorators = [
	Story => (
		<>
			<Global styles={AppStyles} />
			<Story />
		</>
	),
];
