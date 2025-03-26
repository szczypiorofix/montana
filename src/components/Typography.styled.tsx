import styled, { css } from 'styled-components';

const textAlignStyles = css<{
    $textAlign: string
}>`
  text-align: ${(props) => props.$textAlign || 'left'};
`;

const PartHeader = styled.h1`
    font-size: 1.2em;
    text-align: center;
`;

const H1Styled = styled.h1<{
    $textAlign: string
}>`
    font-size: 1.2em;
    ${textAlignStyles};
`;

const H2Styled = styled.h2<{
    $textAlign: string
}>`
    font-size: 0.9em;
    ${textAlignStyles};
`;

const H3Styled = styled.h3<{
    $textAlign: string
}>`
    font-size: 0.6em;
    ${textAlignStyles};
`;

const TechStackUlStyled = styled.ul`
    font-size: 0.6em;
    list-style-type: none;
    padding-left: 0;
    margin-top: 36px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

const TechStackLiStyled = styled.li`
    padding-top: 6px;
    padding-bottom: 6px;
    user-select: none;
    color: var(--Mindaro);
    &:before {
        content: '[ ';
        color: var(--Olivine);
    }
    &:after {
        content: ' ]';
        color: var(--Olivine);
    }
`;

export { H1Styled, H2Styled, H3Styled, PartHeader, TechStackUlStyled, TechStackLiStyled };

