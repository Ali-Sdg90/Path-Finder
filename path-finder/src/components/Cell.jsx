import React, { useContext, useEffect } from "react";

import { BaseContext } from "./../store/BaseContextProvider";

const Cell = ({ xValue, yValue }) => {
    const { baseData, setBaseData } = useContext(BaseContext);

    useEffect(() => {
        if (baseData[yValue][xValue] === 1) {
            console.log(`Cell at (${xValue}, ${yValue}) is now active.`);

            cellPress();
        }
    }, [baseData[yValue][xValue]]);

    const cellPress = () => {
        if (baseData[yValue][xValue] === 1) {
            console.log(`Cell at (${xValue}, ${yValue}) is already active.`);
            return;
        }

        console.log(`Cell clicked at: (${xValue}, ${yValue})`);

        setBaseData((prevState) => {
            const newState = prevState.map((row) => [...row]);
            newState[yValue][xValue] = 1;
            return newState;
        });

        setTimeout(() => {
            setBaseData((prevState) => {
                const newState = prevState.map((row) => [...row]);
                newState[yValue][xValue + 1] = 1;

                console.log(`Cell at (${xValue + 1}, ${yValue}) activated.`);
                return newState;
            });
        }, 200);
    };

    return (
        <div
            className="base-cell"
            onClick={cellPress}
            style={
                baseData[yValue][xValue] === 1
                    ? { backgroundColor: "blue" }
                    : { backgroundColor: "gray" }
            }
        >
            <>{`(${xValue}, ${yValue})`}</>
        </div>
    );
};

export default Cell;
