import React from 'react'
import { Text, Stack, StackItem, DefaultButton, PrimaryButton } from "office-ui-fabric-react";

export const Game301 = () => {
    return (
        <div>
            <Text variant="xxLarge">Game 301</Text>
            <Stack >
                <div>
                    <Text variant="xLarge" styles={{ root: { marginRight: 8 } }}>20</Text>
                    <DefaultButton styles={{ root: { margin: 2 } }}>1x</DefaultButton>
                    <DefaultButton styles={{ root: { margin: 2 } }}>2x</DefaultButton>
                    <PrimaryButton styles={{ root: { margin: 2 } }}>3x</PrimaryButton>
                </div>
                <Text variant="xLarge">19</Text>
                <Text variant="xLarge">18</Text>
                <Text variant="xLarge">17</Text>
                <Text variant="xLarge">16</Text>
                <Text variant="xLarge">15</Text>
                <Text variant="xLarge">14</Text>
                <Text variant="xLarge">13</Text>
                <Text variant="xLarge">12</Text>
                <Text variant="xLarge">11</Text>
                <Text variant="xLarge">10</Text>
            </Stack>
        </div>
    )
}
