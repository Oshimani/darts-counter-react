import React from 'react'
import { DefaultButton, PrimaryButton, Text } from "office-ui-fabric-react";

export const Counter = (props: { value: number | 'Bull' | 'Miss', onScoreClicked: Function }) => {

    const clickedButton = (value: number | 'Bull' | 'Miss', multiplier: 1 | 2 | 3) => {
        if (value === 'Bull')
            value = 25;
        else if (value === 'Miss')
            value = 0;

        // bubble to score table
        props.onScoreClicked(value, multiplier);
    }


    const s_gridStyles: React.CSSProperties =
    {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, 25%)',
        gridTemplateRows: 'repeat(auto-fill, 100%)'
    };

    return (
        <div>
            {props.value === 'Miss' ?
                <div style={s_gridStyles}>
                    <DefaultButton onClick={() => { clickedButton(props.value, 1) }} style={{ margin: 2, gridColumnStart: 2, gridColumnEnd: 5 }}>Miss</DefaultButton>
                </div>
                : <div style={s_gridStyles}>
                    <Text variant="xLarge" styles={{ root: { marginRight: 8 } }}>{props.value}</Text>
                    <DefaultButton onClick={() => { clickedButton(props.value, 1) }} styles={{ root: { margin: 2 } }}>1x</DefaultButton>
                    <DefaultButton onClick={() => { clickedButton(props.value, 2) }} styles={{ root: { margin: 2 } }}>2x</DefaultButton>
                    {props.value !== 'Bull' ?
                        <PrimaryButton onClick={() => { clickedButton(props.value, 3) }} styles={{ root: { margin: 2 } }}>3x</PrimaryButton>
                        : <div></div>
                    }
                </div>
            }
        </div>
    )
}
