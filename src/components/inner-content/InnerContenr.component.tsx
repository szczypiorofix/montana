import React from 'react';
import { InnerContentStyled } from "./InnerContent.styled.";
import { InnerContentComponentProps } from "../../models";
import { JSXElement } from "../../shared/models";

export const InnerContentComponent: (props: InnerContentComponentProps) => JSXElement = (props: InnerContentComponentProps): JSXElement => {
    return <InnerContentStyled>
        { props.children }
    </InnerContentStyled>;
};
