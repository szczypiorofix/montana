import React from 'react';

import { JSXElement } from '../../shared/models';
import { CogIconContainer, CogIconStyled } from './CogIcon.styled';

export interface CogIconComponentProps {
    color: string;
    animating?: boolean;
    size?: number;
}

export const CogIconComponent: (props: CogIconComponentProps) => JSXElement = (
    props: CogIconComponentProps
): JSXElement => {
    return (
        <CogIconContainer>
            <CogIconStyled
                $color={props.color}
                $rotating={props.animating || false}
                $width={props.size}
                $height={props.size}
                width='68.0mm'
                height='68.0mm'
                viewBox='0 0 68.0 68.0'
                version='1.1'
                id='svg301'
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/2000/svg'
            >
                <defs id='defs298' />
                <g id='layer1'>
                    <path
                        id='path277'
                        d='m 35.125026,68.145348 -0.150585,-18.5466 A 15.587027,15.522616 0 0 1 19.270758,34.202618 15.587027,15.522616 0 0 1 34.722391,18.555628 l -0.15058,-18.54605813 -3.293866,0.02653 c -0.95156,0.0077 -1.709248,1.03124003 -1.698989,2.29474303 l 0.05989,7.3757567 A 25.049298,24.945786 0 0 0 20.89627,13.382158 L 15.62621,8.2180546 C 14.721817,7.3318606 13.456435,7.1624596 12.789027,7.8379526 L 8.1558296,12.527233 c -0.667413,0.675491 -0.476871,1.93274 0.427513,2.81894 L 13.8562,20.513008 a 25.049298,24.945786 0 0 0 -3.577201,8.76221 l -7.3809023,0.0594 c -1.268732,0.0102 -2.28418499,0.78123 -2.27649199,1.72885 l 0.05342,6.57871 c 0.0077,0.94763 1.03553199,1.70218 2.30426199,1.69197 l 7.4063673,-0.0596 a 25.049298,24.945786 0 0 0 3.690806,8.70645 l -5.1855234,5.24828 c -0.889875,0.90065 -1.059981,2.1608 -0.381683,2.82546 l 4.7087314,4.61407 c 0.67829,0.66464 1.940758,0.47489 2.830641,-0.42576 l 5.188266,-5.25107 a 25.049298,24.945786 0 0 0 8.798572,3.56242 l 0.05968,7.35041 c 0.01027,1.2635 0.784471,2.27474 1.736028,2.26708 z M 34.571811,0.00956987 V 18.556308 a 15.522223,15.522223 0 0 1 15.513404,15.52168 15.522223,15.522223 0 0 1 -15.513404,15.52167 v 18.5462 h 3.280281 c 0.947631,0 1.710422,-1.01742 1.710422,-2.28093 v -7.37582 a 24.945156,24.945156 0 0 0 8.735661,-3.60494 l 5.206227,5.20623 c 0.893436,0.89343 2.152148,1.07301 2.822222,0.40293 l 4.651697,-4.65171 c 0.67008,-0.67007 0.490499,-1.92878 -0.402929,-2.82222 l -5.208989,-5.20899 a 24.945156,24.945156 0 0 0 3.63306,-8.73289 h 7.350456 c 1.263494,0 2.280924,-0.76279 2.280924,-1.71042 v -6.57877 c 0,-0.94763 -1.01743,-1.71042 -2.280924,-1.71042 h -7.375813 a 24.945156,24.945156 0 0 0 -3.604949,-8.73566 l 5.20623,-5.206227 c 0.893428,-0.893431 1.073009,-2.152139 0.402928,-2.822219 L 56.326619,7.6620906 c -0.670075,-0.670069 -1.928786,-0.490491 -2.822223,0.40294 L 48.295412,13.274021 A 24.945156,24.945156 0 0 0 39.562508,9.6409596 V 2.2904989 c 0,-1.263509 -0.76279,-2.28092903 -1.710422,-2.28092903 z'
                    />
                </g>
            </CogIconStyled>
        </CogIconContainer>
    );
};
