import reducer, { checkStatus } from './categories';

describe('Categories test', () => {
  test('Check unknown action', () => {
    const categories = [
      {
        id: 1,
        name: 'action',
      },
      {
        id: 2,
        name: 'Science Fiction',
      },
    ];
    const result = reducer(categories, { type: 'NEW', payload: categories });
    expect(result.length).toBe(2);
  });
  test('Check status', () => {
    const categories = [
      {
        id: 1,
        name: 'action',
      },
      {
        id: 2,
        name: 'Science Fiction',
      },
    ];
    const result = reducer(categories, checkStatus(categories));
    expect(result).toBe('Under construction');
  });
});
