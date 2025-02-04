import styled from 'styled-components'
import color from '../../styles/colors'

export const FooterContainer = styled.footer`
    background-color: ${color.white};
    height: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 10rem;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`

export const Section = styled.div`
    font-size: 1.2rem;
    font-family: GlacialRegular;
    margin-top: 3rem;
    margin-bottom: auto;
    line-height: 1.5rem;
    flex-direction: column;

    > p {
        font-size: 0.9rem;
    }
`

export const Title = styled.span`
    font-size: large;
    margin-bottom: 0.5rem;
`

export const SocialContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-top: 1rem;

    > a {
        margin-right: 0.7rem;
    }
`

export const NewsletterContainer = styled.form`
    display: flex;
    margin-top: 1rem;
    height: 2rem;
    justify-content: flex-start;
`

export const Input = styled.input`
    border: 0.15rem solid ${color.grey};
    background-color: white;
    width: 12rem;
    padding: 0.3rem 0.75rem;

    ::placeholder {
        color: ${color.grey};
        font-size: 1rem;
        font-family: GlacialIndifferenceRegular;
    }

    :focus {
        outline: none;
    }

    :focus-visible {
        outline-color: ${color.grey};
    }
`

export const SendContainer = styled.div`
    height: inherit;
    width: 2rem;

    > button {
        padding: 1px;
        height: inherit;
        width: inherit;
        border-radius: 0;
        border-color: ${color.grey};
        border-style: solid;
        border-left: none;
    }
`
