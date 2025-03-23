import { FooterContainer, FooterContent } from './Footer.styled.tsx';

export function Footer() {
    const currentYear = new Date().getFullYear();
    return <FooterContainer>
        <FooterContent>©{currentYear} Copyright Piotr Wróblewski</FooterContent>
    </FooterContainer>
}
