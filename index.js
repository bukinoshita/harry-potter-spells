// Packages
const uniqueRandomArray = require('unique-random-array')

// Lib
const spell = require('./lib/spell')

// Root
const spells = require('./spells')

exports.all = spells
exports.random = uniqueRandomArray(spells)
exports.spell = spell
