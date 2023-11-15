import { useState } from 'react'
import './App.css'
import Reorder from './Reorder'

function App() {
  const [count, setCount] = useState(0);

  return (
      <div className="card">
        <p>count is {count}</p>

        <div className='card__btn'>
          <button 
            className='btn add-btn'
            onClick={() => setCount((count) => count + 1)}
          > 
            +/Add
          </button>
          <button
            className='btn subtract-btn'
            onClick={()=> setCount((count) => count - 1)}
            disabled={!count} 
          > 
            -/Sub
          </button>
          {
            count === 0?
            <Reorder onReorder={setCount}/> :<></>
          }
        </div>
      </div>
  );
}

export default App
