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


## License

MIT © [Bu Kinoshita](https://bukinoshita.io)
