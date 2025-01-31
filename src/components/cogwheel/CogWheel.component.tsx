import React from 'react';

import { CogWheelStyled } from './CogWheel.styled';
import { CogIconComponent } from './CogIcon.component';
import { JSXElement } from '../../shared/models';
import { PrimaryAccentColorBlue } from '../../shared/costants';

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
