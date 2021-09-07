import { ReactComponent as Facebook } from 'assets/images/facebook.svg';
import { ReactComponent as Instagram } from 'assets/images/instagram.svg';
import { ReactComponent as Twitter } from 'assets/images/twitter.svg';
import { ReactComponent as Send } from 'assets/images/send.svg';
import { FooterContainer, NewsletterContainer, Section, SocialContainer, Title, Input, SendContainer } from './footer.styles';


const Footer = () => {
    return (
        <FooterContainer>
        <Section>
            <Title>About Page</Title>
            <p>Play tic tac toe or 4-in-a-row anytime!</p>
            <p>Created by @RafaelLN</p>
        </Section>
        <Section>
            <Title>Contacts</Title>
            <p>(+351) 123 456 789</p>
            <p>Rua Sá da Bandira, 111, Porto</p>
        </Section>
        <Section>
            <Title>Stay in touch</Title>
            <SocialContainer>
                <a href="https://www.facebook.com/SWORDHealth1/">
                    <Facebook height="25px" target="_blank"/>
                </a>
                <a href="https://twitter.com/swordhealth">
                    <Twitter height="25px"/>
                </a>
                <a href="https://instagram.com/sword_health">
                    <Instagram height="25px" width="25px"/>
                </a>
            </SocialContainer>
            <NewsletterContainer action="#" method="post"> 
                <Input placeholder="Subscribe our games" type="email"/>
                <SendContainer>
                    <button type="submit">
                        <Send height="25px" width="25px"/>
                    </button>
                </SendContainer>
            </NewsletterContainer>
        </Section>
        </FooterContainer>
    )
}

export default Footer;
