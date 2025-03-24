import { ContactStyledContainer } from './Contact.styled';
import { ContactForm } from './ContactForm';
import { PagePartProps } from '../../shared/models/PagePartProps';
import { H1Styled } from '../../components/Typography.styled';

export function Contact(props: PagePartProps) {
    return (
        <ContactStyledContainer ref={props.ref}>
            <H1Styled $textAlign={"center"}>&#60;kontakt&#62;</H1Styled>
            <ContactForm />
        </ContactStyledContainer>
    );
}
