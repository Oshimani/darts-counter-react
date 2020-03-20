import { useState, useCallback, createContext } from "react";
import { GameMode } from "./games/game-mode";

export interface IGameState {
    // game mode
    gameMode: GameMode;
    setCurrentGameMode: (currentGameMode: GameMode) => void;

    // players
    playerCount: number;
    setNewPlayerCount: (count: number) => void;
}

export const DEFAULT_GAME_STATE: IGameState = {
    gameMode: GameMode.X01,
    setCurrentGameMode: () => { },

    playerCount: 1,
    setNewPlayerCount: () => { }
}

export const GameStateContext = createContext<IGameState>(DEFAULT_GAME_STATE);

export const useGameState = (): IGameState => {
    // game mode
    const [gameMode, setGameMode] = useState(GameMode.X01);
    const setCurrentGameMode = useCallback((currentGameMode: GameMode): void => {
        console.log(`[GAMESTATE] Current game mode => ${currentGameMode}`);
        setGameMode(currentGameMode);
    }, [])

    // player count
    const [playerCount, setPlayerCount] = useState(1);
    const setNewPlayerCount = useCallback((newPlayerCount: number): void => {
        console.log(`[GAMESTATE] Player count => ${newPlayerCount}`);
        setPlayerCount(newPlayerCount);
    }, []);

    return {
        gameMode,
        setCurrentGameMode,

        playerCount,
        setNewPlayerCount
    };
}
