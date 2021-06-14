import React, {useState, useEffect} from 'react'
import BooksContainer from './components/BooksContainer'
import Header from './components/Header'
import Search from './components/Search'
import DetailPanel from './components/DetailPanel'
import {GlobalStyle} from './styles'
import {Transition} from 'react-transition-group'

const App = () => {
  const [books, setBooks] = useState([])
  const [selectedBook, setSelectedBook] = useState(null)
  const [showPanel, setShowPanel] = useState(false)
  const [filteredBooks, setFilteredBooks] = useState([])

  console.log('this message is going to load every time the component renders')

  // fetch data and store it state variable
  useEffect(() => {
    const url = 'https://book-club-json.herokuapp.com/books'
    const fetchData = async () => {
      const response = await fetch(url)
      const books = await response.json()
      setBooks(books)
      setFilteredBooks(books)
    }
    fetchData()
  }, [])

  // run this function when user clicks on a book on the list
  const pickBook = (book) => {
    setSelectedBook(book)
    setShowPanel(true)
  }

  const closePanel = () => {
    setShowPanel(false)
  }

  const filterBooks = (searchTerm) => {
    const stringSearch = (bookAttribute, searchTerm) =>
      bookAttribute.toLowerCase().includes(searchTerm.toLowerCase())
    if (!searchTerm) {
      setFilteredBooks(books)
    } else {
      setFilteredBooks(
        books.filter(
          (book) => stringSearch(book.title, searchTerm) || stringSearch(book.author, searchTerm)
        )
      )
    }
  }

  const hasFiltered = filteredBooks.length !== books.length

  return (
    <>
      <GlobalStyle />
      <Header>
        <Search filterBooks={filterBooks} />
      </Header>

      <BooksContainer books={filteredBooks} pickBook={pickBook} isPanelOpen={showPanel} title={hasFiltered ? 'Search results' : 'All Books'} />
      <Transition in={showPanel} timeout={300}>
        {(state) => <DetailPanel book={selectedBook} closePanel={closePanel} state={state} />}
      </Transition>
    </>
  )
}

export default App
