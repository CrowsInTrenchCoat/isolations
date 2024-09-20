export function readWholeNumber (aught : any) : number {
  switch (typeof aught) {
    case 'string' : {
      const n = aught.trim().match(/^(?:[1-9][0-9]*)*[0-9]$/)
        ? Number(aught.trim())
        : 0
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
