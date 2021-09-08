import styled from "styled-components";
import color from "styles/colors";
import { Col, Grid } from "react-flexbox-grid";

export const GameSection = styled.section`
    background-color: ${color.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem 0;
    font-family: GlacialIndifferenceBold;
`;

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
`