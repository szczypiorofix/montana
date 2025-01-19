import React from 'react';

import { ContainerStyled } from "./Container.styled";
import { ContainerComponentProps } from "../../models";


export const ContainerComponent = (props: ContainerComponentProps): React.JSX.Element => {
    return <ContainerStyled>
        { props.children }
    </ContainerStyled>
}
