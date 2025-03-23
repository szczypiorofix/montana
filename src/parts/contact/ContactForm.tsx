import {
    ContactFormGroupStyled,
    ContactFormLabelStyled,
    ContactFormStyled, ContactFormSubmitButtonStyled, ContactFormTextareaStyled,
    ContactFormTextInputStyled,
} from './ContactForm.styled.tsx';
import { H2Styled } from '../../components/Typography.styled.tsx';

export function ContactForm() {

    return <div>
        <H2Styled $textAlign={"center"}>Napisz wiadomość:</H2Styled>
        <ContactFormStyled
            onSubmit={(e) => {
                console.log("Submit form");
                e.preventDefault();
                e.stopPropagation();
            }}
        >
            <ContactFormGroupStyled>
                <ContactFormLabelStyled>Imię:</ContactFormLabelStyled>
                <ContactFormTextInputStyled type="text" required={true}></ContactFormTextInputStyled>
            </ContactFormGroupStyled>
            <ContactFormGroupStyled>
                <ContactFormLabelStyled>Email:</ContactFormLabelStyled>
                <ContactFormTextInputStyled type="email" required={true}></ContactFormTextInputStyled>
            </ContactFormGroupStyled>
            <ContactFormGroupStyled>
                <ContactFormLabelStyled>Treść:</ContactFormLabelStyled>
                <ContactFormTextareaStyled required={true}></ContactFormTextareaStyled>
            </ContactFormGroupStyled>
            <ContactFormGroupStyled>
                <ContactFormSubmitButtonStyled type={"submit"}>Wyślij</ContactFormSubmitButtonStyled>
            </ContactFormGroupStyled>
        </ContactFormStyled>
    </div>
}
