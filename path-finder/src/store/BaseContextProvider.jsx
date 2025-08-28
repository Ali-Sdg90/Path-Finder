import React, { createContext, useEffect, useState } from "react";

export const BaseContext = createContext();

const generateRandomBase = (rows, cols, wallCount) => {
    const grid = Array.from({ length: rows }, () =>
        Array.from({ length: cols }, () => 0)
    );

    let placed = 0;
    while (placed < wallCount) {
        const x = Math.floor(Math.random() * cols);
        const y = Math.floor(Math.random() * rows);

        if (grid[y][x] === 0) {
            grid[y][x] = 2;
            placed++;
        }
    }

    return grid;
};

const BaseContextProvider = ({ children }) => {
    const [baseSize, setBaseSize] = useState(100);
    const [wallCount, setWallCount] = useState(1400);

    const [baseData, setBaseData] = useState(() =>
        generateRandomBase(baseSize, baseSize, wallCount)
    );

    useEffect(() => {
        setBaseData(generateRandomBase(baseSize, baseSize, wallCount));
    }, [baseSize, wallCount]);

    useEffect(() => {
        // console.log("Base updated", baseData);
    }, [baseData]);

    return (
        <BaseContext.Provider
            value={{
                baseData,
                setBaseData,
                baseSize,
                setBaseSize,
                wallCount,
                setWallCount,
            }}
        >
            {children}
        </BaseContext.Provider>
    );
};

export default BaseContextProvider;
