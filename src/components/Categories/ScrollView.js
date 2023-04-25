import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";

import Box from '@mui/material/Box'
import Paper from "@mui/material/Paper";

import { LeftArrow, RightArrow } from "./arrows";
import { Card } from "./Card";
import usePreventBodyScroll from "./usePreventBodyScroll";
// import "./globalStyles.css";
import "./hideScrollbar.css";

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

function onWheel(apiObj: scrollVisibilityApiType, ev: React.WheelEvent): void {
    const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

    if (isThouchpad) {
        ev.stopPropagation();
        return;
    }

    if (ev.deltaY < 0) {
        apiObj.scrollNext();
    } else if (ev.deltaY > 0) {
        apiObj.scrollPrev();
    }
}


function ScrollView({ foodItems }) {
    const { disableScroll, enableScroll } = usePreventBodyScroll();

    return (
        <>
            <Paper className="example">
                <Box onMouseEnter={disableScroll} onMouseLeave={enableScroll}>
                    <ScrollMenu
                        LeftArrow={LeftArrow}
                        RightArrow={RightArrow}
                        onWheel={onWheel}
                    >
                        {foodItems.map((item, index) => (
                            <Card
                                title={item.title}
                                imageSrc={item.imageSrc}
                                itemId={index}
                            />
                        ))}
                    </ScrollMenu>
                </Box>
            </Paper>
        </>
    );
}
export default ScrollView;

