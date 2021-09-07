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
            <p>Created by @yourname</p>
        </Section>
        <Section>
            <Title>Contacts</Title>
            <p>(+351) 123 456 789</p>
            <p>Rua Sá da Bandira, 111, Porto</p>
        </Section>
        <Section>
            <Title>Stay in touch</Title>
            <SocialContainer> 
                <Facebook height="25px"/>
                <Twitter height="25px"/>
                <Instagram height="25px" width="25px"/>
            </SocialContainer>
            <NewsletterContainer> 
                <Input placeholder="Subscribe our games"/>
                <SendContainer>
                    <button><Send/></button>
                </SendContainer>
            </NewsletterContainer>
        </Section>
        </FooterContainer>
    )
}

export default Footer;
