import { Meta, Story } from '@storybook/react';
import ShowsLink, { ShowsLinkProps } from './ShowsLink';

export default {
	title: 'ShowsLink',
	component: ShowsLink,
	argTypes: {
		bgColor: { control: 'color' },
		fgColor: { control: 'color' },
	},
} as Meta;

const Template: Story<ShowsLinkProps> = args => <ShowsLink {...args} />;

export const Default = Template.bind({});
Default.args = {
	title: 'Upcoming Shows',
	shows: [
		{
			date: 'Jul 14 2021',
			location: 'The Forum, Melbourne',
			isSoldOut: false,
			url: 'https://www.songkick.com/',
		},
		{
			date: 'Jul 15 2021',
			location: 'Venue Name, Canberra',
			isSoldOut: false,
			url: 'https://www.songkick.com/',
		},
		{
			date: 'Jul 16 2021',
			location: 'The Pavilion, Sydney',
			isSoldOut: true,
			url: 'https://www.songkick.com/',
		},
	],
};
