import React, { createContext, FC, useState } from 'react'
import { noop } from 'lodash'
import {
    Board,
    BoardProps,
    BoardValues,
    Cell,
    GameStatus,
    PlayerMoves,
} from '../model/tic-tac-toe.model'
import {
    defaultScore,
    firstPlayer,
    initialMoves,
    initialBoard,
    size,
} from '../model/tic-tac-toe.default'

const defaultValues: BoardProps = {
    board: initialBoard(),
    setBoard: noop,
    status: GameStatus.START,
    setStatus: noop,
    score: defaultScore,
    setScore: noop,
    history: [],
    setHistory: noop,
    player: firstPlayer,
    setPlayer: noop,
    playerMoves: initialMoves(),
    setPlayerMoves: noop,
    winnerCells: [],
    setWinnerCells: noop,
    resetBoard: noop,
    isDraw: false,
    isWinner: () => false,
    endGame: noop,
}

export const BoardContext = createContext<BoardProps>(defaultValues)

export const BoardProvider: FC = ({ children }) => {
    const [board, setBoard] = useState<Board>(initialBoard)
    const [status, setStatus] = useState(GameStatus.START)
    const [score, setScore] = useState(defaultScore)
    const [history, setHistory] = useState<Array<string>>([])
    const [player, setPlayer] = useState(firstPlayer)
    const [playerMoves, setPlayerMoves] = useState<PlayerMoves>(initialMoves)
    const [winnerCells, setWinnerCells] = useState<Array<Cell>>([])

    const resetBoard = (): void => {
        setBoard(initialBoard)
        setPlayerMoves(initialMoves)
        setWinnerCells([])
        setStatus(GameStatus.START)
    }

    const isDraw = !board
        .flat()
        .some((cell) => cell.value === BoardValues.EMPTY)

    const isWinner = (): boolean => {
        const cells = Array<Cell>(size).fill({ col: 0, row: 0 })
        const currentMoves = playerMoves[player]

        const winnerRow = currentMoves.rows.findIndex((nRows) => nRows === size)
        if (winnerRow !== -1) {
            setWinnerCells(cells.map((val, col) => ({ row: winnerRow, col })))
            return true
        }

        const winnerCol = currentMoves.cols.findIndex((nCols) => nCols === size)
        if (winnerCol !== -1) {
            setWinnerCells(cells.map((val, row) => ({ row, col: winnerCol })))
            return true
        }

        if (currentMoves.rightDiagonal.every((cell) => cell >= 1)) {
            setWinnerCells(
                cells.map((val, index) => ({ row: index, col: index })),
            )
            return true
        }

        if (currentMoves.leftDiagonal.every((cell) => cell >= 1)) {
            setWinnerCells(
                cells.map((val, index) => ({
                    row: index,
                    col: size - 1 - index,
                })),
            )
            return true
        }

        return false
    }

    const endGame = (): void => {
        setStatus(GameStatus.END)
    }

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
        playerMoves,
        setPlayerMoves,
        winnerCells,
        setWinnerCells,
        resetBoard,
        isDraw,
        isWinner,
        endGame,
    }

    return (
        <BoardContext.Provider value={boardContext}>
            {children}
        </BoardContext.Provider>
    )
}
