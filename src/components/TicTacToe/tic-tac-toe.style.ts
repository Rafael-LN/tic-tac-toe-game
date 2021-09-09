import styled from 'styled-components'
import { Col, Grid } from 'react-flexbox-grid'
import color from '../../styles/colors'

export const GameSection = styled.section`
    background-color: ${color.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem 0;
    font-family: GlacialIndifferenceBold;
`

export const Title = styled.h1`
    margin-top: 5rem;
    font-size: 2.5rem;
`

export const SubTitle = styled.span`
    font-family: GlacialIndifferenceRegular;
    font-weight: 100;
    font-size: 1.5rem;
`

export const GameContainer = styled(Grid)`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;

    margin: 5rem 0;
`

export const PlayerContainer = styled(Col)`
    text-align: center;
    font-size: 3rem;
    font-family: GlacialIndifferenceRegular;
    font-weight: 100;

    > p:nth-child(2) {
        margin-top: 0;
        font-size: 6rem;
    }
`

export const Game = styled(Col)`
    width: 30rem;
    height: 30rem;
    border: 0.2rem solid ${color.grey};
    background-color: white;
    position: relative;
`

export const GameCell = styled.div`
    border: 1px solid ${color.grey};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    > svg {
        max-width: 100%;
        height: auto;
        height: 90%;
        width: 90%;
    }
`

export const BoardContainer = styled.div`
    display: grid;
    height: 100%;
    width: 100%;
    opacity: 1;
    background-color: rgba(255, 255, 255);

    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-template-rows: repeat(3, minmax(0, 1fr));
`
