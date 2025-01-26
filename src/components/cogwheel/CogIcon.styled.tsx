import styled, {keyframes} from 'styled-components';

const rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }
    15% {
        transform: rotate(90deg);
    }
    40% {
        transform: rotate(180deg);
    }
    75% {
        transform: rotate(270deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const CogIconStyled= styled.svg<{
    $color: string;
    $rotating: boolean;
    $height?: number;
    $width?: number;
}>`
    fill: ${props => props.$color || "black"};
    width: ${props => props.$width+"px" || "unset"};
    height: ${props => props.$height+"px" || "unset"};
    animation: ${ rotate } 12s infinite ease-in-out;
    ${props => props.$rotating === false && `animation: none;`}
`;

const CogIconContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    z-index: -10;
`;

export { CogIconStyled, CogIconContainer };