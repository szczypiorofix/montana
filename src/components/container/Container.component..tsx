import { ContainerComponentProps } from '../../models';
import { JSXElement } from '../../shared/models';
import { ContainerStyled } from './Container.styled';

export const ContainerComponent: (
    props: ContainerComponentProps
) => JSXElement = (props: ContainerComponentProps): JSXElement => {
    return <ContainerStyled>{props.children}</ContainerStyled>;
};
