/* @flow */

import React from "react";
import ReactDOM from "react-dom";
import Router from "react-router";
import createBrowserHistory from "history/lib/createBrowserHistory";
import injectTapEventPlugin from "react-tap-event-plugin";

import routes from "./routes";

// For onTouchTap: see https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

/*
 * If at any point there isn't a meaningful 'back',
 * go to the app homepage instead.
 *
 * We use a function instead of subclassing because
 * the builtins of `history` check that you're
 * calling them on the right object and bail
 * otherwise.
 */
function History() {
    let history = createBrowserHistory();
    let historyLength = parseInt(
        sessionStorage.getItem("historyLength") || ""
    ) || 0;

    function setHistoryLength(newLength: number): void {
        historyLength = newLength;
        sessionStorage.setItem("historyLength", `${newLength}`);
    }

    function goBack() {
        if (historyLength > 0) {
            setHistoryLength(historyLength - 1)
            history.goBack();
        } else {
            history.pushState(null, "/");
        }
    }

    function goForward() {
        setHistoryLength(historyLength - 1);
        history.goForward();
    }

    function pushState() {
        setHistoryLength(historyLength + 1);
        history.pushState(...arguments);
    }

    /* eslint-disable id-length */
    function go(num: number) {
        setHistoryLength(historyLength + num);
        history.go(num);
    }

    window._clear_history_testing = () => {
        history.go(-historyLength);
    }

    return {
        ...history,
        goBack,
        goForward,
        pushState,
        go,
    };
}

ReactDOM.render(
    <Router history={History()}>{routes}</Router>,
    document.getElementById("root")
)

const debugEvent = new Event("debug");

window.pi = function() {
    window.debugQueries = true;
    window.dispatchEvent(debugEvent);
}
