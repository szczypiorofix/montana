import { InnerContentComponentProps } from '../../models';
import { JSXElement } from '../../shared/models';
import { InnerContentStyled } from './InnerContent.styled.';

export const InnerContentComponent: (
    props: InnerContentComponentProps
) => JSXElement = (props: InnerContentComponentProps): JSXElement => {
    return <InnerContentStyled>{props.children}</InnerContentStyled>;
};
