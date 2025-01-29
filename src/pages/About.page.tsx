import React from 'react';
import { JSXElement } from "../shared/models";
import { ContainerComponent } from "../components/container/Container.component.";

export const About: () => JSXElement = (): JSXElement => {
    return (
        <ContainerComponent>
            <p>About components</p>
        </ContainerComponent>
    );
};
