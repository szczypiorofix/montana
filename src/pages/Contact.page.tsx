import React from 'react';

import { ContainerComponent } from '../components/container/Container.component.';
import { JSXElement } from '../shared/models';

export const Contact: () => JSXElement = (): JSXElement => {
    return (
        <ContainerComponent>
            <p>Contact components</p>
        </ContainerComponent>
    );
};
