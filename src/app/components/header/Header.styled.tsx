import styled from 'styled-components';

const HeaderStyled = styled.header<{$smallLogo: boolean}>`
    display: flex;
    justify-content: flex-start;
    height: ${(props) => props.$smallLogo ? "var(--logoHeightSmall)" : "var(--logoHeightNormal)" };
    max-height: ${(props) => props.$smallLogo ? "var(--logoHeightSmall)" : "var(--logoHeightNormal)" };
    position: relative;
    transition: height 0.2s linear;
    & img {
        max-width: 180px;
        height: auto;
        max-height: ${(props) => props.$smallLogo ? "var(--logoHeightSmall)" : "var(--logoHeightNormal)" };
        margin: 0 auto;
    }
`;

export { HeaderStyled };
