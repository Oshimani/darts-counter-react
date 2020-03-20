import React, { useContext, useState, createRef } from 'react'
import { Icon, Text, FontSizes, ChoiceGroup, getTheme, TextField, Stack, IconButton } from 'office-ui-fabric-react'
import { GameStateContext } from '../game-context';
import { GameMode } from '../games/game-mode';
import { GameConfigX01 } from '../games/game_X01/game-config-X01';
import { GameConfigRTC } from '../games/game-rtc/game-config-rtc';
import { IPlayer } from '../models/game-models';

export const Home = () => {
    const { players, addPlayer, removePlayer,
        gameMode, setGameRule_Mode } = useContext(GameStateContext);
    const [newPlayerName, setNewPlayerName] = useState<string>('');

    const newPlayerComponentRef = createRef<any>();

    const gameModeSelected = (option: GameMode): void => {
        setGameRule_Mode(option);
    }

    const addNewPlayer = (): void => {
        addPlayer({ name: newPlayerName } as IPlayer);

        // reset new player field
        setNewPlayerName('');
        newPlayerComponentRef.current.focus();
    }

    const clickedRemovePlayer = (id: number): void => {
        removePlayer(id);
    }

    const keyPressOnNewPlayerName = (event: any): void => {
        const code = (event.keyCode ? event.keyCode : event.which)
        if (code === 13)
            addNewPlayer();
    }

    //#region STYLES 
    const s_headerStyles: React.CSSProperties = {
        borderBottom: `solid 3px ${getTheme().palette.themePrimary}`,
        marginBottom: 4
    };
    //#endregion

    return (
        <div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>

                {/* PLAYERCOUNT */}
                <div>
                    <div style={s_headerStyles}>
                        <Text variant="xLarge">Players:</Text>
                    </div>

                    <div>
                        {/* NEW PLAYER INPUT */}
                        <Stack horizontal>
                            <Stack.Item grow>
                                <TextField componentRef={newPlayerComponentRef}
                                    value={newPlayerName}
                                    onChange={(e, newValue) => { setNewPlayerName(String(newValue)) }}
                                    onKeyPress={(e) => keyPressOnNewPlayerName(e)}
                                    placeholder="Add new player" />
                            </Stack.Item>
                            <IconButton onClick={() => { addNewPlayer() }} iconProps={{ iconName: "Add" }} />
                        </Stack>

                        {/* PLAYERS LIST */}
                        {players.map((player: IPlayer, index: number) => {
                            return (
                                <div key={player.id}>
                                    <Stack horizontal style={{ marginTop: 4 }}>
                                        <Stack.Item grow>
                                            <Text variant="large">{index + 1}) {player.name}</Text>
                                        </Stack.Item>
                                        <IconButton onClick={() => { clickedRemovePlayer(player.id) }} iconProps={{ iconName: "Trash" }} />
                                    </Stack>
                                </div>
                            );
                        })
                        }
                    </div>
                </div>

                {/* GAME MODE */}
                <div>
                    <div style={s_headerStyles}>
                        <Text variant="xLarge">Game mode:</Text>
                    </div>
                    <ChoiceGroup selectedKey={gameMode} onChange={(e, option) => { gameModeSelected(option!.key as GameMode) }} options={[
                        {
                            key: GameMode.X01,
                            text: 'X01',
                            iconProps: {
                                iconName: 'ClipboardSolid'
                            }
                        },
                        {
                            key: GameMode.RoundTheClock,
                            text: 'Round the Clock',
                            iconProps: {
                                iconName: 'History'
                            },
                            disabled: false
                        },
                        {
                            key: GameMode.HighHouseNumber,
                            text: 'High House Number',
                            iconProps: {
                                iconName: 'HomeSolid'
                            },
                            disabled: true
                        },
                        {
                            key: GameMode.LowHouseNumber,
                            text: 'Low House Number',
                            iconProps: {
                                iconName: 'Home'
                            },
                            disabled: true
                        }
                    ]}></ChoiceGroup>
                </div>

            </div>
            {/* GAME CONFIG */}
            <div style={s_headerStyles}>
                <Text variant="xLarge">Configuration:</Text>
            </div>
            {/* CONFIG X01 */}
            {gameMode === GameMode.X01 &&
                <GameConfigX01></GameConfigX01>
            }

            {/* CONFIG RTC */}
            {gameMode === GameMode.RoundTheClock &&
                <GameConfigRTC></GameConfigRTC>
            }
        </div>
    )
}
