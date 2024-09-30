'use client'

/**
 * Renders a single HTML file for demonstration.
 *
 * @todo Add a caption prop.
 */
import { Figure } from '@/components/figure'
import { ComponentPropsWithoutRef, useEffect, useState } from 'react'
import './figure-file.scss'

type View = 'demo' | 'source'
type Lifecycle = 'setup' | 'ready'

interface FigureFileProps extends ComponentPropsWithoutRef<'figure'> {
  src: string,
}

export function FigureFile (props : FigureFileProps) {
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
    <Figure type="file">
      <Figure.Head>
        <button
          data-is-selected={view === 'demo' ? '' : null}
          onClick={() => setView('demo')}
        >Demo</button>
        <button
          data-is-selected={view === 'source' ? '' : null}
          onClick={() => setView('source')}
        >Source</button>
      </Figure.Head>
      <Figure.Body className="figure-body">
        {view === 'demo' && <iframe src={src} {...atts}></iframe>}
        {view === 'source' && <pre>{htmlSource}</pre>}
      </Figure.Body>
      <Figure.Foot />
    </Figure>
  )
}
