import React, { useContext } from "react";
import { BaseContext } from "./../store/BaseContextProvider";

const Cell = ({ xValue, yValue, handleCellClick }) => {
    const { baseData } = useContext(BaseContext);
    const cellValue = baseData[yValue][xValue];

    let className = "cell";
    if (cellValue === 1) className += " active";
    else if (cellValue === 2) className += " wall";

    return (
        <div
            className={className}
            onClick={() => handleCellClick(xValue, yValue)}
        />
    );
};

export default Cell;
