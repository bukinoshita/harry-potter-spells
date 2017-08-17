'use strict'

const uniqueRandomArray = require('unique-random-array')

const spells = require('./spells')
const spell = require('./lib/spell')

exports.all = spells
exports.random = uniqueRandomArray(spells)
exports.spell = spell
