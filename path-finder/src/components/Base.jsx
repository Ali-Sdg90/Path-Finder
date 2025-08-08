import React, { useContext } from "react";
import { BaseContext } from "./../store/BaseContextProvider";
import Cell from "./Cell";

const Base = () => {
    const { baseData, setBaseData } = useContext(BaseContext);

    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const handleCellClick = async (x, y) => {
        if (baseData[y][x] === 1) {
            console.log(`Denied >> (${x}, ${y})`);
            return;
        }

        console.clear();
        console.log(`Click >> (${x}, ${y})`);

        let currentX = x;
        let currentY = y;

        for (
            let pointerDirection = 0;
            pointerDirection < 2;
            pointerDirection++
        ) {
            for (
                let pointerLocation = -1;
                pointerLocation < 2;
                pointerLocation += 2
            ) {
                setBaseData((prev) => {
                    const newState = prev.map((row) => [...row]);

                    let newX = currentX;
                    let newY = currentY;

                    if (pointerDirection) {
                        newX += pointerLocation;
                    } else {
                        newY += pointerLocation;
                    }

                    if (newState[newY][newX] === 1) {
                        console.log(`>> Break >> (${newX}, ${newY})`);
                        return prev;
                    }

                    console.log(`Update >> (${newX}, ${newY})`);
                    newState[newY][newX] = 1;

                    console.log(pointerDirection, pointerLocation);

                    return newState;
                });

                await sleep(200);
            }
        }

        console.log("Finished path");

        // await handleCellClick(5, 5);
    };

    return (
        <div>
            <h1>Base Component</h1>

            <div className="base-container">
                {baseData.map((row, rowIndex) => (
                    <div key={rowIndex} className="base-row">
                        {row.map((cell, cellIndex) => (
                            <Cell
                                key={cellIndex}
                                xValue={cellIndex}
                                yValue={rowIndex}
                                isActive={cell === 1}
                                handleCellClick={handleCellClick}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Base;
