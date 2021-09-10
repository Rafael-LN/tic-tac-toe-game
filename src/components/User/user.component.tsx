import React, { FC } from 'react'
import { Col, Row } from 'react-flexbox-grid'
import { ReactComponent as Photo } from '../../assets/images/photo.svg'
import { UserContainer, UserDetails } from './user.style'

const User: FC = () => {
    return (
        <UserContainer>
            <Row>
                <Col xs={12} md={2}>
                    <Photo height="200px" width="200px" />
                </Col>
                <UserDetails xs={12} md={6}>
                    <h3>Rafael Nunes</h3>
                    <ul>
                        <li>Age: 29</li>
                        <li>Location: Alverca do Ribatejo</li>
                        <li>Occupation: Frontend Developer</li>
                    </ul>
                </UserDetails>
                <UserDetails xs={12} md={4}>
                    <p>About me:</p>
                    <p>
                        My name is Rafael Nunes and I am a Frontend Developer
                        with solid experience in Typescript and React framework.
                    </p>
                </UserDetails>
            </Row>
        </UserContainer>
    )
}

export default User
