import React from 'react';
import {ViewPortStyled, ViewPortWrapperStyled} from "./ViewPort.styled";
import { ViewPortComponentProps } from "../../models";

export const ViewPortComponent = (props: ViewPortComponentProps): React.JSX.Element => {
    return <ViewPortStyled>
        <ViewPortWrapperStyled>
            { props.children }
        </ViewPortWrapperStyled>
    </ViewPortStyled>;
};
