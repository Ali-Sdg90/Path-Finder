import React, { createContext, useEffect, useRef, useState } from "react";

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
    const [color, setColor] = useState("#4a90e2");
    const [showBorders, setShowBorders] = useState(true);
    const [isClicked, setIsClicked] = useState(false);

    const [baseData, setBaseData] = useState(() =>
        generateRandomBase(baseSize, baseSize, wallCount)
    );

    const prevSize = useRef(baseSize);
    const prevWall = useRef(wallCount);

    const stopRef = useRef(false);

    useEffect(() => {
        document.documentElement.style.setProperty("--color", color);
    }, [color]);

    useEffect(() => {
        document.documentElement.style.setProperty(
            "--border",
            showBorders ? "1px solid #ccc" : "none"
        );
    }, [showBorders]);

    useEffect(() => {
        if (prevSize.current === baseSize && prevWall.current === wallCount) {
            return;
        }

        prevSize.current = baseSize;
        prevWall.current = wallCount;

        stopRef.current = true;

        setIsClicked(false);

        setBaseData(() => generateRandomBase(baseSize, baseSize, wallCount));
    }, [baseSize, wallCount]);

    return (
        <BaseContext.Provider
            value={{
                baseData,
                setBaseData,
                baseSize,
                setBaseSize,
                wallCount,
                setWallCount,
                color,
                setColor,
                showBorders,
                setShowBorders,
                isClicked,
                setIsClicked,
                stopRef,
            }}
        >
            {children}
        </BaseContext.Provider>
    );
};

export default BaseContextProvider;
