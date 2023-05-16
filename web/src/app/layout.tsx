import React from 'react'
// eslint-disable-next-line camelcase
import { Roboto_Flex, Bai_Jamjuree } from 'next/font/google'

import './globals.css'

const roboto = Roboto_Flex({ subsets: ['latin'], variable: '--font-sans' })
const bai = Bai_Jamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-display',
})

export const metadata = {
  title: 'NLW Spacetime',
  description:
    'Colecione momentos marcantes da sua jornada e compartilhe com o mundo!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" dir="ltr" className="scroll-smooth antialiased">
      <body className={`font-sans ${roboto.variable} ${bai.variable}`}>
        {children}
      </body>
    </html>
  )
}
