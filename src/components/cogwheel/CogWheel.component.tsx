import React from 'react';

import { PrimaryAccentColorBlue } from '../../shared/costants';
import { JSXElement } from '../../shared/models';
import { CogIconComponent } from './CogIcon.component';
import { CogWheelStyled } from './CogWheel.styled';

export const CogWheelComponent: () => JSXElement = (): JSXElement => {
    return (
        <CogWheelStyled>
            <CogIconComponent
                color={PrimaryAccentColorBlue}
                animating={true}
                size={500}
            />
        </CogWheelStyled>
    );
};
