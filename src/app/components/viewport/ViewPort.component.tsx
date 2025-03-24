import { JSXElement } from '../../shared/models';
import { ViewPortStyled } from './ViewPort.styled';
import { PropsWithChildren } from 'react';

export function ViewPortComponent(props: PropsWithChildren): JSXElement {
    return (
        <ViewPortStyled>
            {props.children}
        </ViewPortStyled>
    );
}
