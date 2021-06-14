import styled from 'styled-components'
import {ReactComponent as LogoSVG} from '../../assets/logo.svg'

export const Logo = styled(LogoSVG)`
  height: 40px;
  width: 270px;
  display: block;

  @media (max-width: 800px) {
    height: 33px;
    width: 222px;
  }
`

export const HeaderContainer = styled.header`
  background-color: #ffbccc;
  border-bottom: 2px solid black;
  padding: 1.25rem 2.5rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  position: fixed;
  z-index: 3;

  @media (max-width: 800px) {
    padding: 1.25rem;
  }
`
