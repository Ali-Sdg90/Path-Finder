import React, { useContext, useRef } from "react";
import { BaseContext } from "./../store/BaseContextProvider";
import Cell from "./Cell";
import Header from "./Header";
import Footer from "./Footer";
import SiteSettings from "./SiteSettings";

const Base = () => {
    const { baseData, setBaseData, isClicked, setIsClicked } =
        useContext(BaseContext);

    const stopRef = useRef(false);

    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const fillCell = async (x, y, data) => {
        if (stopRef.current) {
            stopRef.current = false;
            return;
        }

        if (
            y < 0 ||
            y >= data.length ||
            x < 0 ||
            x >= data[0].length ||
            data[y][x] === 1 ||
            data[y][x] === 2
        ) {
            return;
        }

        data[y][x] = 1;
        setBaseData(data.map((row) => [...row]));

        await sleep(0);

        const directions = weightedDirections({
            right: 20,
            left: 1,
            down: 20,
            up: 1,
        });

        function weightedDirections(weights) {
            const dirMap = {
                right: [1, 0],
                left: [-1, 0],
                down: [0, 1],
                up: [0, -1],
            };

            return Object.entries(weights).flatMap(([key, count]) =>
                Array(count).fill(dirMap[key])
            );
        }

        for (let [dx, dy] of shuffleArray(directions)) {
            await fillCell(x + dx, y + dy, data);
        }
    };

    const shuffleArray = (array) => {
        const arr = [...array];

        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }

        return arr;
    };

    const handleCellClick = (x, y) => {
        if (!isClicked) {
            stopRef.current = false;

            const dataCopy = baseData.map((row) => [...row]);
            fillCell(x, y, dataCopy);
            setIsClicked(true);
        }
    };

    // const stopFill = () => {
    //     stopRef.current = true;
    // };

    return (
        <div>
            <Header />

            <div className="base-container">
                <div className="base-box">
                    {baseData.map((row, rowIndex) => (
                        <div key={rowIndex} className="base-row">
                            {row.map((cell, cellIndex) => (
                                <Cell
                                    key={cellIndex}
                                    xValue={cellIndex}
                                    yValue={rowIndex}
                                    handleCellClick={handleCellClick}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <SiteSettings />

            <Footer />
        </div>
    );
};

export default Base;
