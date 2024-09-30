import { bangers } from '@/fonts'

export interface DirectoryData {
  href: string,
  name: string
}

export interface NameplateProps {
  directoryData? : DirectoryData,
}

function SectionName (props : { directoryData?: DirectoryData }) {
  const { directoryData } = props
  const name = directoryData?.name.trim() ?? ''
  const href = directoryData?.href.trim() ?? '' // @todo read URL.
  let content
  if (name && href) {
    content = (
      <span className="section-name">
        <a href={href}>{name}</a>
      </span>
    )
  } else if (name) {
    content = (
      <span className="section-name">{name}</span>
    )
  }
  return content ? <>{': '} {content}</> : null
}

export function Nameplate (props : NameplateProps) {
  const { directoryData } = props
console.log('Nameplate.directoryData', directoryData)
  return (
    <header id="nameplate">
      <span id="nameplate-name" className={bangers.className}>
        <a href="/isolations">
          <abbr title="JavaScript">JS</abbr> Laboratory
        </a>
        <SectionName directoryData={directoryData} />
      </span>
    </header>
  )
}
