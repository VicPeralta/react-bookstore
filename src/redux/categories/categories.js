const STATUS = 'bookstore/categories/STATUS';
const INITIAL_STATE = {
  status: 'Under construction',
};

export function checkStatus(id) {
  return {
    type: STATUS,
    payload: id,
  };
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case STATUS:
      return { status: 'Under construction' };
    default: return state;
  }
}
