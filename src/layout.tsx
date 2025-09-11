import type React from "react"
import "./index.css"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      {children}
    </>
  )
}
