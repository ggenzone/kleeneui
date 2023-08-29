export interface LayoutProps {
  children: React.ReactNode
  className?: string
}

export function Layout (props: LayoutProps): JSX.Element {
  return (
    <div className={`h-screen overflow-hidden w-full ${props.className ?? ''}`}>
      <div className="h-screen overflow-hidden relative">
        <div className="flex items-start">
          {props.children}
        </div>
      </div>
    </div>
  )
}

Layout.displayName = "Layout"
