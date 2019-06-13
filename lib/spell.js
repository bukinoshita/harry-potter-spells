// Root
const spells = require('./../spells')

module.exports = spell => spells.filter(s => s.name.toLowerCase() === spell.toLowerCase())[0]
