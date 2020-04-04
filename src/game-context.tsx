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

    numberOfLegs: number;
    setGameRule_NumberOfLegs: (count: number) => void;

    // players
    players: Array<IPlayer>;
    addPlayer: (newPlayer: IPlayer) => void;
    removePlayer: (id: number) => void;

    // game state
    currentPlayerIndex: number;
    setGameState_NextPlayer: () => void;

    // current player's turn
    currentDart: 1 | 2 | 3;
    setgameState_NextDart: () => void;
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

    numberOfLegs: 1,
    setGameRule_NumberOfLegs: () => { },

    players: new Array<IPlayer>(),
    addPlayer: () => { },
    removePlayer: () => { },

    currentPlayerIndex: -1,
    setGameState_NextPlayer: () => { },

    currentDart: 1,
    setgameState_NextDart: () => { }
}

export const GameStateContext = createContext<IGameState>(DEFAULT_GAME_STATE);

export const useGameState = (): IGameState => {
    // game mode
    const [gameMode, setGameMode] = useState<GameMode>(GameMode.X01);
    const setGameRule_Mode = useCallback((gameMode: GameMode): void => {
        console.log(`[GAMESETTING] Current game mode => ${gameMode}`);
        setGameMode(gameMode);
    }, [])

    //#region GAME SETTINGS
    // game settings

    // start score
    const [startScore, setStartScore] = useState<number>(301);
    const setGameRule_StartScore = useCallback((startScore: number): void => {
        console.log(`[GAMESETTING] StartScore => ${startScore}`);
        setStartScore(startScore);
    }, []);

    //check in
    const [checkIn, setCheckIn] = useState<CheckOut>(CheckOut.Straight);
    const setGameRule_CheckIn = useCallback((variant: CheckOut): void => {
        console.log(`[GAMESETTING] CheckIn => ${variant}`);
        setCheckIn(variant);
    }, []);

    //check out
    const [checkOut, setCheckOut] = useState<CheckOut>(CheckOut.Double);
    const setGameRule_CheckOut = useCallback((variant: CheckOut): void => {
        console.log(`[GAMESETTING] CheckOut => ${variant}`);
        setCheckOut(variant);
    }, []);

    // number of legs
    const [numberOfLegs, setNumberOfLegs] = useState<number>(1);
    const setGameRule_NumberOfLegs = useCallback((count: number): void => {
        console.log(`[GAMESETTING] Number of legs => ${count}`);
        setNumberOfLegs(count);
    }, []);

    //#endregion

    //#region PLAYERS
    // players
    const [players, setPlayers] = useState([
        { name: 'Player 1', id: Number(Math.random().toFixed(7).substring(2, 8)) } as IPlayer,
        { name: 'Player 2', id: Number(Math.random().toFixed(7).substring(2, 8)) } as IPlayer
    ]);

    // add player
    const addPlayer = useCallback(
        (newPlayer: IPlayer): void => {
            console.log(`[GAMESTATE] Player added => ${newPlayer.name}`);
            // add missing propeties
            if (!newPlayer.id) newPlayer.id = Number(Math.random().toFixed(7).substring(2, 8));
            if (!newPlayer.name) newPlayer.name = `Player ${newPlayer.id}`;
            setPlayers([...players, newPlayer]);
        }, [players]);

    // remove player
    const removePlayer = useCallback(
        (id: number) => {
            console.log(`[GAMESTATE] Player removed => ${id}`);
            setPlayers(players.filter((player: IPlayer) => player.id !== id));
        },
        [players]);
    //#endregion

    // game state

    // current player
    const [currentPlayerIndex, setCurrentPlayerIndex] = useState<number>(-1);
    const setGameState_NextPlayer = useCallback((): void => {
        const nextPlayerIndex: number = currentPlayerIndex + 1 < players.length ? currentPlayerIndex + 1 : 0;
        setCurrentPlayerIndex(nextPlayerIndex);
        console.log(`[GAMESTATE] Current player is now => ${players[nextPlayerIndex]?.name}`);
    }, [players, currentPlayerIndex]);

    // current dart
    const [currentDart, setCurrentDart] = useState<1 | 2 | 3>(1);
    const setgameState_CurrentDart = useCallback((): void => {
        if (currentDart === 3) setCurrentDart(1);
        else setCurrentDart((currentDart + 1) as 1 | 2 | 3);
        console.log(`[GAMESTATE] Current dart is now => ${currentDart}`);
        
    }, [currentDart]);


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

        numberOfLegs,
        setGameRule_NumberOfLegs,

        // players
        players,
        addPlayer,
        removePlayer,

        // game state
        currentPlayerIndex,
        setGameState_NextPlayer,

        currentDart,
        setgameState_NextDart: setgameState_CurrentDart
    };
}
