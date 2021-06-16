import { render, screen } from '@testing-library/react';

import { App } from '../App';
import React from 'react';

test('On click of a ShowsLink button, a panel should expand from the Link Button', () => {
	render(<App />);

	screen.getByTitle('Upcoming Shows').click();
	expect(screen.getByTestId('shows-panel')).toBeInTheDocument();
});

test('On click of anywhere in a platform list item (except logo), the corresponsing platform audio player should display', () => {
	render(<App />);

	screen.getByTestId('music').click();
	screen.getByText('Spotify').click();

	expect(screen.getByText('SPOTIFY')).toBeInTheDocument();
});
