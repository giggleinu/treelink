import { Meta, Story } from '@storybook/react';
import MusicLink, { MusicLinkProps } from './MusicLink';

export default {
	title: 'MusicLink',
	component: MusicLink,
	argTypes: {
		bgColor: { control: 'color' },
		fgColor: { control: 'color' },
	},
} as Meta;

const Template: Story<MusicLinkProps> = args => <MusicLink {...args} />;

export const Default = Template.bind({});
Default.args = {
	title: 'Music',
	platforms: [
		{
			name: 'SPOTIFY',
			src: 'https://open.spotify.com/embed/track/0juMU08O9byWiRBtKM1j5E',
			url: 'https://www.spotify.com',
		},
		{
			name: 'APPLE_MUSIC',
			src: 'https://embed.music.apple.com/us/album/circle-of-life/1445732923',
			url: 'https://www.music.apple.com',
		},
		{
			name: 'SOUNDCLOUD',
			src: 'https://embed.music.apple.com/us/album/circle-of-life/1445732923',
			url: 'https://www.music.apple.com',
		},
	],
};
