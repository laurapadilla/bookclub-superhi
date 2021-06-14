import styled from 'styled-components'

export const Container = styled.figure`
  cursor: ${({$isLarge}) => ($isLarge ? 'default' : 'pointer')};
  margin: 0;
`

export const Cover = styled.img`
  filter: ${({$isLarge}) => ($isLarge ? 'none' : 'grayscale(100%)')};
  border: 2px solid black;
  object-fit: cover;
  aspect-ratio: 2 / 3;
  width: 100%;
  margin-bottom: 1rem;
`
export const Title = styled.h3`
  font-size: ${({$isLarge}) => ($isLarge ? '42px' : '28px')};
  margin: 0 0 10px 0;
  line-height: 1.3;
  @media (max-width: 800px) {
    font-size: ${({$isLarge}) => ($isLarge ? '32px' : '22px')};
  }
`

export const Author = styled.h4`
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
  font-family: 'Libre Baskerville';
  font-style: italic;
`
