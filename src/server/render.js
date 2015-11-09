/* flow:disable */
// Express middleware to render the app server-side and expose its state
// to the client

import React from "react";
import ReactDOMServer from "react-dom/server";
import { match, RoutingContext } from "react-router";
import url from "url";
import routes from "../routes";

import HtmlDocument from "./HtmlDocument";

let webpackStats;

if (process.env.NODE_ENV === "production") {
    webpackStats = require("./webpack-stats.json");
}

export default function render(req, res, next) {
    try {
        // In development, reload webpack stats file on every request
        if (process.env.NODE_ENV === "development") {
            webpackStats = require("./webpack-stats.json");
            delete require.cache[require.resolve("./webpack-stats.json")];

            // Our Webpack setup writes complete URLs including
            // 'localhost' to 'webpack-stats.json'. To enable use
            // from other domains, we rewrite these asset links
            // to use the same domain as the original request.
            const replaceHostname = (assetUrl: string) => {
                let _url = url.parse(assetUrl);

                _url.host = `${req.hostname}:${_url.port || 80}`;
                return _url.format();
            }

            webpackStats.script = webpackStats.script.map(replaceHostname);
            webpackStats.css = webpackStats.css.map(replaceHostname);
        }

        match(
            { routes, location: url.parse(req.url) },
            (error, redirectLocation, renderProps) => {
                if (error) {
                    next(error);
                } else if (redirectLocation) {
                    res.redirect(
                        302,
                        redirectLocation.pathname +
                        redirectLocation.search
                    );
                } else if (renderProps) {
                    const markup = ReactDOMServer.renderToString(
                        <RoutingContext {...renderProps} />
                    );
                    // The application component is rendered to static markup
                    // and sent as response.
                    const html = ReactDOMServer.renderToStaticMarkup(
                      <HtmlDocument
                          markup={markup}
                          script={webpackStats.script}
                          css={webpackStats.css}
                      />
                    );
                    const doctype = "<!DOCTYPE html>";

                    res.send(doctype + html);
                } else {
                    res.status(404).send("Not found");
                }
            }
        )
    } catch (error) {
        next(error);
    }
}
