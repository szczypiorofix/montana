import React from 'react';

import { HeaderComponentProps } from "../../models";
import { HeaderStyled } from "./Header.styled";
import { JSXElement } from "../../shared/models";

export const HeaderComponent: (props: HeaderComponentProps) => JSXElement = (props: HeaderComponentProps): JSXElement => {
    return <HeaderStyled>
        <img src={ props.logo } alt="logo" />
    </HeaderStyled>;
};
