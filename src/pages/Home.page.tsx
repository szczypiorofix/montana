import { ContainerComponent } from '../components/container/Container.component.';
import { JSXElement } from '../shared/models';

export const Home: () => JSXElement = (): JSXElement => {
    return (
        <ContainerComponent>
            <p>Home components</p>
            <div>Coś o projektach ...</div>
        </ContainerComponent>
    );
};
