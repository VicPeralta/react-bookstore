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
    <button aria-label="submit" type="submit" name="submit" id="submit">Submit</button>
  </form>
);

export default InputForm;
