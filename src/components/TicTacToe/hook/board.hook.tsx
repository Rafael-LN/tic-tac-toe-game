import { createContext, FC, useState } from "react";
import { noop } from "lodash";
import { Board, BoardProps, Cell, GameStatus, PlayerContainers } from "../model/tic-tac-toe.model";
import { defaultScore, firstPlayer, containers } from "../model/tic-tac-toe.default";

const defaultValues: BoardProps = {
    board: [],
    setBoard: noop,
    status: GameStatus.START,
    setStatus: noop,
    score: defaultScore,
    setScore: noop,
    history: [],
    setHistory: noop,
    player: firstPlayer,
    setPlayer: noop,
    playerContainers: containers,
    setPlayerContainers: noop,
    winnerCells: [],
    setWinnerCells: noop
}

export const BoardContext = createContext<BoardProps>(defaultValues);

export const BoardProvider: FC = ({ children }) => {
    const [board, setBoard] = useState<Board>([]);
    const [status, setStatus] = useState(GameStatus.START);
    const [score, setScore] = useState(defaultScore);
    const [history, setHistory] = useState<Array<string>>([]);
    const [player, setPlayer] = useState(firstPlayer);
    const [playerContainers, setPlayerContainers] = useState<PlayerContainers>(containers);
    const [winnerCells, setWinnerCells] = useState<Array<Cell>>([]);

    const boardContext = {
        board,
        setBoard,
        status,
        setStatus,
        score,
        setScore,
        history,
        setHistory,
        player,
        setPlayer,
        playerContainers,
        setPlayerContainers,
        winnerCells,
        setWinnerCells
    };

    return <BoardContext.Provider value={boardContext}>
        {children}
    </BoardContext.Provider>
}