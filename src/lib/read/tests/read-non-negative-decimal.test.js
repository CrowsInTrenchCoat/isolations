import { assert, describe, it } from 'vitest'
import { readNonNegativeDecimal } from '../non-negative-decimal'

describe('Zero return: general', () => {
  it('returns 0 for undefined', () => {
    assert.equal(readNonNegativeDecimal(undefined), 0)
  })
  it('returns 0 for null', () => {
    assert.equal(readNonNegativeDecimal(null), 0)
  })
  it('returns 0 for boolean true', () => {
    assert.equal(readNonNegativeDecimal(true), 0)
  })
  it('returns 0 for boolean false', () => {
    assert.equal(readNonNegativeDecimal(false), 0)
  })
  it('returns 0 for array', () => {
    assert.equal(readNonNegativeDecimal([]), 0)
  })
  it('returns 0 for object literal', () => {
    assert.equal(readNonNegativeDecimal({}), 0)
  })
  it('returns 0 for symbol', () => {
    assert.equal(readNonNegativeDecimal(Symbol()), 0)
  })
})

describe('Zero return: numbers', () => {
  it('returns 0 for -1', () => {
    assert.equal(readNonNegativeDecimal(-1), 0)
  })
  it('returns 0 for 0', () => {
    assert.equal(readNonNegativeDecimal(0), 0)
  })
  it ('returns 0 for 9007199254740993', () => {
    assert.equal(readNonNegativeDecimal(9007199254740993), 0)
  })
  it('returns 0 for Infinity', () => {
    assert.equal(readNonNegativeDecimal(+Infinity), 0)
  })
  it('returns 0 for -Infinity', () => {
    assert.equal(readNonNegativeDecimal(-Infinity), 0)
  })
  it('returns 0 for NaN', () => {
    assert.equal(readNonNegativeDecimal(NaN), 0)
  })
  it('returns 0 for Number.MAX_SAFE_INTEGER + 1', () => {
    assert.equal(readNonNegativeDecimal(Number.MAX_SAFE_INTEGER + 1), 0)
  })
})

describe('Zero return: string', () => {
  it('returns 0 for ""', () => {
    assert.equal(readNonNegativeDecimal(''), 0)
  })
  it('returns 0 for "-99"', () => {
    assert.equal(readNonNegativeDecimal('-99'), 0)
  })
  it('returns 0 for "-1"', () => {
    assert.equal(readNonNegativeDecimal('-1'), 0)
  })
  it('returns 0 for "0"', () => {
    assert.equal(readNonNegativeDecimal(0), 0)
  })
  it('returns 0 for "9007199254740993"', () => {
    assert.equal(readNonNegativeDecimal('9007199254740993'), 0)
  })
  it('returns 0 for "1234n"', () => {
    assert.equal(readNonNegativeDecimal('1234n'), 0)
  })
  it('returns 0 for "7.7e+1"', () => {
    assert.equal(readNonNegativeDecimal('7.7e+1'), 0)
  })
  it('returns 0 for "0o10"', () => {
    assert.equal(readNonNegativeDecimal('0o10'), 0)
  })
  it('returns 0 for "0O10"', () => {
    assert.equal(readNonNegativeDecimal('0O10'), 0)
  })
  it('returns 0 for "0xFF"', () => {
    assert.equal(readNonNegativeDecimal('0xFF'), 0)
  })
})

describe('Zero return: bigint', () => {
  it('returns 0 for bigint 9007199254740993n', () => {
    assert.equal(readNonNegativeDecimal(9007199254740993n), 0)
  })
})

describe('Positive return: integer', () => {
  it('returns 1 for 1', () => {
    assert.equal(readNonNegativeDecimal(1), 1)
  })
  it('returns Number.MAX_SAFE_INTEGER for Number.MAX_SAFE_INTEGER', () => {
    const result = readNonNegativeDecimal(Number.MAX_SAFE_INTEGER)
    assert.equal(result, Number.MAX_SAFE_INTEGER)
  })
})

describe('Positive return: float', () => {
  it('returns 1.23 for 1.23', () => {
    assert.equal(readNonNegativeDecimal(1.23), 1.23)
  })
  it('returns 77 for 7.7e+1', () => {
    assert.equal(readNonNegativeDecimal(7.7e+1), 77)
  })
  it('returns 0.0000005 for 0.0000005', () => {
    assert.equal(readNonNegativeDecimal(0.0000005), 0.0000005)
  })
})

describe('Positive return: bigint', () => {
  it('returns 39934 for 39934n', () => {
    assert.equal(readNonNegativeDecimal(39934n), 39934)
  })
})

describe('Positive return: strings', () => {
  it('ignores left padding in strings', () => {
    assert.equal(readNonNegativeDecimal(' 123'), 123)
    assert.equal(readNonNegativeDecimal('  123'), 123)
    assert.equal(readNonNegativeDecimal('\t123'), 123)
  })
  it('ignores right padding in strings', () => {
    assert.equal(readNonNegativeDecimal('123 '), 123)
    assert.equal(readNonNegativeDecimal('123  '), 123)
    assert.equal(readNonNegativeDecimal('123\t'), 123)
  })
  it('ignores dual padding in strings', () => {
    assert.equal(readNonNegativeDecimal(' 123 '), 123)
    assert.equal(readNonNegativeDecimal('  123  '), 123)
    assert.equal(readNonNegativeDecimal('\n123\n'), 123)
    assert.equal(readNonNegativeDecimal('\t123\t'), 123)
  })

  it('returns 1 for "1.00"', () => {
    assert.equal(readNonNegativeDecimal('1.00'), 1)
  })
  it('returns 0.0000005 for "0.0000005"', () => {
    assert.equal(readNonNegativeDecimal('0.0000005'), 0.0000005)
  })
})
