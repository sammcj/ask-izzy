/* @flow */
/* Generated by ./script/iconify */
/* eslint-disable max-len */


import React from "react";

export default class SvgIconHealth extends React.Component {
    render(): ReactElement {
        const {className, ...rest} = this.props;
        const classes = `HealthIcon allow-override-color Icon SvgIcon ${className || ""}`;

        return (
            <span
                {...rest}
                dangerouslySetInnerHTML={{__html: `
                    <svg class='${classes}' version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 64 64" enable-background="new 0 0 64 64"  xml:space="preserve"><g id="health"><g id="XMLID_616_"><g id="XMLID_618_"><path fill="#231F20"  d="M31.844,58.986c-0.215,0-0.431-0.046-0.631-0.139c-0.261-0.122-6.48-3.032-12.784-8.433 C9.948,43.149,5.465,34.841,5.465,26.389c0-8.19,6.737-15.375,14.418-15.375c5.205,0,9.495,3.42,11.96,7.275 c2.466-3.855,6.755-7.275,11.961-7.275c7.68,0,14.417,7.185,14.417,15.375c0,8.452-4.482,16.761-12.963,24.026 c-6.304,5.4-12.523,8.311-12.784,8.433C32.274,58.94,32.059,58.986,31.844,58.986z M19.883,14.014 c-6.083,0-11.418,5.782-11.418,12.375c0,16.673,19.582,27.486,23.378,29.424c3.796-1.938,23.378-12.751,23.378-29.424 c0-6.593-5.335-12.375-11.417-12.375c-5.003,0-8.988,4.185-10.572,8.072c-0.23,0.564-0.779,0.934-1.389,0.934 s-1.159-0.369-1.389-0.934C28.871,18.198,24.887,14.014,19.883,14.014z"></path></g><g id="XMLID_617_"><path fill="#231F20"  d="M32.731,26.427c-0.754,0-1.404-0.567-1.489-1.335c-0.578-5.229-5.558-11.078-11.359-11.078 c-0.829,0-1.5-0.672-1.5-1.5s0.671-1.5,1.5-1.5c7.557,0,13.623,7.246,14.341,13.748c0.091,0.824-0.502,1.565-1.326,1.656 C32.842,26.424,32.787,26.427,32.731,26.427z"></path></g></g></g><g id="Layer_1"></g></svg>
                `}}
            />
        );
    }
}
