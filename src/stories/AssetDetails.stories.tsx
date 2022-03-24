import { ComponentMeta, ComponentStory } from '@storybook/react'

import { AssetDetails } from '../pages/AssetDetails'

export default {
    title: 'Example/Asset Details',
    component: AssetDetails,
    parameters: {},
} as ComponentMeta<typeof AssetDetails>

const Template: ComponentStory<typeof AssetDetails> = args => <AssetDetails {...args} />

export const Main = Template.bind({})
