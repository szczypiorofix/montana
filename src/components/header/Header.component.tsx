import { HeaderComponentProps } from '../../models';
import { JSXElement } from '../../shared/models';
import { HeaderStyled } from './Header.styled';

export const HeaderComponent: (props: HeaderComponentProps) => JSXElement = (
    props: HeaderComponentProps
): JSXElement => {
    return (
        <HeaderStyled>
            <img src={props.logo} alt='logo' />
        </HeaderStyled>
    );
};
