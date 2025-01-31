import React from 'react';
import { JSXElement } from '../shared/models';
import { ContainerComponent } from '../components/container/Container.component.';

export const Contact: () => JSXElement = (): JSXElement => {
    return (
        <ContainerComponent>
            <p>Contact components</p>
        </ContainerComponent>
    );
};
