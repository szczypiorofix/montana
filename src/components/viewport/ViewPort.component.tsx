import React, { useEffect } from 'react';
import { ViewPortStyled, ViewPortWrapperStyled } from "./ViewPort.styled";
import { ViewPortComponentProps } from "../../models";
import { JSXElement } from "../../shared/models";
import { useGlobalAppContext } from "../../storage/AppContext";

enum ScrollType {
    NONE = 0,
    UP = -1,
    DOWN = 1
}

export const ViewPortComponent: (props: ViewPortComponentProps) => JSXElement = (props: ViewPortComponentProps): JSXElement => {
    const { state, setNextAppView, setPrevAppView } = useGlobalAppContext();
    const [ scrollType, setScrollType ] = React.useState<ScrollType>(ScrollType.NONE);

    useEffect(() => {
        if (scrollType === ScrollType.UP) {
            setPrevAppView(state);
            setScrollType(ScrollType.NONE);
        }
        if (scrollType === ScrollType.DOWN) {
            setNextAppView(state);
            setScrollType(ScrollType.NONE);
        }
    }, [ scrollType ]);

    const determineScrollType = (deltaY: number): ScrollType => {
        if (deltaY > 0) {
            return ScrollType.DOWN;
        }
        if (deltaY < 0) {
            return ScrollType.UP;
        }
        return ScrollType.NONE;
    };

    return <ViewPortStyled>
        <ViewPortWrapperStyled
            onWheel={(event) => {
                setScrollType(determineScrollType(event.deltaY));
            }}
        >
            { props.children }
            <div>
                Scroll: { scrollType }
            </div>
        </ViewPortWrapperStyled>
    </ViewPortStyled>;
};
