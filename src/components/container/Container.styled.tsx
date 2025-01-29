import styled from 'styled-components';

const ContainerStyled = styled.div`
    width: 100%;
    display: block;
    z-index: 1;
    opacity: 0;
    animation: fadeIn 2s forwards;

    @keyframes fadeIn {
        to {
            opacity: 1;
        }
    }
`;

export { ContainerStyled };