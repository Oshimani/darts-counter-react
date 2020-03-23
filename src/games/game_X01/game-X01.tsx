import React, { useContext } from 'react'
import { Stack } from "office-ui-fabric-react";
import { CounterTable } from '../../components/counter-table';
import { PlayerScore } from '../../components/player-score';
import { GameStateContext } from '../../game-context';
import { IPlayer } from '../../models/game-models';

export const GameX01 = () => {

    const { players } = useContext(GameStateContext)


    return (
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 12 }}>
            <div>
                <Stack horizontal wrap tokens={{ childrenGap: 12 }} >

                    {
                        players.map((player: IPlayer) => {
                            return (
                                <PlayerScore currentlyPlaying={false}
                                    key={player.id}
                                    name={player.name}
                                    score={player.score}
                                    averageScore={player.average}
                                    dartsThrown={player.dartsThrown} />
                            )
                        })
                    }
                </Stack>
            </div>
            <div>
                <CounterTable></CounterTable>
            </div>
        </div>
    )
}
