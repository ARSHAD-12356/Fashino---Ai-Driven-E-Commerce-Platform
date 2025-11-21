'use client'

import { DualNavbar } from '@/components/dual-navbar'

export function Header({ showCategoryBar = false }: { showCategoryBar?: boolean }) {
  return <DualNavbar showCategoryBar={showCategoryBar} />
}
