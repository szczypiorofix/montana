import { ButtonStyled } from './Button.styled';
import { CSSProperties, PropsWithChildren } from 'react';

type ButtonProps = PropsWithChildren<{
    onClick?: () => void;
    variant: 'primary' | 'secondary';
    size: 'sm' | 'md' | 'lg';
}>;

export const ButtonComponent = ({
    children,
    onClick,
    variant = 'primary',
    size = 'md',
}: ButtonProps) => {
    const variantStyles: Record<ButtonProps['variant'], CSSProperties> = {
        primary: {
            backgroundColor: 'blue',
        },
        secondary: {
            backgroundColor: 'gray',
        },
    };

    const sizeStyles: Record<ButtonProps['size'], CSSProperties> = {
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
                outline: 'none',
                border: 'none',
                cursor: 'pointer',
                borderRadius: 10,
                ...variantStyles[variant],
                ...sizeStyles[size],
            }}
            onClick={onClick}
        >
            {children}
        </ButtonStyled>
    );
};
