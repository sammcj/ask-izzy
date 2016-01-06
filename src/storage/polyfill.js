/* @flow */

import ObjectStorage from "./memory";

// Adapted from https://github.com/unshiftio/sessionstorage/blob/master/index.js
function canUseStorageImpl(storageImpl: Storage): boolean {
    try {
        storageImpl.setItem("__TEST__", "__TEST__");
        return storageImpl.getItem("__TEST__") == "__TEST__";
    } catch (err) {
        return false;
    }
}

// Start with a sure thing and move on to more reliable stores
export let persistentStore = ObjectStorage();
export let sessionStore = ObjectStorage();

if ((typeof sessionStorage != "undefined") &&
    canUseStorageImpl(sessionStorage)) {
    // sessionStorage is available
    persistentStore = sessionStorage;
    sessionStore = sessionStorage;
}

// If we can use localStorage for a persistent store, do so.
if ((typeof localStorage != "undefined") &&
    canUseStorageImpl(localStorage)) {
    // localStorage is available
    persistentStore = localStorage;
}