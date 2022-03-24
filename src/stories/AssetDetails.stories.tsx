import { ComponentMeta, ComponentStory } from '@storybook/react'

import { AssetDetails } from '../pages/AssetDetails'

export default {
    title: 'Example/Asset Details',
    component: AssetDetails,
    parameters: {},
} as ComponentMeta<typeof AssetDetails>

const Template: ComponentStory<typeof AssetDetails> = args => <AssetDetails {...args} />

export const Option1 = Template.bind({})
Option1.args = { option: 1 }

export const Option2 = Template.bind({})
Option2.args = { option: 2 }
