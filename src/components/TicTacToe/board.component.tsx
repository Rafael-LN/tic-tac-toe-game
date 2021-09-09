import React, { useContext, MouseEvent, FC } from 'react'

import { ReactComponent as X_DARK } from '../../assets/images/X_dark.svg'
import { ReactComponent as O_DARK } from '../../assets/images/O_dark.svg'
import { ReactComponent as X_BRIGHT } from '../../assets/images/X_bright.svg'
import { ReactComponent as O_BRIGHT } from '../../assets/images/O_bright.svg'

import { BoardContext } from './hook/board.hook'

import { BoardValues, CellColor, GameStatus } from './model/tic-tac-toe.model'
import { BoardContainer, GameCell } from './tic-tac-toe.style'
import { size } from './model/tic-tac-toe.default'

const Board: FC = () => {
    const {
        board,
        status,
        player,
        playerMoves,
        winnerCells,
        isWinner,
        isDraw,
        setBoard,
        setPlayerMoves,
        setStatus,
        resetBoard,
        setPlayer,
    } = useContext(BoardContext)

    const token = {
        [BoardValues.X]: {
            [CellColor.DARK]: <X_DARK />,
            [CellColor.BRIGHT]: <X_BRIGHT />,
        },
        [BoardValues.O]: {
            [CellColor.DARK]: <O_DARK />,
            [CellColor.BRIGHT]: <O_BRIGHT />,
        },
        [BoardValues.EMPTY]: {
            [CellColor.DARK]: <X_DARK />,
            [CellColor.BRIGHT]: <X_DARK />,
        },
    }

    const updateBoard = (): void => {
        if (isWinner()) {
            setStatus(GameStatus.WIN)

            setTimeout(() => {
                resetBoard()
            }, 2000)
            return
        }
        if (isDraw) {
            setStatus(GameStatus.DRAW)

            setTimeout(() => {
                resetBoard()
            }, 3000)
        }
        setPlayer(player === BoardValues.X ? BoardValues.O : BoardValues.X)
    }

    const playerMove = ({
        currentTarget,
    }: MouseEvent<HTMLDivElement>): void => {
        const { id } = currentTarget
        const [, rowIndex, colIndex] = id.split('-')

        const row = +rowIndex
        const col = +colIndex

        if (
            board[row][col].value !== BoardValues.EMPTY ||
            status === GameStatus.WIN
        ) {
            return
        }

        const newMoves = { ...playerMoves }

        newMoves[player].rows[row]++
        newMoves[player].cols[col]++

        if (row === col) {
            newMoves[player].rightDiagonal[row]++
        }

        if (row + col === size - 1) {
            newMoves[player].leftDiagonal[row]++
        }

        setPlayerMoves(newMoves)
        const newBoard = [...board]
        newBoard[row][col] = {
            value: player,
            color: player === BoardValues.X ? CellColor.DARK : CellColor.BRIGHT,
        }
        setBoard(newBoard)

        updateBoard()
    }

    return (
        <BoardContainer>
            {board.map((row, rowIndex) =>
                row.map((cell, colIndex) => {
                    const id = `C-${rowIndex}-${colIndex}`

                    const isWin = winnerCells.some(
                        (winnerCell) =>
                            winnerCell.row === rowIndex &&
                            winnerCell.col === colIndex,
                    )

                    const cellToDraw = isWin
                        ? token[cell.value][CellColor.BRIGHT]
                        : token[cell.value][CellColor.DARK]

                    return (
                        <GameCell
                            key={id}
                            id={id}
                            onClick={playerMove}
                            role="button"
                            tabIndex={2 + size * rowIndex + colIndex}
                        >
                            {cell.value !== BoardValues.EMPTY && cellToDraw}
                        </GameCell>
                    )
                }),
            )}
        </BoardContainer>
    )
}

export default Board
