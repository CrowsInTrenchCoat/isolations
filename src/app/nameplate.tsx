import { bangers } from '@/fonts'

export function Nameplate () {
  return (
    <header id="nameplate">
      <span id="nameplate-name" className={bangers.className}>
        <abbr title="JavaScript">JS</abbr> Laboratory
      </span>
    </header>
  )
}
