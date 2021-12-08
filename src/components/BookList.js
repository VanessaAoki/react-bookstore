import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import { fetchGetBooks } from '../redux/books/books';

const BookList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGetBooks());
  }, []);
  const { books } = useSelector((state) => state.books);
  return (
    <div>
      <ul className="book-list">
        {
          books.map((bookObj) => (
            <Book
              key={bookObj.item_id}
              item_id={bookObj.item_id}
              title={bookObj.title}
              category={bookObj.category}
            />
          ))
        }
      </ul>
    </div>
  );
};

export default BookList;
