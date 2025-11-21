'use client'

import Link from 'next/link'
import { Sparkles } from 'lucide-react'

interface LogoProps {
  showIcon?: boolean
}

export function Logo({ showIcon = false }: LogoProps) {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 group"
    >
      {showIcon && (
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 dark:bg-black/40 rounded-full blur-md group-hover:bg-primary/30 dark:group-hover:bg-black/60 transition-colors" />
          <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-primary via-primary/90 to-primary/80 dark:bg-black dark:bg-none border border-white/30 dark:border-white/10 flex items-center justify-center shadow-lg">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
        </div>
      )}
      <span className="font-dancing text-3xl md:text-4xl font-bold text-white group-hover:text-primary dark:text-white dark:group-hover:text-primary smooth-transition tracking-tight">
        Fashino
      </span>
    </Link>
  )
}
