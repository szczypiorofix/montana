import styled from 'styled-components';

import '../../styles/variables.css';

const InnerContentStyled = styled.div`
    height: 100%;
    padding: 0;
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 900px;
    max-width: 75%;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin: 0 auto;
    font-size: 32px;
`;

export { InnerContentStyled };
