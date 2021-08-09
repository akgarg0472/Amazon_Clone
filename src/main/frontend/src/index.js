import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {BrowserRouter} from "react-router-dom";
import reducer, {initialState} from "./reducer";
import {StateProvider} from "./StateProvider";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <StateProvider initialState={initialState} reducer={reducer}>
                <App/>
            </StateProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();
