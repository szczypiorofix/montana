import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ComponentProps } from 'react';
import { ButtonComponent } from '../components/button/Button.component.tsx';

type ButtonStoryProps = ComponentProps<typeof ButtonComponent> & {
    contentText: string;
};

const meta: Meta<ButtonStoryProps> = {
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
            options: ['xs', 'sm', 'md', 'lg'],
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

type Story = StoryObj<ButtonStoryProps>;

export const Primary: Story = {
    args: {
        contentText: 'Primary button content',
        variant: 'primary',
        size: 'md',
    },
    render: ({ contentText, ...args }) => {
        return <ButtonComponent {...args}>{contentText}</ButtonComponent>;
    },
};

export const Secondary: Story = {
    args: {
        contentText: 'Secondary button content',
        variant: 'secondary',
        size: 'md',
    },
    render: ({ contentText, ...args }) => {
        return <ButtonComponent {...args}>{contentText}</ButtonComponent>;
    },
};
