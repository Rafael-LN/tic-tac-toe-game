export type Board = Array<Array<BoardCell>>

export enum CellColor {
    DARK = 'dark',
    BRIGHT = 'bright',
    EMPTY = 'empty',
}

export interface BoardCell {
    value: BoardValues
    color: CellColor
}

export enum BoardValues {
    X = 'X',
    O = 'O',
    EMPTY = 'E',
}

export enum GameStatus {
    START = 'start',
    WIN = 'win',
    DRAW = 'draw',
    END = 'end',
}

export interface Cell {
    row: number
    col: number
}

export interface Score {
    [BoardValues.O]: number
    [BoardValues.X]: number
}

export interface Moves {
    rows: Array<number>
    cols: Array<number>
    rightDiagonal: Array<number>
    leftDiagonal: Array<number>
}

export interface PlayerMoves {
    [BoardValues.X]: Moves
    [BoardValues.O]: Moves
    [BoardValues.EMPTY]: Moves
}

export interface BoardProps {
    board: Board
    setBoard: (board: Board) => void
    status: GameStatus
    setStatus: (status: GameStatus) => void
    score: Score
    setScore: (score: Score) => void
    history: Array<string>
    setHistory: (score: Array<string>) => void
    player: BoardValues
    setPlayer: (player: BoardValues) => void
    playerMoves: PlayerMoves
    setPlayerMoves: (playerMoves: PlayerMoves) => void
    winnerCells: Array<Cell>
    setWinnerCells: (winnerCells: Array<Cell>) => void
    resetBoard: () => void
    isDraw: boolean
    isWinner: () => boolean
    endGame: () => void
}
