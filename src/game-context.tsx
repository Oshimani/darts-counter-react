import { useState, useCallback, createContext } from "react";
import { GameMode } from "./games/game-mode";
import { IPlayer, CheckOut } from "./models/game-models";


export interface IGameState {
    // game mode
    gameMode: GameMode;
    setGameRule_Mode: (gameMode: GameMode) => void;

    // game settings
    startScore: number;
    setGameRule_StartScore: (startScore: number) => void;

    checkIn: CheckOut;
    setGameRule_CheckIn: (variant: CheckOut) => void;

    checkOut: CheckOut;
    setGameRule_CheckOut: (variant: CheckOut) => void;


    // players
    players: Array<IPlayer>;
    addPlayer: (newPlayer: IPlayer) => void;
    removePlayer: (id: number) => void;
}

export const DEFAULT_GAME_STATE: IGameState = {
    gameMode: GameMode.X01,
    setGameRule_Mode: () => { },

    startScore: 301,
    setGameRule_StartScore: () => { },

    checkIn: CheckOut.Straight,
    setGameRule_CheckIn: () => { },

    checkOut: CheckOut.Double,
    setGameRule_CheckOut: () => { },

    players: new Array<IPlayer>(),
    addPlayer: () => { },
    removePlayer: () => { },
}

export const GameStateContext = createContext<IGameState>(DEFAULT_GAME_STATE);

export const useGameState = (): IGameState => {
    // game mode
    const [gameMode, setGameMode] = useState(GameMode.X01);
    const setGameRule_Mode = useCallback((gameMode: GameMode): void => {
        console.log(`[GAMESTATE] Current game mode => ${gameMode}`);
        setGameMode(gameMode);
    }, [])

    // game settings

    // start score
    const [startScore, setStartScore] = useState(301);
    const setGameRule_StartScore = useCallback((startScore: number): void => {
        console.log(`[GAMESTATE] StartScore => ${startScore}`);
        setStartScore(startScore);
    }, []);

    //check in
    const [checkIn, setCheckIn] = useState(CheckOut.Straight);
    const setGameRule_CheckIn = useCallback((variant: CheckOut): void => {
        console.log(`[GAMESTATE] CheckIn => ${variant}`);
        setCheckIn(variant);
    }, []);

    //check out
    const [checkOut, setCheckOut] = useState(CheckOut.Double);
    const setGameRule_CheckOut = useCallback((variant: CheckOut): void => {
        console.log(`[GAMESTATE] CheckOut => ${variant}`);
        setCheckOut(variant);
    }, [])

    // players
    const [players, setPlayers] = useState(new Array<IPlayer>());

    // add
    const addPlayer = useCallback(
        (newPlayer: IPlayer): void => {
            console.log(`[GAMESTATE] Player added => ${newPlayer.name}`);
            // add missing propeties
            if (!newPlayer.id) newPlayer.id = Number(Math.random().toFixed(7).substring(2, 8));
            if (!newPlayer.name) newPlayer.name = `Player ${newPlayer.id}`;
            setPlayers([...players, newPlayer]);
        }, [players]);

    // remove
    const removePlayer = useCallback(
        (id: number) => {
            console.log(`[GAMESTATE] Player removed => ${id}`);
            setPlayers(players.filter((player: IPlayer) => player.id !== id));
        },
        [players],
    )

    return {
        gameMode,
        setGameRule_Mode,

        // Game settings
        startScore,
        setGameRule_StartScore,

        checkIn,
        setGameRule_CheckIn,

        checkOut,
        setGameRule_CheckOut,

        // players
        players,
        addPlayer,
        removePlayer
    };
}
