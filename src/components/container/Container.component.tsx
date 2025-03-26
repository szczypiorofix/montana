import { JSXElement } from '../../shared/models';
import { ContainerStyled } from './Container.styled.tsx';
import { PropsWithChildren } from 'react';

export function ContainerComponent(props: PropsWithChildren): JSXElement {
    return (
        <ContainerStyled $fullWidth>
            {props.children}
        </ContainerStyled>
    );
}
