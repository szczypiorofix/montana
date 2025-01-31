import React, { useEffect, useState } from 'react';

import { useSwipe } from '../../hooks/useSwipe';
import { ViewPortComponentProps } from '../../models';
import { ScrollType } from '../../shared/enums';
import { JSXElement } from '../../shared/models';
import { Point } from '../../shared/models/Point.model';
import { useGlobalAppContext } from '../../storage/AppContext';
import { ViewPortStyled, ViewPortWrapperStyled } from './ViewPort.styled';

export const ViewPortComponent: (
    props: ViewPortComponentProps
) => JSXElement = (props: ViewPortComponentProps): JSXElement => {
    const { state, setNextAppView, setPrevAppView } = useGlobalAppContext();
    const [scrollType, setScrollType] = useState<ScrollType>(ScrollType.NONE);
    const [startSwipeEvent, endSwipeEvent] = useSwipe({
        returnDelta(delta: Point) {
            setScrollType(determineScrollType(-delta.y));
        },
    });

    useEffect(() => {
        if (scrollType === ScrollType.UP) {
            setPrevAppView(state);
            setScrollType(ScrollType.NONE);
        }
        if (scrollType === ScrollType.DOWN) {
            setNextAppView(state);
            setScrollType(ScrollType.NONE);
        }
    }, [scrollType, setNextAppView, setPrevAppView, state]);

    const determineScrollType = (deltaY: number): ScrollType => {
        if (deltaY > 0) {
            return ScrollType.DOWN;
        }
        if (deltaY < 0) {
            return ScrollType.UP;
        }
        return ScrollType.NONE;
    };

    return (
        <ViewPortStyled>
            <ViewPortWrapperStyled
                onWheel={(event) => {
                    setScrollType(determineScrollType(event.deltaY));
                }}
                onTouchStart={startSwipeEvent}
                onTouchEnd={endSwipeEvent}
            >
                {props.children}
            </ViewPortWrapperStyled>
        </ViewPortStyled>
    );
};
