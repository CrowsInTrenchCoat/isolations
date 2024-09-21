/**
 * Intervals
 *
 * Defines class constructors and interfaces for working
 * with ranges of numbers in JavaScript/TypeScript.
 *
 * Much of the language used in this class was inspired by
 * the following Wikipedia article:
 * https://en.m.wikipedia.org/wiki/Interval_(mathematics)
 */

export interface IntervalInterface {
  distance: number,
  max: number,
  mid: number,
  min: number,
  contains (value : number) : boolean,
}

export interface IntervalLabelInterface {
  name: string,
  interval: IntervalInterface,
}

export interface ClosedIntervalInterface extends IntervalInterface {
  bind (value : number) : number,
  percent (percent : number) : number,
  translate (value : number, next : ClosedIntervalInterface) : number,
}

export class ClosedInterval implements ClosedIntervalInterface {
  #min : number
  #max : number
  #labels : IntervalLabelInterface[]
  /**
   * The size of the range on a number line.
   */
  get distance () : number {
    return this.#max - this.#min
  }
  /**
   * The end point of the interval.
   */
  get max () : number {
    return this.#max
  }
  /**
   * The point in the middle of the interval.
   */
  get mid () : number {
    return this.percent(50)
  }
  /**
   * The starting point of the interval.
   */
  get min () : number {
    return this.#min
  }
  constructor (min : number, max? : number) {
    if (typeof max === 'number') {
      this.#min = min < max ? min : max
      this.#max = min < max ? max : min
    } else {
      this.#min = min
      this.#max = min
    }

    this.#labels = []
  }
  /**
   * Bind a value to this range. Values that are
   * out-of-range will be "snapped" to its upper or lower
   * bounds as defined by the `min` and `max` properties.
   */
  bind (value : number) : number {
    if (value < this.min) {
      return this.min
    }
    if (value > this.max) {
      return this.max
    }
    return value
  }
  /**
   * Determine if a given value exists within this range,
   */
  contains (value : number) {
    return value >= this.min && value <= this.#max
  }
  /**
   * Get the label for a given value .
   *
   * @param point The value for which to retrieve a label.
   * @returns The value of the label for the given point if
   *   it has been defined. An empty string will be returned
   *   in all other cases.
   */
  label (point : number) : string {
    if (!this.contains(point)) {
      return ''
    }

    for (const label of this.#labels) {
      if (label.interval.contains(point)) {
        return label.name
      }
    }

    return ''
  }
  /**
   * Determine the value that exists at a given percentage
   * within this interval.
   */
  percent (percent : number) : number {
    if (percent < 0) {
      throw new Error('Parameter one must be greater than zero.')
    }
    if (percent > 100) {
      throw new Error('Parameter one must be less than 100.')
    }
    return (new ClosedInterval(0, 100)).translate(percent, this)
  }
  reflect (value : number) : number {
    const percent = this.translate(value, new ClosedInterval(0, 100))
    const inverse = 100 - percent
    return this.percent(inverse)
  }
  toString () : string {
    return `ClosedInterval [${this.#min}, ${this.#max}]`
  }
  /**
   * Translate a given value from it's position within this
   * interval to its position in another interval.
   */
  translate (value : number, next : ClosedIntervalInterface) {
    value = this.bind(value)
    return (value - this.#min) * (next.max - next.min) / (this.#max - this.#min) + next.min
  }
  withLabel (name : string, interval: IntervalInterface) : ClosedInterval {
    if (!this.contains(interval.min)) {
      throw new Error(`The value of the 'min' property (${interval.min}) of parameter is out-of-range.`)
    }
    if (!this.contains(interval.max)) {
      throw new Error(`The 'max' property of parameter is out-of-range.`)
    }
    this.#labels.push(new IntervalLabel(name, interval))
    return this
  }
}

export class OpenInterval implements IntervalInterface {
  #interval : ClosedInterval
  constructor (min : number, max : number) {
    if (min === max) {
      throw new Error('Min cannot equal max in an open interval. Please use ClosedInterval instead.')
    }
    this.#interval = new ClosedInterval(min, max)
  }
  get distance () : number {
    return this.#interval.distance
  }
  get max () : number {
    return this.#interval.max
  }
  get mid () : number {
    return this.#interval.mid
  }
  get min () : number {
    return this.#interval.min
  }
  /**
   * Determine if a given value exists within this range,
   */
  contains (value : number) : boolean {
    return value > this.#interval.min && value < this.#interval.max
  }
  toString () : string {
    return `(${this.#interval.min}, ${this.#interval.max})`
  }
}

class IntervalLabel implements IntervalLabelInterface {
  #name : string
  #interval : IntervalInterface
  constructor (name : string, interval : IntervalInterface) {
    this.#name = name
    this.#interval = interval
  }
  get name () : string {
    return this.#name
  }
  get interval () : IntervalInterface {
    return this.#interval
  }
  toString () : string {
    return `${String(this.#interval)} ${this.#name}`
  }
}
