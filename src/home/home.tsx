import React, { useContext } from 'react'
import { Icon, Text, FontSizes, ChoiceGroup } from 'office-ui-fabric-react'
import { GameStateContext } from '../game-context';
import { GameMode } from '../games/game-mode';

export const Home = () => {
    const { gameMode, setCurrentGameMode } = useContext(GameStateContext)

    const { playerCount, setNewPlayerCount } = useContext(GameStateContext);

    const gameModeSelected = (option: GameMode): void => {
        setCurrentGameMode(option);
    }

    return (
        <div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr' }}>

                {/* PLAYERCOUNT */}
                <div>
                    <div>
                        <Text variant="xLarge">Player count:</Text>
                    </div>
                    <div>
                        <Icon styles={{ root: { fontSize: FontSizes.mega } }} iconName={"Contact"}></Icon>
                    </div>
                    <div>
                        <Icon onClick={() => { setNewPlayerCount(playerCount + 1) }} style={{ userSelect: 'none', fontSize: FontSizes.mega, cursor: 'pointer' }} iconName={"ChevronUp"}></Icon>
                    </div>
                    <Text variant="mega">{playerCount}</Text>
                    <div>
                        <Icon onClick={() => { setNewPlayerCount(playerCount - 1) }} style={{ userSelect: 'none', fontSize: FontSizes.mega, cursor: 'pointer' }} iconName={"ChevronDown"}></Icon>
                    </div>
                </div>

                {/* GAME MODE */}
                <div>
                    <Text variant="xLarge">Game mode:</Text>
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
                
                {/* GAME CONFIG */}
            </div>
        </div>
    )
}
