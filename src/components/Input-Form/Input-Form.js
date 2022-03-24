import './Input-Form.css';

const InputForm = () => (
  <form className="input-form">
    <label htmlFor="title">
      Title
      <input type="text" name="title" id="title" required />
    </label>
    <label htmlFor="author">
      Author
      <input type="text" name="author" id="author" required />
    </label>
    <input type="submit" />
  </form>
);

export default InputForm;
