import { JSXElement } from '../../shared/models';
import { HeaderStyled } from './Header.styled';

interface HeaderComponentProps {
    logo: string;
}

export function HeaderComponent(props: HeaderComponentProps): JSXElement {
    return (
        <HeaderStyled $smallLogo={false}>
            <img src={props.logo} alt='logo' />
        </HeaderStyled>
    );
}
