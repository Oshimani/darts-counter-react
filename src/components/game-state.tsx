import React from 'react'
import { App } from '../App'
import { GameStateContext, useGameState } from '../game-context'

export const GameState = () => {
    const gameState = useGameState();

    return (
        <GameStateContext.Provider value={gameState}>
            <App />
        </GameStateContext.Provider>
    )
}
