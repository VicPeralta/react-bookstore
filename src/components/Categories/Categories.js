import { useSelector, useDispatch } from 'react-redux';
import { toggleShow } from '../../redux/categories/categoriesSlice';

const Categories = () => {
  const show = useSelector((state) => state.categories.show);
  const message = useSelector((state) => state.categories.status);
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(toggleShow());
    setTimeout(() => dispatch(toggleShow()), 3000);
  };
  return (
    <>
      <button type="button" onClick={onClick}>Check Status</button>
      {(show) ? <h1>{message}</h1> : ''}
    </>
  );
};

export default Categories;
