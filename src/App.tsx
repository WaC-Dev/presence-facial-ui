import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <form className='wrap'>
          <fieldset className='field-area'>
            <label htmlFor="name">Name</label>
            <input type="text"  id="name" />
          </fieldset>
          <fieldset className='field-area'>
            <label htmlFor="password">Pass:</label>
            <input type="password"  id="password" />
          </fieldset>
          <button type='submit'>Login</button>
      </form>
    </div>
  );
}

export default App;
