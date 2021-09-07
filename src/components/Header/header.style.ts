import styled from "styled-components";
import color from "../../styles/colors";

export const HeaderContainer = styled.header`
    background-color: ${color.grey};
    height: 8rem;
    margin: 0;
    padding: 0 10rem;
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
    font-size: 1.2rem;
    display: flex;
    flex-direction: column;
    
`

export const Title = styled.span`
    font-family: GlacialBold;
`

export const SubTitle = styled.span`
    font-style: italic;
    margin-left: auto;
    margin-right: 0;
`