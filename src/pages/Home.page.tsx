import { JSXElement } from "../shared/models";
import { ContainerComponent } from "../components/container/Container.component.";

export const Home: () => JSXElement = (): JSXElement  => {
    return (
        <ContainerComponent>
            <p>Home components</p>
            <div>
                Coś o projektach ...
            </div>
        </ContainerComponent>
    );
};
