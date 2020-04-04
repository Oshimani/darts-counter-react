import React, { useContext, useState, useEffect } from 'react'
import { Text, Persona, Icon, Stack, getTheme } from "office-ui-fabric-react";
import { Card } from "@uifabric/react-cards";
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';
import { GameStateContext } from '../game-context';

export const PlayerScore = (props: {
    name: string,
    currentlyPlaying: boolean,
    score: number,
    dartsThrown: number,
    averageScore: number,
    possibleCheckout?: {
        first: {
            value: number,
            multiplier: number
        },
        second?: {
            value: number,
            multiplier: number
        },
        third?: {
            value: number,
            multiplier: number
        }
    }
}) => {

    const { currentPlayerIndex, players } = useContext(GameStateContext);
    const [isActivePlayer, setIsActivePlayer] = useState<boolean>(false);

    useEffect(() => {
        if (players[currentPlayerIndex].name === props.name)
            setIsActivePlayer(true);
        else setIsActivePlayer(false);
    }, [currentPlayerIndex])

    const s_possibleCheckoutStyles: React.CSSProperties = {
        boxShadow: Depths.depth8,
        paddingTop: 8,
        paddingBottom: 8,
        backgroundColor: getTheme().palette.themeTertiary,
        color: getTheme().palette.white,
        width: '33.33%'
    };

    return (
        <div>
            <Card tokens={{ childrenMargin: 12, padding: 4 }} styles={{
                root: {
                    backgroundColor: isActivePlayer ? getTheme().palette.themePrimary : getTheme().palette.white,
                    height: '100%',
                    color: isActivePlayer ? getTheme().palette.white : getTheme().palette.black
                },

            }}>
                <Card.Item>
                    <Stack horizontal verticalAlign="baseline">
                        <Persona text={props.name} secondaryText={`Thrown: ${props.dartsThrown}`} styles={{
                            primaryText: { color: isActivePlayer ? getTheme().palette.white : getTheme().palette.black },
                            secondaryText: { color: isActivePlayer ? getTheme().palette.white : getTheme().palette.black }
                        }} />
                        {/* SPACER */}
                        <Stack.Item grow={1}><span></span></Stack.Item>
                        <Icon iconName="Edit"></Icon>
                    </Stack>
                </Card.Item>
                <Card.Section>
                    <Text variant="xxLargePlus">
                        {props.score}
                    </Text>
                </Card.Section>
                <Card.Section>
                    <Text variant="medium" styles={{ root: { textAlign: 'left' } }}>{
                        props.possibleCheckout ? 'Possible Checkout' : 'No checkout possible'
                    }</Text>
                    {props.possibleCheckout &&
                        <Stack horizontal verticalFill tokens={{ childrenGap: 4 }}>
                            <div style={s_possibleCheckoutStyles}>{props.possibleCheckout.first.value}x{props.possibleCheckout.first.multiplier}</div>
                            {props.possibleCheckout.second &&
                                <div style={s_possibleCheckoutStyles}>{props.possibleCheckout.second.value}x{props.possibleCheckout.second.multiplier}</div>
                            }
                            {props.possibleCheckout.third &&
                                <div style={s_possibleCheckoutStyles}>{props.possibleCheckout.third.value}x{props.possibleCheckout.third.multiplier}</div>
                            }
                        </Stack>
                    }
                </Card.Section>
            </Card>
        </div >
    )
}
