// Packages
import test from 'ava'

import m from '.'

test('get all spells', t => {
  t.true(m.all.length > 1)
})

test('get random spell', t => {
  t.not(m.random(), m.random())
})

test('get spell', t => {
  t.truthy(m.spell('accio'))
})

test('not find spell', t => {
  t.is(m.spell('acccio'), undefined)
})
