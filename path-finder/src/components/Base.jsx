import React, { useContext } from "react";
import { BaseContext } from "./../store/BaseContextProvider";
import Cell from "./Cell";

const Base = () => {
    const { baseData, setBaseData } = useContext(BaseContext);

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
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Base;
