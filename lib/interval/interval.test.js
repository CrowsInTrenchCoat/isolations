import { assert, describe, expect, it } from 'vitest'
import { ClosedInterval, OpenInterval } from './interval'

describe('construction', () => {
  it ('set propertied correctly when min is less than max.', () => {
    const interval = new ClosedInterval(27, 99)
    assert.equal(interval.min, 27)
    assert.equal(interval.max, 99)
    assert.equal(interval.distance, 72)
  })
  it ('swaps parameters when min is greater than max.', () => {
    const interval = new ClosedInterval(99,27)
    assert.equal(interval.min, 27)
    assert.equal(interval.max, 99)
    assert.equal(interval.distance, 72)
  })
  it ('supports creation of degenerate intervals.', () => {
    const interval = new ClosedInterval(45, 45)
    assert.equal(interval.min, 45)
    assert.equal(interval.max, 45)
    assert.equal(interval.distance, 0)
  })
})

describe('.bind()', () => {
  it ('returns value of min when value is greater than min.', () => {
    const interval = new ClosedInterval(27, 46)
    assert.equal(interval.bind(20), 27)
  })
  it ('returns value of max when value is greater than max.', () => {
    const interval = new ClosedInterval(90, 100)
    assert.equal(interval.bind(123), 100)
  })
  it ('returns value of parameter one when value is in-interval.', () => {
    const interval = new ClosedInterval(17, 29)
    assert.equal(interval.bind(21), 21)
  })
})

describe('.contains()', () => {
  it ('identifies values within interval.', () => {
    const interval = new ClosedInterval(1, 2)
    assert.equal(interval.contains(1), true)
    assert.equal(interval.contains(2), true)
  })
  it ('identifies values outside of interval.', () => {
    const interval = new ClosedInterval(1, 2)
    assert.equal(interval.contains(-2), false)
    assert.equal(interval.contains(-1), false)
    assert.equal(interval.contains(0), false)
    assert.equal(interval.contains(3), false)
  })
  it ('reads degenerate interval [34, 34] correctly.', () => {
    const interval = new ClosedInterval(34, 34)
    assert.equal(interval.contains(33), false)
    assert.equal(interval.contains(33.5), false)
    assert.equal(interval.contains(34), true)
    assert.equal(interval.contains(34.5), false)
  })
  it('reads degenerate interval [-1, -1] correctly.', () => {
    const interval = new ClosedInterval(-1, -1)
    assert.equal(interval.contains(-1), true)
  })
})

describe('.label()', () => {
  it('Reads label from a single closed interval.', () => {
    const interval = (new ClosedInterval(0, 4))
      .withLabel('Beginning', new ClosedInterval(0, 2))

    assert.equal(interval.label(0), 'Beginning')
    assert.equal(interval.label(1), 'Beginning')
    assert.equal(interval.label(2), 'Beginning')
    assert.equal(interval.label(3), '')
    assert.equal(interval.label(4), '')
  })
  it('Reads labels from an open interval wrapped with degenerate intervals.', () => {
    const interval = (new ClosedInterval(-2, 2))
      .withLabel('Negative One', new ClosedInterval(-1, -1))
      .withLabel('Middle Bits', new OpenInterval(-1, 1))
      .withLabel('Positive One', new ClosedInterval(1, 1))

    assert.equal(interval.label(-2), '')
    assert.equal(interval.label(-1.5), '')
    assert.equal(interval.label(-1), 'Negative One')
    assert.equal(interval.label(-0.5), 'Middle Bits')
    assert.equal(interval.label(0), 'Middle Bits')
    assert.equal(interval.label(0.5), 'Middle Bits')
    assert.equal(interval.label(1), 'Positive One')
    assert.equal(interval.label(1.5), '')
    assert.equal(interval.label(2), '')
  })
  it('Reads moon phase labels.', () => {
    const interval = (new ClosedInterval(0, 1))
      .withLabel('New', new ClosedInterval(0))
      .withLabel('Waxing Crescent', new OpenInterval(0, 0.25))
      .withLabel('First Quarter', new ClosedInterval(0.25))
      .withLabel('Waxing Gibbous', new OpenInterval(0.25, 0.50))
      .withLabel('Full', new ClosedInterval(0.50))
      .withLabel('Waning Gibbous', new OpenInterval(0.50, 0.75))
      .withLabel('Last Quarter', new ClosedInterval(0.75))
      .withLabel('Waning Crescent', new OpenInterval(0.75, 1))
      .withLabel('New', new ClosedInterval(1))

    assert.equal(interval.label(0), 'New')
    assert.equal(interval.label(0.125), 'Waxing Crescent')
    assert.equal(interval.label(0.25), 'First Quarter')
    assert.equal(interval.label(0.375), 'Waxing Gibbous')
    assert.equal(interval.label(0.50), 'Full')
    assert.equal(interval.label(0.625), 'Waning Gibbous')
    assert.equal(interval.label(0.75), 'Last Quarter')
    assert.equal(interval.label(0.875), 'Waning Crescent')
    assert.equal(interval.label(1), 'New')
  })
})

describe('.max', () => {
  it ('Cannot be set after construction', () => {
    const interval = (new ClosedInterval(10, 30))
    expect(() => { interval.max = 0 }).toThrowError()
  })
})

describe('.min', () => {
  it ('Cannot be set after construction', () => {
    const interval = (new ClosedInterval(10, 30))
    expect(() => { interval.min = 0 }).toThrowError()
  })
})

describe('.percent()', () => {
  it ('Throws when parameter one is less than zero.', () => {
    const interval = new ClosedInterval(20, 30)
    expect(() => interval.percent(-14)).toThrowError()
  })
  it ('Throws when parameter one is greater than 100.', () => {
    const interval = new ClosedInterval(20, 30)
    expect(() => interval.percent(101)).toThrowError()
  })
  it ('Returns select percentages across the zero point.', () => {
    const interval = new ClosedInterval(-100, 100)
    assert.equal(interval.percent(0), -100)
    assert.equal(interval.percent(12.5), -75)
    assert.equal(interval.percent(25), -50)
    assert.equal(interval.percent(37.5), -25)
    assert.equal(interval.percent(50), 0)
    assert.equal(interval.percent(62.5), 25)
    assert.equal(interval.percent(75), 50)
    assert.equal(interval.percent(87.5), 75)
    assert.equal(interval.percent(100), 100)
  })
})

describe('.reflect()', () => {
  it ('a', () => {
    const interval = new ClosedInterval(20, 30)
    assert.equal(interval.reflect(21), 29)
  })
})

describe('.translate()', () => {
  it ('Translates an in-interval value to from one interval to another of the same size.', () => {
    const intervalA = new ClosedInterval(20, 30)
    const intervalB = new ClosedInterval(30, 40)
    assert.equal(intervalA.translate(21, intervalB), 31)
  })
  it ('Translates an in-interval value to from one interval to another of a different size.', () => {
    const intervalA = new ClosedInterval(20, 30)
    const intervalB = new ClosedInterval(30, 50)
    assert.equal(intervalA.translate(21, intervalB), 32)
  })
})

describe('.withLabel', () => {
  it ('Accepts a valid sub-range', () => {
    (new ClosedInterval(0, 4)).withLabel('Test', new ClosedInterval(0, 2))
  })
  it (`Throws when the sub-range's min value is out-of-range`, () => {
    expect(() => {
      (new ClosedInterval(1, 4)).withLabel('Test', new ClosedInterval(0, 2))
    }).toThrowError()
  })
  it (`Throws when the sub-range's max value is out-of-range`, () => {
    expect(() => {
      (new ClosedInterval(1, 4)).withLabel('Test', new ClosedInterval(3, 5))
    }).toThrowError()
  })
})
