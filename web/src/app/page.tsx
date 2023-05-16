import Image from 'next/image'

import { User } from 'lucide-react'

import logo from '../assets/nwl-spacetime-logo.svg'

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      <div className="relative flex flex-col justify-between overflow-hidden border-r border-white/10 bg-stars bg-cover px-28 py-16">
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700/40 blur-full" />
        <div className="absolute inset-y-0 right-2 w-2 bg-stripes" />
        <a
          href="#"
          className="flex items-center gap-3 text-left transition-colors hover:text-gray-50"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
            <User className="h-6 w-6 text-gray-900" />
          </div>
          <div className="max-w-[8.75rem] text-sm leading-snug">
            <span className="underline">Crie sua conta</span> e salve suas
            memórias
          </div>
        </a>
        <div className="space-y-6">
          <Image src={logo} alt="NLW Spacetime" />
          <div className="max-w-[420px] space-y-1">
            <h1 className="text-5xl font-bold leading-tight text-gray-50">
              Sua cápsula do tempo
            </h1>
            <p className="text-lg leading-relaxed">
              Colecione momentos marcantes da sua jornada e compartilhe (se
              quiser) com o mundo!
            </p>
          </div>
          <a
            href="#"
            className="inline-block rounded-full bg-green-500 px-5 py-3 font-display text-sm uppercase text-gray-900 transition-colors hover:bg-green-700"
          >
            Cadastrar lembrança
          </a>
        </div>
        <div className="text-sm leading-relaxed text-gray-200">
          Feito com 💜 no NLW da{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://rocketseat.com.br"
            className="underline transition-colors hover:text-gray-100"
          >
            Rocketseat
          </a>
        </div>
      </div>
      <div className="flex flex-col bg-stars bg-cover p-16">
        <div className="flex flex-1 items-center justify-center">
          <p className="text-center leading-relaxed">
            Você ainda não registrou nenhuma lembrança, <br />{' '}
            <a
              href="#"
              className="underline transition-colors hover:text-gray-50"
            >
              comece a criar agora!
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}
