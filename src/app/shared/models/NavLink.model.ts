import { NavPath } from '../enums';
import { RefObject } from 'react';

export interface NavBarLinkItem {
    link: NavPath;
    name: string;
    ref: RefObject<HTMLDivElement | null>;
}
