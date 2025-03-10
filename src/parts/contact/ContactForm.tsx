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
        <ContactFormStyled>
            <ContactFormGroupStyled>
                <ContactFormLabelStyled>Imię:</ContactFormLabelStyled>
                <ContactFormTextInputStyled type="text"></ContactFormTextInputStyled>
            </ContactFormGroupStyled>
            <ContactFormGroupStyled>
                <ContactFormLabelStyled>Email:</ContactFormLabelStyled>
                <ContactFormTextInputStyled type="email"></ContactFormTextInputStyled>
            </ContactFormGroupStyled>
            <ContactFormGroupStyled>
                <ContactFormLabelStyled>Treść:</ContactFormLabelStyled>
                <ContactFormTextareaStyled></ContactFormTextareaStyled>
            </ContactFormGroupStyled>
            <ContactFormGroupStyled>
                <ContactFormSubmitButtonStyled
                    onSubmit={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                    }}
                    onClick={(e) => {
                        console.log('Submit...');
                        e.preventDefault();
                        e.stopPropagation();
                    }}
                    type="submit"
                >Wyślij</ContactFormSubmitButtonStyled>
            </ContactFormGroupStyled>
        </ContactFormStyled>
    </div>
}
