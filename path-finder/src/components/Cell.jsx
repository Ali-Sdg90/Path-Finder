import React from "react";

const Cell = ({ xValue, yValue, isActive, handleCellClick }) => {
    return (
        <div
            className="base-cell"
            onClick={() => {
                handleCellClick(xValue, yValue);
            }}
            style={
                isActive
                    ? { backgroundColor: "blue" }
                    : { backgroundColor: "gray" }
            }
        >
            <>{`(${xValue}, ${yValue})`}</>
        </div>
    );
};

export default Cell;
