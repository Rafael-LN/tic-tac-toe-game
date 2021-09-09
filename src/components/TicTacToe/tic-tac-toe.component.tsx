import React, { FC, useContext } from 'react'
import GameBoard from './board.component'
import { BoardContext } from './hooks/board.hook'
import { players } from './model/tic-tac-toe.default'
import { BoardValues } from './model/tic-tac-toe.model'
import {
    GameSection,
    GameContainer,
    PlayerContainer,
    SubTitle,
    Title,
    Game,
    TimeWrapper,
} from './tic-tac-toe.style'

const TicTacToe: FC = () => {
    const { score, gameTime } = useContext(BoardContext)

    return (
        <GameSection>
            <Title>Tic Tac Toe games</Title>
            <SubTitle>Welcome to the best game in the world.</SubTitle>
            <GameContainer>
                <PlayerContainer xs={2}>
                    <p>Player {players[BoardValues.X]}</p>
                    <p>{score[BoardValues.X]}</p>
                </PlayerContainer>
                <Game>
                    <GameBoard />
                </Game>
                <PlayerContainer xs={2}>
                    <p>Player {players[BoardValues.O]}</p>
                    <p>{score[BoardValues.O]}</p>
                </PlayerContainer>
            </GameContainer>
            <TimeWrapper>{gameTime}</TimeWrapper>
        </GameSection>
    )
}

export default TicTacToe
