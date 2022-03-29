import PropTypes from 'prop-types';
import './Input-Form.css';

const InputForm = (props) => {
  const { onSubmit } = props;
  const handler = (e) => {
    e.preventDefault();
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    if (!title.checkValidity()) {
      title.reportValidity();
      return;
    }
    if (!author.checkValidity()) {
      author.reportValidity();
      return;
    }
    onSubmit(title.value, author.value);

    author.value = '';
    title.value = '';
    title.focus();
  };

  return (
    <form className="input-form">
      <label htmlFor="title">
        Title
        <input type="text" name="title" id="title" required />
      </label>
      <label htmlFor="author">
        Author
        <input type="text" name="author" id="author" required />
      </label>
      <button
        aria-label="submit"
        type="submit"
        name="submit"
        id="submit"
        onClick={handler}
      >
        Submit
      </button>
    </form>
  );
};
InputForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default InputForm;
