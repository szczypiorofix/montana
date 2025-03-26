import { useEffect, useState } from 'react';
import {
    ContactFormGroupStyled,
    ContactFormLabelStyled, ContactFormResponseFieldStyled,
    ContactFormStyled, ContactFormSubmitButtonStyled, ContactFormTextareaStyled,
    ContactFormTextInputStyled,
} from './ContactForm.styled.tsx';
import { H2Styled } from '../../components/Typography.styled.tsx';
import { useRequest } from '../../hooks/useRequest.ts';

interface ContactFormFields {
    name: string;
    email: string;
    message: string;
}

interface ContactFormResponse {
    statusCode: number;
    message: string[];
    error: string;

}

const defaultContactFormResponse: ContactFormResponse = {
    statusCode: 200,
    error: "",
    message: []
}

const emailRequestUrl: string = 'https://api.wroblewskipiotr.pl/v1/mail/send';

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
    const [response, execute, isLoading, finished, hasError, errorMessage] = useRequest<ContactFormResponse>(emailRequestUrl, defaultContactFormResponse);

    function sendEmail() {
        if (
            validateNameInput(formData.name)
            && validateEmailInput(formData.email)
            && validateMessageInput(formData.message)
        ) {
            console.log("Form data - OK");
            execute({
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData),
            });
        } else {
            console.error("Form data - invalid");
        }
    }

    useEffect(() => {
        if (finished) {
            setFormData({
                name: "",
                message: "",
                email: ""
            })
        }
    }, [finished]);

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
                })} required={true} disabled={isLoading}></ContactFormTextInputStyled>
            </ContactFormGroupStyled>
            <ContactFormGroupStyled>
                <ContactFormLabelStyled>Email:</ContactFormLabelStyled>
                <ContactFormTextInputStyled type="email" value={formData.email} onChange={e => setFormData({
                    ...formData,
                    email: e.target.value
                })} required={true} disabled={isLoading}></ContactFormTextInputStyled>
            </ContactFormGroupStyled>
            <ContactFormGroupStyled>
                <ContactFormLabelStyled>Treść:</ContactFormLabelStyled>
                <ContactFormTextareaStyled required={true} disabled={isLoading} value={formData.message} onChange={e => setFormData({
                    ...formData,
                    message: e.target.value
                })}></ContactFormTextareaStyled>
            </ContactFormGroupStyled>
            <ContactFormGroupStyled>
                <ContactFormSubmitButtonStyled type={"submit"} disabled={isLoading}>Wyślij</ContactFormSubmitButtonStyled>
            </ContactFormGroupStyled>
            { (
                response.message.length > 0
                || response.error
                || hasError
                )
                && <ContactFormResponseFieldStyled>
                    { Array.isArray(response.message) ? response.message.join(', ') : response.message }
                    { response.error }
                    { errorMessage }
                </ContactFormResponseFieldStyled>
            }
        </ContactFormStyled>
    </div>
}
