import styled from 'styled-components';

import '../../styles/variables.css';

const HeaderStyled = styled.header`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    height: var(--headerHeight);
    max-height: var(--headerHeight);
    padding: 12px 0;
    position: relative;
    & img {
        max-width: 180px;
        height: auto;
        max-height: var(--headerHeight);
        margin: 0 auto;
    }
`;

export { HeaderStyled };
