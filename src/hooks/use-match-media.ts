import { useCallback, useEffect, useState } from 'react'

export function useMatchMedia (query : string) {
  // const [ isReady, setIsReady ] =  useState<boolean>(false)
  const [ result, setResult ] = useState<boolean|null>(null)

  const updateTarget = useCallback((event : MediaQueryListEvent) => {
    if (event.matches) {
      setResult(true)
    } else {
      setResult(false)
    }
  }, [])

  useEffect(() => {
    const media = window.matchMedia(query)
    media.addEventListener('change', updateTarget)
    if (media.matches) {
      setResult(true)
    }
    return () => media.removeEventListener('change', updateTarget)
  }, []);

  return result
}
