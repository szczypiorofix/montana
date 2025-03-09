import { screen, render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ButtonComponent } from './Button.component.tsx';

describe('ButtonComponent', () => {
    const clickButtonFunction = vi.fn();

    it('renders button element', () => {
        render(
            <ButtonComponent size={'sm'} variant={'primary'} onClick={() => {}}>
                Click me!
            </ButtonComponent>
        );
        expect(
            screen.getByRole('button', { name: /Click me!/i })
        ).toBeInTheDocument();
    });

    it('renders enabled button', () => {
        render(
            <ButtonComponent size={'sm'} variant={'primary'} onClick={() => {}}>
                Click me!
            </ButtonComponent>
        );
        const loginBtn = screen.getByRole('button', { name: /Click me!/i });
        expect(loginBtn).toBeInTheDocument();
        expect(loginBtn).not.toBeDisabled();
    });

    it('should call a function when button is clicked ', () => {
        render(
            <ButtonComponent
                size={'sm'}
                variant={'primary'}
                onClick={clickButtonFunction}
            >
                Click me!
            </ButtonComponent>
        );
        const loginBtn = screen.getByRole('button', { name: /Click me!/i });
        expect(loginBtn).toBeInTheDocument();
        expect(loginBtn).not.toBeDisabled();
    });
});
