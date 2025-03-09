import styled from 'styled-components';

const ContainerStyled = styled.div<{ $toTop: boolean }>`
    width: 100%;
    display: block;
    position: absolute;
    top: ${(props) => (props.$toTop ? '-20px' : '20px')};
    z-index: 1;
    opacity: 0;
    animation: fadeIn 1s forwards;

    @keyframes fadeIn {
        to {
            opacity: 1;
            top: 0;
        }
    }
`;

export { ContainerStyled };
