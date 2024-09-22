import { Bangers, Lato } from 'next/font/google'

export const bangers = Bangers({
  display: 'swap',
  subsets: ['latin'],
  weight: '400',
})

export const lato = Lato({
  display: 'swap',
  subsets: ['latin'],
  weight: [ '300', '400', '700', '900' ],
})
