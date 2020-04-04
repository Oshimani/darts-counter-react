import React, { useContext } from 'react'
import { Stack, Text } from "office-ui-fabric-react";
import { CounterTable } from '../../components/counter-table';
import { PlayerScore } from '../../components/player-score';
import { GameStateContext } from '../../game-context';
import { IPlayer } from '../../models/game-models';
import { Link } from 'react-router-dom';

export const GameX01 = () => {

    const { players, currentPlayerIndex } = useContext(GameStateContext)

    return (
        <div>
            {players.length > 0 && currentPlayerIndex > -1 ?
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
                // IF PLAYERS ARRAY IS EMPTY
                : <div style={{ textAlign: 'center', paddingTop: '50%' }}>
                    <div>
                        <Text variant="xLarge">your game could not be started or restored</Text>
                    </div>
                    <Link to="/"><Text variant="xxLarge">Go to home</Text></Link>
                </div>
            }
        </div>
    )
}
