import React, { FC, useEffect, useState } from 'react'
import { ReactComponent as SwordHealthLogo } from '../../assets/images/SWORD_Health_logo.svg'
import {
    HeaderContainer,
    LogoWrapper,
    SubTitle,
    Title,
    TitlesWrapper,
} from './header.style'

const title = 'Frontend developer'
const subTitle = 'Challenge'
const scrollTrigger = 150

const Header: FC = () => {
    const [isScrolled, setIsScrolled] = useState<boolean>(false)

    const handleScroll = (): void => {
        setIsScrolled(window.scrollY >= scrollTrigger)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (
        <HeaderContainer scrollTrigger={isScrolled}>
            <LogoWrapper>
                <SwordHealthLogo height="200" width="150" />
            </LogoWrapper>

            <TitlesWrapper>
                <Title>{title}</Title>
                <SubTitle>{subTitle}</SubTitle>
            </TitlesWrapper>
        </HeaderContainer>
    )
}

export default Header
