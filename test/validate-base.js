import index from '../'
import legacy from '../legacy'
import test from 'ava'

test('test basic properties of eslint config - index.js', t => {
  t.truthy(isArray(index.extends))
  t.truthy(isObject(index.parserOptions))
})

test('test basic properties of eslint config - legacy.js', t => {
  t.truthy(isArray(legacy.extends))
  t.truthy(isObject(legacy.env))
})

function isObject (obj) {
  return typeof obj === 'object' && obj !== null
}

function isArray (arr) {
  return Array.isArray(arr)
}
