/* @flow */
import { pad } from "underscore.string";

/* flow:disable cannot export polymorphic function */
export var Abn = SequenceCb(function Abn(idx: number): string {
    return pad(idx.toString(), 8, '0');
});

/* flow:disable cannot export polymorphic function */
export var PhoneNumber = SequenceCb(
    function PhoneNumber(idx: number): string {
        return pad(idx.toString(), 8, '0');
    }
);

/* flow:disable cannot export polymorphic function */
export var Email = SequenceCb(function Email(idx: number): string {
    return `email${idx}@dhs.gov.vic.au`;
});

/* flow:disable cannot export polymorphic function */
export var Id = SequenceCb(function Id(idx: number): string {
    return idx.toString();
});

/* flow:disable cannot export polymorphic function */
export var Url = SequenceCb(function Url(idx: number): string {
    return `https://${idx}.example.org`;
});

export function SequenceCb<U>(cb: (x: number) => U): () => U {
    // No depending on sequences in tests
    // Base number chosen to avoid collisions with existing fixtures.
    var idx = 8100100 + Math.ceil(Math.random() * 500);
    return function() {
        idx = idx + 1;
        return cb(idx);
    };
}

export function Sequence(): () => number {
    return SequenceCb(function(idx: number): number {
        return idx;
    });
}

export function Merge(defaults: Object, props: ?Object): Object {
    for (var key of Object.keys(defaults)) {
        if (props && props[key] != undefined) {
            defaults[key] = props[key];
        }
    }

    return defaults;
}
