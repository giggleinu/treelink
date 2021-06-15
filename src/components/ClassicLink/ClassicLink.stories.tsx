import { Meta, Story } from '@storybook/react';

import ClassicLink from './ClassicLink';
import { LinkType } from '@enums';
import mockLinks from '../../data/links.json';

export default {
	title: 'Link',
	component: ClassicLink,
	argTypes: {
		color: { control: 'color' },
	},
} as Meta;

const Template: Story = args => <ClassicLink {...args} />;

export const Classic = Template.bind({});
Classic.args = {
	type: LinkType.CLASSIC,
	color: 'pink',
};
