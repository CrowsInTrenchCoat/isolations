import { assert, describe, it } from 'vitest'

import { readWholeNumber } from '../whole-number'

describe('Negative return', () => {
  it('returns zero for undefined.', () => {
    assert.equal(readWholeNumber(undefined), 0)
  })
  it('returns zero for null.', () => {
    assert.equal(readWholeNumber(null), 0)
  })
  it('returns zero for booleans.', () => {
    assert.equal(readWholeNumber(true), 0)
    assert.equal(readWholeNumber(false), 0)
  })
  it('returns zero for negative integers.', () => {
    assert.equal(readWholeNumber(-1), 0)
  })
  it('returns zero for negative integers as string.', () => {
    assert.equal(readWholeNumber('-99'), 0)
    assert.equal(readWholeNumber('-1'), 0)
  })
  it('returns zero for number zero.', () => {
    assert.equal(readWholeNumber(0), 0)
  })
  it('returns zero for string zero.', () => {
    assert.equal(readWholeNumber(0), 0)
  })
  it('returns zero for empty string.', () => {
    assert.equal(readWholeNumber(''), 0)
  })
  it('returns zero for long float.', () => {
    assert.equal(readWholeNumber(0.0000005), 0) // parseInt(0.0000005) will return 5.
  })
  it('returns zero for unsafe positive integer.', () => {
    assert.equal(readWholeNumber(Number.MAX_SAFE_INTEGER + 1), 0)
  })
  it('Returns zero for sneaky-e notation.', () => {
    assert.equal(readWholeNumber('7.7e+1'), 0)
  })
  it('Returns zero for decimal strings.', () => {
    assert.equal(readWholeNumber('1.00'), 0)
  })
  it('returns zero for unsafe postive integer.', () => {
    assert.equal(readWholeNumber(9007199254740993), 0)
  })
  it('returns zero for unsafe postive integer as string.', () => {
    assert.equal(readWholeNumber('9007199254740993'), 0)
  })
  it('returns zero for unsafe bigint.', () => {
    assert.equal(readWholeNumber(9007199254740993n), 0)
  })
})

describe('Positive return', () => {
  it('returns integer for safe positive integers.', () => {
    assert.equal(readWholeNumber(1), 1)
    assert.equal(readWholeNumber(Number.MAX_SAFE_INTEGER), Number.MAX_SAFE_INTEGER)
  })
  it('ignores left padding in strings.', () => {
    assert.equal(readWholeNumber(' 123'), 123)
    assert.equal(readWholeNumber('  123'), 123)
    assert.equal(readWholeNumber('\t123'), 123)
  })
  it('ignores right padding in strings.', () => {
    assert.equal(readWholeNumber('123 '), 123)
    assert.equal(readWholeNumber('123  '), 123)
    assert.equal(readWholeNumber('123\t'), 123)
  })
  it('ignores dual padding in strings.', () => {
    assert.equal(readWholeNumber(' 123 '), 123)
    assert.equal(readWholeNumber('  123  '), 123)
    assert.equal(readWholeNumber('\n123\n'), 123)
    assert.equal(readWholeNumber('\t123\t'), 123)
  })
  it('returns number value of safe bigint.', () => {
    assert.equal(readWholeNumber(39934n), 39934)
  })
})
