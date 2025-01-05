import { NavComponentProps } from "../models";
import { AppContext } from "../storage/App.context";
import { NavLiButtonStyled, NavStyled, NavUlStyled } from "./nav.styled";

export const NavComponent = (props: NavComponentProps): React.JSX.Element => {
    return <AppContext.Consumer>
        {({view, togleView}) => (
        <NavStyled>
            <NavUlStyled>
                {props.list.items.map((navItem, index) => <NavLiButtonStyled
                    key={navItem.name + index}
                    onClick={() => togleView(navItem.id)}
                    className={ view === navItem.id ? 'active' : '' }
                >{navItem.name}</NavLiButtonStyled>)}
            </NavUlStyled>
        </NavStyled>
        )}

    </AppContext.Consumer>
}
