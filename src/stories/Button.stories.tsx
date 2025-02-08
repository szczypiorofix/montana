import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ComponentProps } from 'react';
import { ButtonComponent } from '../components/button/Button.component.tsx';

type StoryProps = ComponentProps<typeof ButtonComponent> & {
    buttonText: string;
};

const meta: Meta<StoryProps> = {
    component: ButtonComponent,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            options: ['primary', 'secondary'],
            control: {
                type: 'select',
            },
        },
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'select',
            },
        },
    },
    args: {
        onClick: fn(),
    },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
    args: {
        buttonText: 'Hello',
        variant: 'primary',
        size: 'md',
    },
    render: ({ buttonText, ...args }) => {
        return <ButtonComponent {...args}>{buttonText}</ButtonComponent>;
    },
};

export const Secondary: Story = {
    args: {
        buttonText: 'Hello',
        variant: 'secondary',
        size: 'md',
    },
    render: ({ buttonText, ...args }) => {
        return <ButtonComponent {...args}>{buttonText}</ButtonComponent>;
    },
};
