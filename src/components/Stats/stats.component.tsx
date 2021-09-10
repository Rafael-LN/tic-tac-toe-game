import React, { FC, useContext } from 'react'
import { Col, Grid, Row } from 'react-flexbox-grid'
import { BoardContext } from '../TicTacToe/hooks/board.hook'
import { maxMatches, players } from '../TicTacToe/model/tic-tac-toe.default'

import PlayerStats from './player-stats.component'
import colors from '../../styles/colors'

import {
    StatsContainer,
    PlayerPercentage,
    Text,
    HistoryCircle,
    HistoryWrapper,
    HistorySquare,
} from './stats.styles'
import { GameStatus, BoardValues } from '../TicTacToe/model/tic-tac-toe.model'

const Stats: FC = () => {
    const { matchTime, history } = useContext(BoardContext)

    return (
        <StatsContainer>
            <h1>Awesome Statistics</h1>
            <Text fontType="regular">All statistics in one place!</Text>
            <Grid>
                <Row>
                    <Col md={4}>
                        <PlayerPercentage>Game victories %</PlayerPercentage>
                        <PlayerStats />
                    </Col>
                    <Col md={4} mdOffset={4}>
                        <PlayerPercentage>Played matches</PlayerPercentage>
                        <HistoryWrapper>
                            {Array(maxMatches)
                                .fill(Number)
                                .map((val, index) => {
                                    const color =
                                        index + 1 <= history.length
                                            ? colors.grey
                                            : '#ffffff'
                                    return <HistoryCircle color={color} />
                                })}
                        </HistoryWrapper>
                        <PlayerPercentage>Game history</PlayerPercentage>
                        <HistoryWrapper>
                            {Array(maxMatches)
                                .fill(Number)
                                .map((val, index) => {
                                    const value = history.slice(-maxMatches)[
                                        index
                                    ]

                                    const castedValue = value as BoardValues

                                    const formattedValue =
                                        value === GameStatus.DRAW
                                            ? 'D'
                                            : `P${players[castedValue]}`

                                    return (
                                        <HistorySquare>
                                            {value ? formattedValue : ''}
                                        </HistorySquare>
                                    )
                                })}
                        </HistoryWrapper>
                    </Col>
                </Row>
            </Grid>

            <Text fontType="bold">Total Time</Text>
            <Text fontType="regular">{matchTime}</Text>
        </StatsContainer>
    )
}

export default Stats
