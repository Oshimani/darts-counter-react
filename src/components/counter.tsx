import React from 'react'
import { DefaultButton, PrimaryButton, Text, StackItem, Stack } from "office-ui-fabric-react";

export const Counter = (props: { value: number | 'Bull' }) => {

    const clickedButton = (value: number | 'Bull', multiplier: 1 | 2 | 3) => {
        let score: number = 0;
        if (value !== 'Bull')
            score = value * multiplier;
        else
            score = 25 * multiplier;
        console.log(score);
    }

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, 25%)',
            gridTemplateRows: 'repeat(auto-fill, 100%)'
        }}>
            <Text variant="xLarge" styles={{ root: { marginRight: 8 } }}>{props.value}</Text>
            <DefaultButton onClick={() => { clickedButton(props.value, 1) }} styles={{ root: { margin: 2 } }}>1x</DefaultButton>
            <DefaultButton onClick={() => { clickedButton(props.value, 2) }} styles={{ root: { margin: 2 } }}>2x</DefaultButton>
            {props.value !== 'Bull' ?
                <PrimaryButton onClick={() => { clickedButton(props.value, 3) }} styles={{ root: { margin: 2 } }}>3x</PrimaryButton>
                : <div></div>
            }
        </div>
    )
}
