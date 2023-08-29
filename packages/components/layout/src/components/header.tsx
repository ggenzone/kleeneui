export interface ContainerProps {
  children: React.ReactNode
  className?: string
}
  
const style = {
  container: 'w-full overflow-y-hidden'
}
  
export function Header (props: ContainerProps): JSX.Element {
  return (
    <header
      className={`
        ${style.container} 
        ${props.className ?? ''}
      `}
    >
      {props.children}
    </header>
  )
}
    