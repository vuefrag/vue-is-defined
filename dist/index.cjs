'use strict';

const vue = require('vue');

function isDefined(v) {
  return vue.unref(v) != null;
}

exports.isDefined = isDefined;
