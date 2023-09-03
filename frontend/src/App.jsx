import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/books')
      .then((res) => res.json())
      .then(({ data }) => setBooks(data));
  }, []);

  return (
    <>
      <header>
        <h1 className='header-title'>Book list</h1>
      </header>

      <section className='container'>
        {books?.map((book) => (
          <article key={book.id}>
            <h1>{book.title}</h1>
            <p>{book.author}</p>
          </article>
        ))}
      </section>
    </>
  );
}

export default App;
