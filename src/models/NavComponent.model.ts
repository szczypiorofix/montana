import { APP_VIEW } from "../shared/enums/AppView.enum";

export interface NavListItem {
    id: APP_VIEW;
    name: string;
}

export interface NavList {
    items: Array<NavListItem>;
    active: boolean;
}

export interface NavComponentProps {
    list: NavList;
}