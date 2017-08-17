# harry-potter-spells [![Build Status](https://travis-ci.org/bukinoshita/harry-potter-spells.svg?branch=master)](https://travis-ci.org/bukinoshita/harry-potter-spells)

> List of Harry Potter spells


## Install

```bash
$ yarn add harry-potter-spells
```


## Usage

```javascript
const harryPotterSpells = require('harry-potter-spells')

console.log(harryPotterSpells.random())
// => { "name": "Crucio", "type": "curse", "effect": "Tortures opponent" }

console.log(harryPotterSpells.all)
/*
[{
    "name": "Crucio",
    "type": "curse",
    "effect": "Tortures opponent"
  },
  ...
]
*/
```


## Demo

<img src="https://github.com/bukinoshita/harry-potter-spells/blob/master/demo.png" alt="" width="550">


## API

### harryPotterSpells()

#### .random()

Returns an `object`

Get a random spell

#### .all

Returns an `array`

Get all spells

#### .spell(input)

Returns an `object`

Get a specific spell

##### input

Type: `string`<br/>

Spell's name


## License

MIT © [Bu Kinoshita](https://bukinoshita.io)
