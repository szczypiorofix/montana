export interface NavListItem {
    id: number;
    name: string;
}

export interface NavList {
    items: Array<NavListItem>;
    active: boolean;
}

export interface NavComponentProps {
    list: NavList;
}