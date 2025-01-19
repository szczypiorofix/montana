import React from 'react';
import { InnerContentStyled } from "./InnerContent.styled.";
import { InnerContentComponentProps } from "../../models";

export const InnerContentComponent = (props: InnerContentComponentProps): React.JSX.Element => {
    return <InnerContentStyled>
        { props.children }
    </InnerContentStyled>
}
