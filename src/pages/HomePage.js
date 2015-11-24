/* @flow */

import React from "react";
import { History } from "react-router";
import reactMixin from "react-mixin";

import HeaderBar from "../components/HeaderBar";
import NavBar from "../components/NavBar";
import icons from "../icons";

/*::`*/@reactMixin.decorate(History)/*::`;*/
class HomePage extends React.Component {

    onSearchSubmit(event: Event): void {
        event.preventDefault();

        const search = this.refs.search.value;

        if (search == "") {
            /* FIXME: should this give some user feedback? */
            return;
        }

        this.props.history.pushState(
            null,
            `/search/${encodeURIComponent(search)}`,
            {}
        );
    }

    render(): ReactElement {
        return (
            <div className="HomePage">
                <div className="header">
                    <div className="branding-container">
                        <div className="logo">
                            <icons.Logotype
                                role="img"
                                aria-label="Ask Izzy"
                            />
                        </div>

                        <p className="branding-copy">
                            The A to Z directory of homeless help information
                        </p>
                    </div>
                    <HeaderBar
                        primaryText="What do you need?"
                    >
                        <form
                            className="search"
                            onSubmit={this.onSearchSubmit.bind(this)}
                        >
                            <input
                                ref="search"
                                type="search"
                                placeholder="Search"
                            />
                            <icons.Search
                                className="icon"
                                onTouchTap={this.onSearchSubmit.bind(this)}
                            />
                        </form>
                    </HeaderBar>
                </div>

                <div className="body">
                    <NavBar />
                </div>
            </div>
        );
    }

}

export default HomePage;
