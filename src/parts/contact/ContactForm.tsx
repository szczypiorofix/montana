import {
    ContactFormGroupStyled,
    ContactFormLabelStyled,
    ContactFormStyled, ContactFormSubmitButtonStyled, ContactFormTextareaStyled,
    ContactFormTextInputStyled,
} from './ContactForm.styled.tsx';
import { H2Styled } from '../../components/Typography.styled.tsx';
import { useState } from 'react';

interface ContactFormFields {
    name: string;
    email: string;
    message: string;
}

function validateNameInput(name: string): boolean {
    return name.trim().length > 0;
}

function validateEmailInput(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
}

function validateMessageInput(message: string): boolean {
    return message.trim().length > 0;
}

export function ContactForm() {
    const [formData, setFormData] = useState<ContactFormFields>({
        name: "",
        email: "",
        message: ""
    });

    function sendEmail() {
        if (
            validateNameInput(formData.name)
            && validateEmailInput(formData.email)
            && validateMessageInput(formData.message)
        ) {
            console.log("Form data - OK");

            fetch('https://api.wroblewskipiotr.pl/api/mail/send', {
                method: 'POST',
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(formData),
            })
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(err => console.error(err));

        } else {
            console.error("Form data - invalid");
        }
    }

    return <div>
        <H2Styled $textAlign={"center"}>Napisz wiadomość:</H2Styled>
        <ContactFormStyled
            onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                sendEmail();
            }}
        >
            <ContactFormGroupStyled>
                <ContactFormLabelStyled>Imię:</ContactFormLabelStyled>
                <ContactFormTextInputStyled type="text" value={formData.name} onChange={e => setFormData({
                    ...formData,
                    name: e.target.value
                })} required={true}></ContactFormTextInputStyled>
            </ContactFormGroupStyled>
            <ContactFormGroupStyled>
                <ContactFormLabelStyled>Email:</ContactFormLabelStyled>
                <ContactFormTextInputStyled type="email" value={formData.email} onChange={e => setFormData({
                    ...formData,
                    email: e.target.value
                })} required={true}></ContactFormTextInputStyled>
            </ContactFormGroupStyled>
            <ContactFormGroupStyled>
                <ContactFormLabelStyled>Treść:</ContactFormLabelStyled>
                <ContactFormTextareaStyled required={true} value={formData.message} onChange={e => setFormData({
                    ...formData,
                    message: e.target.value
                })}></ContactFormTextareaStyled>
            </ContactFormGroupStyled>
            <ContactFormGroupStyled>
                <ContactFormSubmitButtonStyled type={"submit"}>Wyślij</ContactFormSubmitButtonStyled>
            </ContactFormGroupStyled>
        </ContactFormStyled>
    </div>
}
