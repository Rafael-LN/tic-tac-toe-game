import React from 'react'
import { ReactComponent as SwordHealthLogo } from 'assets/images/SWORD_Health_logo.svg';
import { HeaderContainer, LogoWrapper, SubTitle, Title, TitlesWrapper } from './header.style'

const title = 'Frontend developer';
const subTitle = 'Challenge';

const Header = () => {
    return (
        <HeaderContainer>
            <LogoWrapper>
                <SwordHealthLogo/>
            </LogoWrapper>

            <TitlesWrapper>
                <Title>{title}</Title>
                <SubTitle>{subTitle}</SubTitle>
            </TitlesWrapper>

            
        </HeaderContainer>
    )
}

export default Header
