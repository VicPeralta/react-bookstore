import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { checkStatus } from '../../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => (state.categoriesReducer.status));
  const [show, setShow] = useState(false);
  const onClick = () => {
    dispatch(checkStatus());
    setShow(true);
    setTimeout(() => setShow(false), 3000);
  };
  return (
    <>
      <button type="button" onClick={onClick}>Check Status</button>
      {(show) ? <h1>{status}</h1> : ''}
    </>
  );
};

export default Categories;
