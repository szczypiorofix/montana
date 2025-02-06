import { WrapperComponentProps } from '../../models';
import { JSXElement } from '../../shared/models';
import { ContentWrapperStyled } from './ContentWrapper.styled';

export const ContentWrapperComponent: (
    props: WrapperComponentProps
) => JSXElement = (props: WrapperComponentProps): JSXElement => {
    return <ContentWrapperStyled>{props.children}</ContentWrapperStyled>;
};
