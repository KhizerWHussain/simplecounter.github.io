import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/actions";

function App() {
  const countState = useSelector((state) => state.numberChange);
  const dispatch = useDispatch();
  return (
    <div className='App'>
      <div className="container">
        <h1>Increment/Decrement Counter</h1>
        <h4>made using react-redux</h4>

        <div className='counting'>
          <a className='minus' title='Decrement' onClick={() => dispatch(decNumber(1))}><span>-</span></a>
          <input type="text" name="count" id="count" className='count_input' readOnly value={countState} />
          <a className='plus' title='Increment' onClick={() => dispatch(incNumber(1))}><span>+</span></a>
        </div>
      </div>
    </div>
  );
}

export default App;
