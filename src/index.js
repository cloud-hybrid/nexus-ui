import "./index.scss";

import React, {
    Suspense,
    lazy as Import
} from "react";

import ReactDOM from "react-dom";

import Profile from './Vitals';

import { default as Global } from "./Globals";

import {
    BrowserRouter as Navigator,
    HashRouter as Router
} from "react-router-dom";

const Application = Import(() => {
    return import("./App").then(
        (SPA) => SPA
    );
});

const DOM = () => {
    return (
        <React.StrictMode>
            <Navigator forceRefresh={ false }>
                <Router>
                    <Suspense fallback={ (<></>) }>
                        <Application />
                    </Suspense>
                </Router>
            </Navigator>
        </React.StrictMode>
    );
};

ReactDOM.render((<DOM />), document
    .getElementById("Application")
);

import("./Worker.js").then((Module) => {
    Module.unregister();
}).finally(() => Profile());
