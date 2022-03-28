const STATUS = 'STATUS';
const INITIAL_STATE = [];

export function checkStatus(id) {
  return {
    type: STATUS,
    payload: id,
  };
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case STATUS:
      return 'Under construction';
    default: return state;
  }
}
