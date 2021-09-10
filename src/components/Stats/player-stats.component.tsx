import React, { FC, useContext } from 'react'
import { Col } from 'react-flexbox-grid'
import { BoardContext } from '../TicTacToe/hooks/board.hook'
import { players } from '../TicTacToe/model/tic-tac-toe.default'
import { BoardValues } from '../TicTacToe/model/tic-tac-toe.model'
import {
    PlayerPercentage,
    StatsArticle,
    CircleContainer,
    CircleWrapper,
    Circle,
    Text,
} from './stats.styles'
import colors from '../../styles/colors'

const PlayerStats: FC = () => {
    const { score } = useContext(BoardContext)

    const getPlayerPercentages = (
        player: BoardValues,
    ): { wins: number; losses: number } => {
        const totalScore = score.X + score.O

        const wins = Math.round((score[player] / totalScore) * 100)
        const losses = Math.round(
            ((totalScore - score[player]) / totalScore) * 100,
        )

        return {
            wins: Number.isNaN(wins) ? 0 : wins,
            losses: Number.isNaN(losses) ? 0 : losses,
        }
    }

    const getPercentageColor = (percentage: number): string => {
        if (percentage >= 75) {
            return colors.secondary
        }

        if (percentage >= 50) {
            return colors.yellow
        }

        return colors.red
    }

    const player1Stats = getPlayerPercentages(BoardValues.X)
    const player2Stats = getPlayerPercentages(BoardValues.O)

    return (
        <>
            <StatsArticle>
                <Col md={5}>
                    <PlayerPercentage>
                        <Text fontType="regular">
                            Player {players[BoardValues.X]}
                        </Text>
                        <CircleContainer>
                            <CircleWrapper>
                                <Circle
                                    color={getPercentageColor(
                                        player1Stats.wins,
                                    )}
                                >
                                    {player1Stats.wins}%
                                </Circle>
                                <span>V</span>
                            </CircleWrapper>
                            <CircleWrapper>
                                <Circle color={colors.grey}>
                                    {player1Stats.losses}%
                                </Circle>
                                <span>L</span>
                            </CircleWrapper>
                        </CircleContainer>
                    </PlayerPercentage>
                </Col>
                <Col md={5}>
                    <PlayerPercentage>
                        <Text fontType="regular">
                            Player {players[BoardValues.O]}
                        </Text>
                        <CircleContainer>
                            <CircleWrapper>
                                <Circle
                                    color={getPercentageColor(
                                        player2Stats.wins,
                                    )}
                                >
                                    {player2Stats.wins}%
                                </Circle>
                                <span>V</span>
                            </CircleWrapper>
                            <CircleWrapper>
                                <Circle color={colors.grey}>
                                    {player2Stats.losses}%
                                </Circle>
                                <span>L</span>
                            </CircleWrapper>
                        </CircleContainer>
                    </PlayerPercentage>
                </Col>
            </StatsArticle>
        </>
    )
}

export default PlayerStats
