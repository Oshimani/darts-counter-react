import React from 'react'
import { Icon, Text, FontSizes } from 'office-ui-fabric-react'

export const Home = () => {

    return (
        <div>
            <div>
                <Text variant="xLarge">Player count:</Text>
            </div>
            <div>
                <Icon styles={{ root: { fontSize: FontSizes.mega } }} iconName={"Contact"}></Icon>
            </div>
            <div>
                <Icon styles={{ root: { fontSize: FontSizes.mega } }} iconName={"ChevronUp"}></Icon>
            </div>
            <Text variant="mega">{1}</Text>
            <div>
                <Icon styles={{ root: { fontSize: FontSizes.mega } }} iconName={"ChevronDown"}></Icon>
            </div>
        </div>
    )
}
