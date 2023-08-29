import * as React from "react"

export interface LayoutProps {
  children: React.ReactNode
}

export function Layout(props: LayoutProps) {
  return <button>{props.children}</button>
}

Layout.displayName = "Layout"
