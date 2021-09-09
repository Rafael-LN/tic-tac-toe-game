import {
    BoardCell,
    BoardValues,
    CellColor,
    PlayerMoves,
    Score,
} from './tic-tac-toe.model'

export const maxMatches = 9

export const size = 3

export const firstPlayer = BoardValues.X

export const defaultScore: Score = {
    [BoardValues.X]: 0,
    [BoardValues.O]: 0,
}

export const players = {
    [BoardValues.X]: 1,
    [BoardValues.O]: 2,
}

export const initialMoves = (): PlayerMoves => ({
    O: {
        rows: Array<number>(size).fill(0),
        cols: Array<number>(size).fill(0),
        rightDiagonal: Array<number>(size).fill(0),
        leftDiagonal: Array<number>(size).fill(0),
    },
    X: {
        rows: Array<number>(size).fill(0),
        cols: Array<number>(size).fill(0),
        rightDiagonal: Array<number>(size).fill(0),
        leftDiagonal: Array<number>(size).fill(0),
    },
    E: {
        rows: Array<number>(size).fill(0),
        cols: Array<number>(size).fill(0),
        rightDiagonal: Array<number>(size).fill(0),
        leftDiagonal: Array<number>(size).fill(0),
    },
})

const defaultBoardCell: BoardCell = {
    value: BoardValues.EMPTY,
    color: CellColor.EMPTY,
}

export const initialBoard = (): Array<Array<BoardCell>> =>
    Array<BoardCell>(size)
        .fill(defaultBoardCell)
        .map(() => Array<BoardCell>(size).fill(defaultBoardCell))
