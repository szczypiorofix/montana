import React from 'react';
import { WrapperComponentProps } from "../../models";
import { ContentWrapperStyled } from "./ContentWrapper.styled";
import { JSXElement } from "../../shared/models";

export const ContentWrapperComponent: (props: WrapperComponentProps) => JSXElement = (props: WrapperComponentProps): JSXElement => {
    return <ContentWrapperStyled>
        { props.children }
    </ContentWrapperStyled>;
};
