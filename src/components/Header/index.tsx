import { useTheme } from 'styled-components'
import { HeaderContainer } from './styles'
import { ClockCounterClockwise, Scroll, Timer } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  const theme = useTheme()
  return (
    <HeaderContainer>
      <ClockCounterClockwise size={30} color={theme['green-500']} />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
