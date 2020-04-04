import React, { useContext } from 'react'
import { Counter } from './counter'
import { Text } from 'office-ui-fabric-react'
import { GameStateContext } from '../game-context';

const POSSIBLE_SCORES: Array<number | 'Bull' | 'Miss'> = ['Bull', 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 'Miss'];

export const CounterTable = () => {
    const { players, currentPlayerIndex, setGameState_NextPlayer,
        currentDart, setgameState_NextDart } = useContext(GameStateContext);


    const scoreClicked = (value: number, multiplier: number) => {
        console.log(`Event bubbled to me! ${value} ${multiplier}`);
        const score: number = value * multiplier;

        // register score
        if (players[currentPlayerIndex].score - score >= 0)
            players[currentPlayerIndex].score = players[currentPlayerIndex].score - score;

        // count darts
        setgameState_NextDart();
        console.log(`Current Dart ${currentDart}`);
        
        // when 3 darts were thrown
        if (currentDart === 1)
            setGameState_NextPlayer();
    };

    return (
        <div>
            <Text variant="xxLarge">{players[currentPlayerIndex]?.name}'s turn ({currentDart})</Text>
            {POSSIBLE_SCORES.map((score: number | 'Bull' | 'Miss') => {
                return (
                    <Counter key={score} onScoreClicked={(score: number, multiplier: number) => { scoreClicked(score, multiplier) }} value={score}></Counter>
                )
            })
            }
        </div >
    )
}
