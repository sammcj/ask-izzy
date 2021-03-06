/* @flow */
/* Generated by ./script/iconify */
/* eslint-disable max-len */

import React from "react";
import classnames from "classnames";

export default class SvgIconLogoShadow extends React.Component {
    render(): ReactElement {
        const {className, ...rest} = this.props;
        const classes = classnames(
            "LogoShadowIcon",
            "allow-override-color",
            "Icon",
            "SvgIcon",
            className
        );

        return (
            <span
                {...rest}
                dangerouslySetInnerHTML={{__html: `
                    <svg class='${classes}' version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 64 64" enable-background="new 0 0 64 64"  xml:space="preserve"><g id="logo-shadow"><ellipse fill="#231F20"  cx="32" cy="55.125" rx="26.875" ry="4.125"></ellipse></g><g id="Layer_1"></g></svg>
                `}}
            />
        );
    }
}
