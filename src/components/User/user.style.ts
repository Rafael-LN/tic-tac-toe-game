import styled from 'styled-components'
import { Col, Grid } from 'react-flexbox-grid'

export const UserContainer = styled(Grid)`
    width: 100%;
    padding: 0 10rem;
    margin-bottom: 5rem;
    margin-top: 10rem;

    > .row {
        align-items: center;
        justify-content: center;

        @media (max-width: 768px) {
            flex-direction: column;
        }
    }
`

export const UserDetails = styled(Col)`
    text-align: left;
    font-size: 1.125rem;
    line-height: 1.75rem;

    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
    }

    > h3 {
        font-size: 2.25rem;
        line-height: 2.5rem;
    }

    > ul {
        list-style: none;
        padding: 0;
    }

    > p {
        text-align: right;

        @media (max-width: 768px) {
            text-align: center;
        }
    }
`
