/* @flow */

import React from 'react';
import mui from "material-ui";

import theme from "../../src/constants/theme";

var ThemeManager = new mui.Styles.ThemeManager();
ThemeManager.setTheme(theme);
ThemeManager.contentFontFamily =
    'Gotham Rounded A,Gotham Rounded B,sans-serif';

export default class TestComponent extends React.Component {

    // flow:disable
    static childContextTypes = {
        muiTheme: React.PropTypes.object,
    };

    getChildContext(): Object {
        return {
            muiTheme: ThemeManager.getCurrentTheme(),
        };
    }

    render(): React.Element {
        return (
            <div class="TestComponent">
                <this.props.child {...this.props.childProps} />
            </div>
        );
    }

}
