import styled from 'styled-components';

const ContainerStyled = styled.div<{
    $fullWidth?: boolean
}>`
    width: ${(props) => props.$fullWidth ? "100%" : "80%" };
    margin: ${(props) => props.$fullWidth ? "auto" : "0 auto" };
`;

export { ContainerStyled };
