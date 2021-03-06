// -*- mode: js; indent-tabs-mode: nil; js-basic-offset: 4 -*-
//
// This file is part of ThingEngine
//
// Copyright 2015 The Board of Trustees of the Leland Stanford Junior University
//
// Author: Giovanni Campagna <gcampagn@cs.stanford.edu>
//
// See COPYING for details
"use strict";

const events = require('events');

module.exports = class BaseDiscovery extends events.EventEmitter {
    constructor(platform, master) {
        super();
        this.platform = platform;
        this.master = master;
    }

    get isSupported() {
        return true;
    }

    discoveryFinished() {
        this.master.discoveryFinished(this);
    }

    deviceFound(descriptor, publicData, privateData) {
        this.master.deviceFound(descriptor, publicData, privateData);
    }
};
