import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([]);

  const searchBooks = async (query) => {
    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
      const data = await response.json();
      const bookItems = data.items.map((item) => ({
        id: item.id,
        title: item.volumeInfo.title,
        authors: item.volumeInfo.authors ? item.volumeInfo.authors.join(', ') : 'Unknown Author',
        thumbnail: item.volumeInfo.imageLinks?.thumbnail || '',
      }));
      setBooks(bookItems);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="App">
      <h1>Book Finder App</h1>
      <SearchBar onSearch={searchBooks} />
      <BookList books={books} />
    </div>
  );
}

export default App;