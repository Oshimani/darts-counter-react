import React, { useContext } from 'react'
import { Counter } from './counter'
import { Text } from 'office-ui-fabric-react'
import { GameStateContext } from '../game-context';

const POSSIBLE_SCORES: Array<number | 'Bull' | 'Miss'> = ['Bull', 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 'Miss'];

export const CounterTable = () => {
    const { currentPlayer } = useContext(GameStateContext);

    const scoreClicked = (score: number, multiplier: number) => {
        console.log(`Event bubbled to me! ${score} ${multiplier}`);

    };

    return (
        <div>
            <Text variant="xxLarge">{currentPlayer.name}'s turn</Text>
            {POSSIBLE_SCORES.map((score: number | 'Bull' | 'Miss') => {
                return (
                    <Counter key={score} onScoreClicked={(score: number, multiplier: number) => { scoreClicked(score, multiplier) }} value={score}></Counter>
                )
            })
            }
        </div >
    )
}
