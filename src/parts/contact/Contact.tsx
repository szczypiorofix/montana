import { ContactStyledContainer } from './Contact.styled.tsx';
import { ContactForm } from './ContactForm.tsx';
import { PagePartProps } from '../../shared/models/PagePartProps.ts';
import { H1Styled } from '../../components/Typography.styled.tsx';

export function Contact(props: PagePartProps) {
    return (
        <ContactStyledContainer ref={props.ref}>
            <H1Styled $textAlign={"center"}>&#60;kontakt&#62;</H1Styled>
            <ContactForm />
        </ContactStyledContainer>
    );
}
