import React from 'react'
import { Text, Stack, StackItem, DefaultButton, PrimaryButton } from "office-ui-fabric-react";
import { Counter } from '../../components/counter';
import { CounterTable } from '../../components/counter-table';
import { PlayerScore } from '../../components/player-score';

export const Game301 = () => {

    const pco1 = {
        first: {
            value: 20,
            multiplier: 3
        },
        second: {
            value: 20,
            multiplier: 3
        },
        third: {
            value: 2,
            multiplier: 2
        }
    }
    const pco2 = {
        first: {
            value: 20,
            multiplier: 3
        },
        second: {
            value: 18,
            multiplier: 2
        }
    }

    return (
        <div>
            <div style={{ width: '66.66%', float: 'left' }}>
                <Stack horizontal wrap tokens={{ childrenGap: 12 }} verticalFill>

                    <PlayerScore name="Jannick" currentlyPlaying={true} score={201} averageScore={40.1} dartsThrown={15} possibleCheckout={pco1} ></PlayerScore>
                    <PlayerScore name="Felix Kai Zwetsch" currentlyPlaying={false} score={21} averageScore={40.1} dartsThrown={15} ></PlayerScore>

                    <PlayerScore name="Christoph Dörr" currentlyPlaying={false} score={155} averageScore={40.1} dartsThrown={15} possibleCheckout={pco2} ></PlayerScore>
                    <PlayerScore name="Christoph Johannes Gutenberg" currentlyPlaying={true} score={155} averageScore={40.1} dartsThrown={15} ></PlayerScore>
                    <PlayerScore name="Christoph" currentlyPlaying={false} score={155} averageScore={40.1} dartsThrown={15} ></PlayerScore>
                </Stack>
            </div>
            <div style={{ width: '33.33%', float: "right" }}>
                <CounterTable></CounterTable>
            </div>
        </div>
    )
}
