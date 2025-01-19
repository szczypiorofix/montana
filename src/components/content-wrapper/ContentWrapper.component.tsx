import React from 'react';
import { WrapperComponentProps } from "../../models";
import { ContentWrapperStyled } from "./ContentWrapper.styled";

export const ContentWrapperComponent = (props: WrapperComponentProps): React.JSX.Element => {
    return <ContentWrapperStyled>
        { props.children }
    </ContentWrapperStyled>
}
