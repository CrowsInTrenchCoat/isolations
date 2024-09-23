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

export function readWholeNumber (aught : any) : number {
  switch (typeof aught) {
    case 'string' : {
      const s = aught.trim()
      const n = isWholeNumber(s) ? Number(s) : 0
      return Number.isSafeInteger(n) ? n : 0
    }
    case 'number' : {
      return Number.isSafeInteger(aught) && aught > 0 ? aught : 0
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
