'use client'

import { Code2 } from 'lucide-react'

export function DeveloperCredit() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm border-t border-border/50 py-2 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <p className="text-xs md:text-sm text-muted-foreground flex items-center gap-2">
          <Code2 className="w-3 h-3 md:w-4 md:h-4" />
          <span className="font-medium">
            Developed by{' '}
            <span className="text-primary font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              ArshXCoder
            </span>
          </span>
        </p>
      </div>
    </div>
  )
}

