import React, {useRef, useEffect, useState} from 'react'
import {debounce} from 'lodash-es'
import Book from '../Book/index'
import {Container, H2, BookList} from './styles'

const BooksContainer = ({books, pickBook, isPanelOpen, title}) => {
  // stores the Y coordinate scroll position on browser as a pixel value
  const [scroll, setScroll] = useState(0)
  const prevPanelState = useRef(false)

  useEffect(() => {
    const handleScroll = debounce(() => {
      setScroll(window.scrollY)
    }, 100)

    if (!isPanelOpen) {
      window.addEventListener('scroll', handleScroll)
    }
    // remove any existing scroll even handlers before useEffect function gets rerun
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isPanelOpen]) // only runs when isPanelOpen value changes

  useEffect(() => {
    if (prevPanelState.current && !isPanelOpen) {
      window.scroll(0, scroll)
    }

    prevPanelState.current = isPanelOpen
  }, [isPanelOpen, prevPanelState, scroll])

  return (
    <Container $isPanelOpen={isPanelOpen} $top={scroll}>
      <H2>{title}</H2>
      <BookList>
        {books.map((book) => (
          <Book key={book.id} book={book} pickBook={pickBook} />
        ))}
      </BookList>
    </Container>
  )
}

export default BooksContainer
