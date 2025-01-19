import React from 'react';

import { ButtonComponentProps } from '../../models';
import { ButtonStyled } from './Button.styled';

export const ButtonComponent = (props: ButtonComponentProps): React.JSX.Element => {
    return <ButtonStyled>
        { props.contentText }
    </ButtonStyled>
}
