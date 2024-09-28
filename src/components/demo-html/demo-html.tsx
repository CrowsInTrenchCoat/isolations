'use client'

/**
 * Renders a single HTML file for demonstration.
 */
import { ComponentPropsWithoutRef, useEffect, useState } from 'react'
import './demo-html.scss'

type View = 'demo' | 'source'
type Lifecycle = 'setup' | 'ready'

interface HtmlDemoProps extends ComponentPropsWithoutRef<'iframe'> {
  src: string,
}

export function HtmlDemo (props : HtmlDemoProps) {
  const { src, ...atts } = props
  const [ htmlSource, setHtmlSource ] = useState<string>('')
  const [ view, setView ] = useState<View>('demo')
  const [ lifecycle, setLifecycle ] = useState<Lifecycle>('setup')

  const getHtmlSource = async () => {
    const response = await fetch(src)
    const contents = await response.text()
    if (typeof contents === 'string') {
      setHtmlSource(contents)
    }
    setLifecycle('ready')
  }

  useEffect(() => {
    getHtmlSource()
  }, [])

  if (lifecycle === 'setup') {
    return null
  }

  return (
    <div className="demo-html">
      <div className="demo-html-head">
        <button
          data-is-selected={view === 'demo' ? '' : null}
          onClick={() => setView('demo')}
        >Demo</button>
        <button
          data-is-selected={view === 'source' ? '' : null}
          onClick={() => setView('source')}
        >Source</button>
      </div>
      <div className="demo-html-body">
        {view === 'demo' && <iframe src={src} {...atts}></iframe>}
        {view === 'source' && <pre>{htmlSource}</pre>}
      </div>
      <div className="demo-html-foot"></div>
    </div>
  )
}
