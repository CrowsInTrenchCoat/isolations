import { bangers } from '@/fonts'

export interface NameplateProps {
  sectionName? : string,
}

export function Nameplate (props : NameplateProps) {
  const { sectionName } = props

  return (
    <header id="nameplate">
      <span id="nameplate-name" className={bangers.className}>
        <a href="/isolations"><abbr title="JavaScript">JS</abbr> Laboratory</a>
        {sectionName && (
          <>{`: `} <span className="section-name">{sectionName}</span></>
        )}
      </span>
    </header>
  )
}
