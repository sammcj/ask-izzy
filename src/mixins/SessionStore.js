/**
 * Mix this.storage onto the given class
 */
/* @flow */
import Storage from "../storage";

export default function mix(klass: Function) {
    klass.prototype.storage = Storage; // Instance property
    klass.storage = Storage; // Static property
}
