import React from 'react';

import { ContainerComponent } from '../components/container/Container.component.';
import { JSXElement } from '../shared/models';

export const About: () => JSXElement = (): JSXElement => {
    return (
        <ContainerComponent>
            <p>About components</p>
        </ContainerComponent>
    );
};
