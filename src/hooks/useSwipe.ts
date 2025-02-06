import React, { useState } from 'react';

import { Point } from '../shared/models/Point.model';

export interface UseSwipeProps {
    returnDelta(delta: Point): void;
}

export const useSwipe: (
    props: UseSwipeProps
) => [(event: React.TouchEvent) => void, (event: React.TouchEvent) => void] = (
    props: UseSwipeProps
): [(event: React.TouchEvent) => void, (event: React.TouchEvent) => void] => {
    const [start, setStart] = useState<Point>({ x: 0, y: 0 });
    const swipeStart = (startPointEvent: React.TouchEvent) => {
        setStart({
            x: startPointEvent.touches[0].clientX,
            y: startPointEvent.touches[0].clientY,
        });
    };
    const swipeEnd = (endPointEvent: React.TouchEvent) => {
        const endX = endPointEvent.changedTouches[0].clientX;
        const endY = endPointEvent.changedTouches[0].clientY;
        const deltaX = endX - start.x;
        const deltaY = endY - start.y;
        props.returnDelta({
            x: deltaX,
            y: deltaY,
        });
    };
    return [swipeStart, swipeEnd];
};
