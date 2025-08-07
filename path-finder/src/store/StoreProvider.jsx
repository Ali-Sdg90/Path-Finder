import React from "react";
import BaseContextProvider from "./BaseContextProvider";

const StoreProvider = ({ children }) => {
    return (
        <BaseContextProvider>
            <>{children}</>
        </BaseContextProvider>
    );
};

export default StoreProvider;
