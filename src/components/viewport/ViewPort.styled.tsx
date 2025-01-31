import styled from 'styled-components';

import '../../styles/variables.css';

const ViewPortStyled = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    box-shadow: 0 0 45px 5px var(--PrimaryDarkColor);
    background-color: var(--BackgroundCogWheelColor);
    color: var(--PrimaryWhiteColor);
    display: block;
    overflow: hidden;
`;

const ViewPortWrapperStyled = styled.div`
    position: relative;
    width: 1440px;
    max-width: 90%;
    height: 100%;
    margin: 0 auto;
    overflow: auto;

    &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        background-color: #f5f5f5;
    }

    &::-webkit-scrollbar {
        width: 12px;
        background-color: #f5f5f5;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: #555;
    }
`;

export { ViewPortStyled, ViewPortWrapperStyled };
