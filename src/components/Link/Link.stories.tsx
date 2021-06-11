import Link, { LinkProps } from './Link';
import { Meta, Story } from '@storybook/react';

export default {
	title: 'Link',
	component: Link,
	argTypes: {
		color: { control: 'color' },
	},
} as Meta;

const Template: Story<LinkProps> = args => <Link {...args} />;

export const Basic = Template.bind({});
Basic.args = {
	type: 'Basic',
	color: 'pink',
};
