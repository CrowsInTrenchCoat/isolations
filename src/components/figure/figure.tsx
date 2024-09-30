import { ComponentPropsWithoutRef, ReactNode } from 'react'

import './figure.scss'

type FigureType = 'code' | 'demo' | 'file' | 'graphic'

interface FigureProps extends ComponentPropsWithoutRef<'figure'> {
  children : ReactNode,
  type : FigureType,
}

interface FigureHeadProps extends ComponentPropsWithoutRef<'div'> {
  children? : ReactNode
}

interface FigureBodyProps extends ComponentPropsWithoutRef<'div'> {
  children : ReactNode
}

interface FigureFootProps extends ComponentPropsWithoutRef<'div'> {
  children? : ReactNode,
  isCaption? : boolean
}

function Figure (props : FigureProps) {
  const { children, type, ...atts } = props
  return (
    <figure data-type={type} {...atts}>{children}</figure>
  )
}

Figure.Head = function (props : FigureHeadProps) {
  const { children, className, ...atts } = props
  const c = (s : string) : string => className ? `${s} ${className}` : s
  return <div className={c('figure-head')} {...atts}>{children}</div>
}

Figure.Body = function (props : FigureBodyProps) {
  const { children, className, ...atts } = props
  const c = (s : string) : string => className ? `${s} ${className}` : s
  return <div className={c('figure-body')} {...atts}>{children}</div>
}

Figure.Foot = function (props : FigureFootProps) {
  const { children, className, isCaption, ...atts } = props
  const c = (s : string) : string => className ? `${s} ${className}` : s
  return isCaption
    ? <figcaption className={c('figure-foot')} {...atts}>{children}</figcaption>
    : <div className={c('figure-foot')} {...atts}>{children}</div>
}

export { Figure }
