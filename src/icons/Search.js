/* @flow */
/* Generated by ./script/iconify */
/* eslint-disable max-len */


import React from "react";

export default class SvgIconSearch extends React.Component {
    render(): ReactElement {
        const {className, ...rest} = this.props;
        const classes = `SearchIcon allow-override-color Icon SvgIcon ${className || ""}`;

        return (
            <span
                {...rest}
                dangerouslySetInnerHTML={{__html: `
                    <svg class='${classes}' version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 64 64" enable-background="new 0 0 64 64"  xml:space="preserve"><g id="search"><path fill="#231F20"  d="M48.981,46.911L40.9,38.797c2.086-2.565,3.341-5.837,3.341-9.399c0-8.211-6.653-14.89-14.832-14.89 c-8.178,0-14.831,6.68-14.831,14.89c0,8.21,6.653,14.891,14.831,14.891c3.548,0,6.806-1.26,9.362-3.354l8.081,8.114 c0.294,0.295,0.68,0.443,1.065,0.443s0.771-0.148,1.065-0.443C49.569,48.459,49.569,47.501,48.981,46.911z M29.409,41.265 c-6.517,0-11.819-5.323-11.819-11.866c0-6.543,5.302-11.866,11.819-11.866c6.518,0,11.82,5.323,11.82,11.866 C41.229,35.942,35.927,41.265,29.409,41.265z"></path></g><g id="Layer_1"></g></svg>
                `}}
            />
        );
    }
}
