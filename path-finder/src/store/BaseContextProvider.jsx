import React, { createContext, useEffect, useState } from "react";

export const BaseContext = createContext();

const BaseContextProvider = ({ children }) => {
    const [baseData, setBaseData] = useState(() => {
        const data = [];
        for (let i = 0; i < 10; i++) {
            data.push(Array.from({ length: 10 }, () => 0));
        }
        return data;
    });

    useEffect(() => {
        // console.log("Change in Base", baseData);
    }, [baseData]);

    return (
        <BaseContext.Provider value={{ baseData, setBaseData }}>
            {children}
        </BaseContext.Provider>
    );
};

export default BaseContextProvider;
