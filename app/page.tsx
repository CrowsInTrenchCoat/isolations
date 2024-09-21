import Link from 'next/link'

export default function Home () {
  return (
    <div>
      <main>
        <nav>
          <h2>Circles</h2>
          <ul>
            <li><Link href="/svg-semicircle">Semicircle</Link></li>
          </ul>
        </nav>
      </main>
    </div>
  )
}
