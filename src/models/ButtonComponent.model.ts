import { PropsWithChildren } from 'react';

export interface ButtonComponentProps extends PropsWithChildren {
    onClick?: () => void;
    variant: 'primary' | 'secondary';
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    content: string;
}
