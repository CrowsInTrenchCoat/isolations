import { bangers } from '@/fonts'

export function Nameplate () {
  return (
    <header id="nameplate">
      <span id="nameplate-name" className={bangers.className}>
        <a href="/isolations"><abbr title="JavaScript">JS</abbr> Laboratory</a>
      </span>
    </header>
  )
}
