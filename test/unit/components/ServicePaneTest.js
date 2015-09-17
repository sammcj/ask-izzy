import assert from "assert";
import TestUtils from 'react/lib/ReactTestUtils';
import React from 'react';
import vdom from 'react-vdom';

import TestComponent from "../../support/TestComponent";

import ServicePane from "../../../src/components/ServicePane";
import { Service } from "../../../src/iss";

describe('ServicePane', function() {
    describe('with service provisions', function() {
        var sample, subject;

        beforeEach(function() {
            sample = Object.assign(new Service(), {
                description: '',
                now_open: {},
                opening_hours: [],
                _serviceProvisions: [{}]
            });
            var component = <TestComponent
                child={ServicePane}
                childProps={{service: sample}}>
            </TestComponent>;
            subject = vdom(component, {}, {muiTheme: {}});
        })

        it('renders the service provisions header', function() {
            // var headers = TestUtils.scryRenderedDOMComponentsWithClass(
            //     subject,
            //     'serviceProvisions-header',
            // );
            console.log(JSON.stringify(subject));

            assert.equal(headers.length, 1);
            assert.equal(headers[0].innerHTML, 'What you can get here');
            assert.equal(headers[0].tagName, 'h3');
        });
    });

    describe('with no service provisions', function() {
        xit("doesn't render the service provisions header", function() {
            assert.equal(1, 1);
        });
    });
});
