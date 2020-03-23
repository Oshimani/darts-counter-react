import React, { useContext } from 'react'
import { Text, Slider, ChoiceGroup, getTheme, SpinButton } from "office-ui-fabric-react";
import { CheckOut } from '../../models/game-models';
import { GameStateContext } from '../../game-context';

export const GameConfigX01 = () => {
    const { startScore, setGameRule_StartScore,
        checkIn, setGameRule_CheckIn,
        checkOut, setGameRule_CheckOut,
        numberOfLegs, setGameRule_NumberOfLegs } = useContext(GameStateContext);

    //#region Styles
    const s_headerStyles: React.CSSProperties = {
        borderBottom: `solid 3px ${getTheme().palette.themePrimary}`,
    };
    //#endregion
    return (
        <div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>

                {/* START SCORE */}
                <div>
                    <div style={{ marginBottom: 4 }}>
                        <Text variant="large" style={s_headerStyles}>Start at:</Text>
                    </div>
                    <Slider min={101} max={1001}
                        value={startScore}
                        step={100}
                        snapToStep
                        onChange={(value) => { setGameRule_StartScore(value) }} />
                </div>

                {/* CHECK IN */}
                <div>
                    <div style={{ marginBottom: 4 }}>
                        <Text variant="large" style={s_headerStyles}>Checkin:</Text>
                    </div>
                    <ChoiceGroup selectedKey={checkIn} onChange={(e, value) => { setGameRule_CheckIn(value!.key as CheckOut) }} options={[
                        {
                            key: CheckOut.Straight,
                            text: 'Straight',
                            iconProps: {
                                iconName: 'SingleColumn'
                            }
                        },
                        {
                            key: CheckOut.Double,
                            text: 'Double',
                            iconProps: {
                                iconName: 'DoubleColumn'
                            }
                        },
                        {
                            key: CheckOut.Triple,
                            text: 'Triple',
                            iconProps: {
                                iconName: 'TripleColumn'
                            }
                        },
                    ]}></ChoiceGroup>
                </div>

                {/* LEGS */}
                <div>
                    <div style={{ marginBottom: 4 }}>
                        <Text variant="large" style={s_headerStyles}>Legs (first to x):</Text>
                    </div>
                    <SpinButton min={1} step={1}
                        value={String(numberOfLegs)}
                        onIncrement={(value: string) => { setGameRule_NumberOfLegs(Number(value) + 1) }}
                        onDecrement={(value: string) => { setGameRule_NumberOfLegs(Number(value) - 1) }} />
                </div>

                {/* CHECK OUT */}
                <div>
                    <div style={{ marginBottom: 4 }}>
                        <Text variant="large" style={s_headerStyles}>Checkout:</Text>
                    </div>
                    <ChoiceGroup selectedKey={checkOut} onChange={(e, value) => { setGameRule_CheckOut(value!.key as CheckOut) }} options={[
                        {
                            key: CheckOut.Straight,
                            text: 'Straight',
                            iconProps: {
                                iconName: 'SingleColumn'
                            }
                        },
                        {
                            key: CheckOut.Double,
                            text: 'Double',
                            iconProps: {
                                iconName: 'DoubleColumn'
                            }
                        },
                        {
                            key: CheckOut.Triple,
                            text: 'Triple',
                            iconProps: {
                                iconName: 'TripleColumn'
                            }
                        },
                    ]}></ChoiceGroup>
                </div>

            </div>
        </div>
    )
}
