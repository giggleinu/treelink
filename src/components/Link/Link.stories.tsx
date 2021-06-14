import Link, { LinkProps } from './Link';
import { Meta, Story } from '@storybook/react';

import { LinkType } from '@enums';
import mockLinks from '../../data/links.json';

export default {
	title: 'Link',
	component: Link,
	argTypes: {
		color: { control: 'color' },
	},
} as Meta;

const Template: Story<LinkProps> = args => <Link {...args} />;

export const Classic = Template.bind({});
Classic.args = {
	type: LinkType.CLASSIC,
	color: 'pink',
};
