export type Board = Array<Array<BoardCell>>;

export enum BoardCell {
    X = 'X',
    O = 'O',
    EMPTY = ''
}

export enum GameStatus {
    START = 'start',
    WIN = 'win',
    DRAW = 'draw',
    END = 'end'
}

export interface Cell {
    row: number
    column: number;
}

export interface Score {
    [BoardCell.O]: number;
    [BoardCell.X]: number;
}

export interface Containers {
    rows: number[];
    columns: number[];
    diagonal: number[];
    oppositeDiagonal: number[];
}

export interface PlayerContainers {
    [BoardCell.X]: Containers;
    [BoardCell.O]: Containers;
}

export interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;
    status: GameStatus;
    setStatus: (status: GameStatus) => void;
    score: Score;
    setScore: (score: Score) => void; 
    history: Array<string>;
    setHistory: (score: Array<string>) => void; 
    player: BoardCell;
    setPlayer: (player: BoardCell) => void;
    playerContainers: PlayerContainers;
    setPlayerContainers: (playerContainers: PlayerContainers) => void;
    winnerCells: Array<Cell>;
    setWinnerCells: (winnerCells: Array<Cell>) => void;
}
