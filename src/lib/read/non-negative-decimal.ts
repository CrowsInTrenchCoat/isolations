/**
 * Determine if a given string is a literal representation
 * of a number in decimal notation.
 *
 * @param s The string to test.
 * @returns `true` if `s` represents a whole number;
 *   `false` otherwise.
 */
function isPositiveDecimal (s : string) : boolean {
  return Boolean(s.match(/^(?:[1-9][0-9]*)*[0-9]\.[0-9]+$/))
}

/**
 * Determine if a given string is a literal representation
 * of a whole number.
 *
 * @param s The string to test.
 * @returns true if `s` represents a whole number;
 *   false otherwise.
 */
function isWholeNumber (s : string) : boolean {
  return Boolean(s.match(/^(?:[1-9][0-9]*)*[0-9]$/))
}

export function readNonNegativeDecimal (aught : any) : number {
  switch (typeof aught) {
    case 'string' : {
      const s = aught.trim()
      if (isWholeNumber(s)) {
        const n = Number(s)
        return Number.isSafeInteger(n) ? n : 0
      } else if (isPositiveDecimal(s)) {
        const n = Number(s)
        return n <= Number.MAX_VALUE ? n : 0
      }

      return 0
    }
    case 'number' : {
      if (Number.isInteger(aught)) {
        if (Number.isSafeInteger(aught) && aught > 0) {
          return aught
        } else {
          return 0
        }
      }
      const float = Number.parseFloat(String(aught))
      return Number.isFinite(float) ? float : 0
    }
    case 'bigint' : {
      const n = Number(aught)
      return Number.isSafeInteger(n) && n > 0 ? n : 0
    }
    default : {
      return 0
    }
  }
}
