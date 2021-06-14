import styled from 'styled-components'

export const Container = styled.div`
  background-color: #a7e1f8;
  padding: 160px 40px;
  overflow: ${({$isPanelOpen}) => ($isPanelOpen ? 'hidden' : 'scroll')};
  position: ${({$isPanelOpen}) => ($isPanelOpen ? 'fixed' : 'unset')};
  top: ${({$isPanelOpen, $top}) => ($isPanelOpen ? `-${$top}px` : 0)};

  @media (max-width: 800px) {
    padding: 114px 20px;
  }
`

export const H2 = styled.h2`
  font-size: 2.5rem;
  margin: 0 0 10px 0;

  @media (max-width: 800px) {
    font-size: 2rem;
  }
`

export const BookList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 2.5rem;
  grid-gap: 120px;
  margin-top: 2.5rem;
  max-width: 1200px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 60px;
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 1.25rem;
  }
`
