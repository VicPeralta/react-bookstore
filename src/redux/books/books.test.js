import reducer, { addBook, removeBook } from './books';

describe('Books test', () => {
  test('Add book', () => {
    // Initial state
    const books = [
      {
        id: 1,
        auhor: 'Suzanne Collins',
        title: 'The Hunger Games',
      },
    ];
    const result = reducer(books, addBook({
      id: 2,
      auhor: 'Frank Herbert',
      title: 'Dune',
    }));
    expect(result.length).toBe(2);
  });

  test('Remove book', () => {
    const books = [
      {
        id: 1,
        auhor: 'Suzanne Collins',
        title: 'The Hunger Games',
      },
      {
        id: 2,
        auhor: 'Frank Herbert',
        title: 'Dune',
      },
    ];
    const result = reducer(books, removeBook({
      id: 2,
    }));
    expect(result.length).toBe(1);
  });
});
