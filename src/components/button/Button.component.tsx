import { ButtonStyled } from './Button.styled';
import { CSSProperties, PropsWithChildren } from 'react';

type ButtonProps = PropsWithChildren<{
    onClick?: () => void;
    variant: 'primary' | 'secondary';
    size: 'xs' | 'sm' | 'md' | 'lg';
}>;

export function ButtonComponent({
    children,
    onClick,
    variant = 'primary',
    size = 'md',
}: ButtonProps) {
    const variantStyles: Record<ButtonProps['variant'], CSSProperties> = {
        primary: {
            backgroundColor: 'blue',
        },
        secondary: {
            backgroundColor: 'gray',
        },
    };

    const sizeStyles: Record<ButtonProps['size'], CSSProperties> = {
        xs: {
            padding: '0.25rem',
        },
        sm: {
            padding: '0.5rem',
        },
        md: {
            padding: '0.75rem',
        },
        lg: {
            padding: '1rem',
        },
    };

    return (
        <ButtonStyled
            style={{
                ...variantStyles[variant],
                ...sizeStyles[size],
            }}
            onClick={onClick}
        >
            {children}
        </ButtonStyled>
    );
}
