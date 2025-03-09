import { ContainerComponentProps } from '../../models';
import { JSXElement } from '../../shared/models';
import { ContainerStyled } from './Container.styled';
import { useGlobalAppContext } from '../../storage/AppContext.tsx';

export const ContainerComponent: (
    props: ContainerComponentProps
) => JSXElement = (props: ContainerComponentProps): JSXElement => {
    const { state } = useGlobalAppContext();
    return (
        <ContainerStyled $toTop={state.animationToTop}>
            {props.children}
        </ContainerStyled>
    );
};
