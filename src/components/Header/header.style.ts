import styled from 'styled-components'
import color from '../../styles/colors'

export const HeaderContainer = styled.header<{ scrollTrigger: boolean }>`
    background-color: ${(p) =>
        p.scrollTrigger ? 'transparent' : `${color.grey}`};
    height: 8rem;
    margin: 0;
    padding: 0 10rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 50;
`

export const LogoWrapper = styled.div`
    display: inline-block;
    max-width: 100%;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
    margin: 0;
`

export const TitlesWrapper = styled.div`
    font-size: 1.2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

export const Title = styled.span`
    font-family: GlacialIndifferenceBold;
`

export const SubTitle = styled.span`
    font-style: italic;
`
