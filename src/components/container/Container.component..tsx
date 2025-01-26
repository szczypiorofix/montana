import React from 'react';

import { ContainerStyled } from "./Container.styled";
import { ContainerComponentProps } from "../../models";
import { JSXElement } from "../../shared/models";


export const ContainerComponent: (props: ContainerComponentProps) => JSXElement = (props: ContainerComponentProps): JSXElement => {
    return <ContainerStyled>
        { props.children }
    </ContainerStyled>;
};
