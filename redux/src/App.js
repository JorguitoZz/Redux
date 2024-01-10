import { incrementar, decrementar, reset } from './GlobalState'
import { useSelector, useDispatch } from 'react-redux';

function App() {

  const count =  useSelector((estado) => estado.count)
  const dispatch = useDispatch()

  return (
    <>
    <div>{count}</div>
    <div>
      <button onClick={() => {dispatch(incrementar)}}>Incrementar</button>
      <button onClick={() => {dispatch(decrementar)}}>decrementar</button>
      <button onClick={() => {dispatch(reset)}}>reset</button>
    </div>
    </>
  )
}

export default App;
