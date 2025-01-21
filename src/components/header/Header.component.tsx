import React from 'react';

import { HeaderComponentProps } from "../../models";
import { HeaderStyled } from "./Header.styled";

export const HeaderComponent = (props: HeaderComponentProps): React.JSX.Element => {
    return <HeaderStyled>
        <img src={ props.logo } alt="logo" />
    </HeaderStyled>;
};
