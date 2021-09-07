import styled from "styled-components";
import { Col, Grid } from "react-flexbox-grid";

export const UserContainer = styled(Grid)`
    width: 100%;
    padding: 0 10rem;
    margin: 3rem 0;
    
    > .row {
        align-items: center;
    }
`

export const UserDetails = styled(Col)`

    text-align: left;
    font-size: 1.125rem;
    line-height: 1.75rem;
    
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
    }
`