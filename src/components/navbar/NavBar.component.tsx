import {
    NavBarContainer,
    NavBarList,
    NavBarListItem,
    NavBarRight,
} from './NavBar.styled.tsx';
import { NavBarLinkItem } from '../../shared/models';
import { RefObject } from 'react';

interface NavBarProps {
    onClick: (ref: RefObject<HTMLDivElement | null>) => void;
    navLinkItems: NavBarLinkItem[];
}

export function NavBarComponent(props: NavBarProps) {
    return (
        <NavBarContainer>
            <NavBarRight>
                <NavBarList>
                    {props.navLinkItems.map((item, index) => (
                        <NavBarListItem
                            key={index}
                            onClick={() => props.onClick(item.ref)}
                        >
                            {item.name}
                        </NavBarListItem>
                    ))}
                </NavBarList>
            </NavBarRight>
        </NavBarContainer>
    );
}
