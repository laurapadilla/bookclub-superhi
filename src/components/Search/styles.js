import styled from 'styled-components'
import {Pill} from '../../styles'
import {ReactComponent as MagnifyingIcon} from '../../assets/search.svg'

export const SearchContainer = styled(Pill)`
  width: ${({$showOnDesktop}) => ($showOnDesktop ? '420px' : '20px')};
  transition: all 0.3s ease;

  @media (max-width: 800px) {
    width: 85%;
  }

  input,
  button {
    display: ${({$showOnDesktop}) => ($showOnDesktop ? 'block' : 'none')};
    @media (max-width: 800px) {
      display: block;
    }
  }
`

export const Input = styled.input`
  font-family: 'Work Sans';
  font-weight: 700;
  font-size: 18px;
  flex-grow: 1;
  background: inherit;
  border: none;
  padding: 6px;
`

export const Icon = styled(MagnifyingIcon)`
  width: 20px;
  cursor: pointer;
`

export const Wrapper = styled.div`
  @media (max-width: 800px) {
    background: #ffbccc;
    border-top: 2px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 64px;
    width: 100vw;
    position: fixed;
    left: 0;
    bottom: 0;
    z-inex: 1;
  }
`
