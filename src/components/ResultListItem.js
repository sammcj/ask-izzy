/* @flow */

import React from "react";
import Router from "react-router";
import colors from "../constants/theme";
import fixtures from "../../fixtures/services";
import mui from "material-ui";
import reactMixin from "react-mixin";
import _ from "underscore";

import icons from "../icons";
import iss from '../iss';
import OpeningTimes from "./OpeningTimes";
import TransportTime from "./TransportTime";

var palette = colors.getPalette();

/*::`*/@reactMixin.decorate(Router.Navigation)/*::`;*/
class ResultListItem extends React.Component {
    // flow:disable not supported yet
    static propTypes = {
        object: React.PropTypes.instanceOf(iss.Service).isRequired,
        nServiceProvisions: React.PropTypes.number,
    };

    // flow:disable not supported yet
    static sampleProps = {default: {object: fixtures.ixa}};

    // flow:disable
    static defaultProps =  {
        nServiceProvisions: 4,
    };

    /**
     * nMoreServiceProvisions:
     * The number of related services minus the 4 relatedServices.
     */
    /* flow:disable */
    get nMoreServiceProvisions(): number {
        return Math.max(0,
                        this.props.object.serviceProvisions.length -
                            this.props.nServiceProvisions);
    }

    render(): React.Element {
        var {
            object,
        } = this.props;

        return (
            <mui.ListItem
                className="ResultListItem"
                containerElement={
                    <Router.Link
                        to="service"
                        params={{slug: object.slug}}
                    />
                }

                rightIcon={
                    <icons.Chevron />
                }

                disableFocusRipple={true}
                disableTouchRipple={true}
            >
                <h2 className="name">{object.name}</h2>
                <div className="site_name">{object.site.name}</div>
                <OpeningTimes className="opening_hours" object={object} />
                <TransportTime object={object} />
                { this.props.nServiceProvisions > 0 ?
                    <div>
                        <ul className="related">{
                            object.serviceProvisions
                                .slice(0, this.props.nServiceProvisions)
                                .map((service, index) =>
                                    <li className="provision"
                                        key={index}
                                    >
                                        {service}
                                    </li>
                                )
                        }</ul>
                        { this.nMoreServiceProvisions > 0 ?
                            <div>
                                {this.nMoreServiceProvisions} more…
                            </div>
                        :
                            ''
                        }
                    </div>
                :
                    ''
                }
            </mui.ListItem>
        );
    }
}

export default ResultListItem;
