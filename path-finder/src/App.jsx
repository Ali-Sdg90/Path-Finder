import React from "react";
import StoreProvider from "./store/StoreProvider";
import Base from "./components/Base";

const App = () => {
    return (
        <StoreProvider>
            <Base/>
        </StoreProvider>
    );
};

export default App;
