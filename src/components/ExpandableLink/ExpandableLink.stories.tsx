import ExpandableLink, { ExpandableLinkProps } from './ExpandableLink';
import { Meta, Story } from '@storybook/react';

import React from 'react';

export default {
	title: 'ExpandableLink',
	component: ExpandableLink,
	argTypes: {
		bgColor: { control: 'color' },
		fgColor: { control: 'color' },
	},
} as Meta;

const Template: Story<ExpandableLinkProps> = args => <ExpandableLink {...args} />;

export const Default = Template.bind({});
Default.args = {
	title: 'My Website',
	expandedContent: <div>Expandable content goes here</div>,
};
