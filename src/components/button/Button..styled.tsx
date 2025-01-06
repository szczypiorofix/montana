import React from 'react';

import { ButtonStyled } from './Button.component';
import { ButtonComponentProps } from '../../models';

export const ButtonComponent = (props: ButtonComponentProps): React.JSX.Element => {
    return <ButtonStyled>
        {props.contentText}
    </ButtonStyled>
}
