import styled from 'styled-components';
import { deviceSize } from '../../shared/costants/ResponsiveSizes.tsx';

const ViewPortStyled = styled.div`
    position: relative;
    display: block;
    width: 98%;
    margin: 0 auto;
    
    @media ${deviceSize.xs} {
        width: 92%;
    }
    @media ${deviceSize.sm} {
        width: 96%;
    }
    @media ${deviceSize.md} {
        width: 82%;
    }
    @media ${deviceSize.lg} {
        width: 72%;
    }
    @media ${deviceSize.xl} {
        width: 66%;
    }
    @media ${deviceSize.xxl} {
        width: 62%;
    }
`;

export { ViewPortStyled };
