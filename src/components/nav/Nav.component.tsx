import React from 'react';

import { NavComponentProps } from "../../models";
import { useGlobalAppContext } from "../../storage/AppContext";
import { APP_REDUCER_ACTION_TYPE } from "../../storage/AppContext.reducer";
import {NavLiButtonStyled, NavLiStyled, NavStyled, NavUlStyled} from "./Nav.styled";

export const NavComponent = (props: NavComponentProps): React.JSX.Element => {
    const { state, setState } = useGlobalAppContext();

    return <NavStyled>
        <NavUlStyled>
            {props.list.items.map((navItem, index) => <NavLiStyled key={navItem.name + index}><NavLiButtonStyled
                onClick={() => setState({
                    ...state,
                    view: navItem.id
                }, APP_REDUCER_ACTION_TYPE.CHANGE_APP_VIEW )}
                className={ state.view === navItem.id ? 'active' : '' }
            >{navItem.name}</NavLiButtonStyled></NavLiStyled>)}
        </NavUlStyled>
    </NavStyled>;
};
