/* @flow */
/**
 * Test service provisions
 */

/* eslint-env node, mocha */
/* eslint-disable prefer-arrow-callback */

import assert from "assert";
import fs from "fs";
import yaml from "js-yaml";

import serviceProvisions from "../src/constants/service-provisions";

// import the test cases
const tests = yaml.safeLoad(
    fs.readFileSync("./test/service-provisions.yaml", "utf8")
);

describe("Service Provisions", function() {
    tests.tests.forEach(
        test => it(test.description, () => {
            let provides = [
                /*::`*/
                for (provision of serviceProvisions)
                if (provision.match(test.description))
                provision.name
                /*::`*/
            ];

            assert.deepEqual(provides, test.provides);
        }));
});
