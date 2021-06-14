import styled from 'styled-components'
import {Pill} from '../../styles'

export const Panel = styled.article`
  background-color: #ffe581;
  border-left: 2px solid black;
  height: calc(100vh - 82px); // 82px is from header component height
  width: 660px;

  position: fixed;
  right: ${({$state}) => ($state === 'entering' || $state === 'entered' ? 0 : '-660px')};
  bottom: 0;
  z-index: 2;

  box-sizing: border-box;
  padding: 40px 120px 60px 40px;

  overflow: scroll;
  transition: 300ms;

  @media (max-width: 800px) {
    border-left: none;
    padding: 40px 86px 20px 20px;
    width: 100vw;
    height: calc(100vh - 75px);
    right: unset;
    bottom: ${({$state}) => ($state === 'entering' || $state === 'entered' ? 0 : '-100vh')};
    z-index: 3;
  }
`

export const P = styled.p`
  font-family: 'Libre Baskerville';
  font-size: 1rem;
  line-height: 1.6;
  margin: 30px 0 0;
  font-style: normal;
`

export const Em = styled.em`
  font-style: italic;
`

export const CloseWrapper = styled(Pill)`
  display: ${({$state}) => ($state === 'entered' ? 'flex' : 'none')};
  cursor: pointer;
  position: fixed;
  top: 120px;
  right: 40px;
  z-index: 4;

  @media (max-width: 800px) {
    top: unset;
    bottom: 20px;
    right: 20px;
  }
`

export const BG = styled.div`
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 1;
  opacity: ${({$state}) => ($state === 'entering' || $state === 'entered' ? 1 : 0)};
  pointer-events: ${({$state}) => ($state === 'exited' ? 'none' : 'auto')};
  transition: 300ms;
`
