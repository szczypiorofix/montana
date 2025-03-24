import styled from 'styled-components';
import { deviceSize } from '../../shared/costants/ResponsiveSizes';

const ContactFormStyled = styled.form`
    width: 100%;
    margin: 0 auto;

    @media ${deviceSize.sm} {
        width: 80%;
    }
    @media ${deviceSize.md} {
        width: 74%;
    }
    @media ${deviceSize.lg} {
        width: 68%;
    }
    @media ${deviceSize.xl} {
        width: 60%;
    }
    @media ${deviceSize.xxl} {
        width: 50%;
    }
`;

const ContactFormGroupStyled = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 8px 0;
    display: flex;
    flex-direction: column;
`;

const ContactFormLabelStyled = styled.label`
    width: 100%;
    font-size: 0.5em;
    font-weight: bold;
    letter-spacing: 2px;
    text-transform: uppercase;
`;

const ContactFormTextInputStyled = styled.input`
    margin: 12px 4px;
    border-radius: 4px;
    padding: 12px 8px;
    font-size: 0.56em;
    border: none;
    outline: none;
    transition: 0.2s;
    box-shadow: 1px 1px 2px var(--Mindaro);
    color: var(--EerieBlack);
    &:focus, &:active {
        box-shadow: 1px 1px 8px var(--Mindaro);
    }
`;

const ContactFormTextareaStyled = styled.textarea`
    resize: none;
    min-height: 160px;
    margin: 12px 4px;
    border-radius: 4px;
    border: none;
    outline: none;
    padding: 12px 8px;
    font-size: 0.56em;
    color: var(--EerieBlack);
    box-shadow: 1px 1px 2px var(--Mindaro);
    &:focus, &:active {
        box-shadow: 1px 1px 6px var(--Mindaro);
    }
`;

const ContactFormSubmitButtonStyled = styled.button`
    cursor: pointer;
    min-width: 80px;
    margin: 20px auto 0;
    padding: 12px 32px;
    text-align: center;
    font-size: 0.5em;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 3px;
    border: 2px solid var(--Olivine);
    border-radius: 4px;
    color: var(--EerieBlack);
    position: relative;
    overflow: hidden;
    z-index: 1;
    transition: all 0.2s ease-in-out;
    &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--Olivine);
        z-index: -2;
    }
    &:before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 100%;
        background-color: var(--BlackOlive);
        transition: all .3s;
        z-index: -1;
    }
    &:hover {
        color: var(--Mindaro);
        &:before {
            width: 100%;
        }
    }
`;

export { ContactFormStyled, ContactFormGroupStyled, ContactFormTextInputStyled, ContactFormLabelStyled, ContactFormTextareaStyled, ContactFormSubmitButtonStyled };
