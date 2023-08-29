import { Sider } from './components/sider'
import { Container } from './components/container'
import { Header } from './components/header'
import { Footer } from './components/footer'
import { Content } from './components/content'

export interface LayoutProps {
  children: React.ReactNode
  className?: string
}

function Layout (props: LayoutProps): JSX.Element {
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

Layout.Root = Layout
Layout.Sider = Sider
Layout.Container = Container
Layout.Header = Header
Layout.Footer = Footer
Layout.Content = Content
Layout.displayName = "Layout"

export { Layout }
