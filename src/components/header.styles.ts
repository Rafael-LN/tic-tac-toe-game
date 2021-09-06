import styled from "styled-components";
import color from "../styles/colors";

export const HeaderContainer = styled.header`
    background-color: ${color.grey};
    height: 8rem;
    margin: 0;
    padding: 0 6rem;
    display: flex;
    flex-direction: row;
`

export const LogoWrapper = styled.div` 
    margin-top: auto;
    margin-bottom: auto;
    width: 12rem;
`

export const TitlesWrapper = styled.div`
    margin-left: auto;
    margin-top: auto;
    margin-bottom: auto;
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    
`

export const Title = styled.span`
    font-size: 1.2rem;
    font-family: GlacialBold;
`

export const SubTitle = styled.span`
    font-size: 1.2rem;
    font-style: italic;
    margin-left: auto;
    margin-right: 0;
`