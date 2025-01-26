import React from 'react';
import { NavComponentProps } from "../../models";
import { useGlobalAppContext } from "../../storage/AppContext";
import { NavLiButtonStyled, NavLiStyled, NavStyled, NavUlStyled } from "./Nav.styled";
import { JSXElement } from "../../shared/models";

export const NavComponent: (props: NavComponentProps) => JSXElement = (props: NavComponentProps): JSXElement => {
    const { state, setAppView } = useGlobalAppContext();

    return <NavStyled>
        { props.visible && <NavUlStyled>
            {props.list.items.map((navItem, index) => <NavLiStyled key={navItem.name + index}><NavLiButtonStyled
                onClick={() => setAppView({
                    ...state,
                    view: navItem.id
                } )}
                className={ state.view === navItem.id ? 'active' : '' }
            >{navItem.name}</NavLiButtonStyled></NavLiStyled>)}
        </NavUlStyled> }
    </NavStyled>;
};
