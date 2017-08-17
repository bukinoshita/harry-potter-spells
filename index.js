'use strict'

const uniqueRandomArray = require('unique-random-array')

const spells = require('./spells')

exports.all = spells
exports.random = uniqueRandomArray(spells)
