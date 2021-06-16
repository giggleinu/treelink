import ClassicLink, { ClassicLinkProps } from './ClassicLink';
import { Meta, Story } from '@storybook/react';

export default {
	title: 'ClassicLink',
	component: ClassicLink,
	argTypes: {
		bgColor: { control: 'color' },
		fgColor: { control: 'color' },
	},
} as Meta;

const Template: Story<ClassicLinkProps> = args => <ClassicLink {...args} />;

export const Default = Template.bind({});
Default.args = {
	title: 'My Website',
	url: 'www.google.com.au',
};
