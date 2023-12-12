import './css/App.css'
import Header from './Header'
import MainArea from './MainArea'
import Footer from './Footer'
import { useState } from 'react'

function App() {
  const [page,setPage] = useState('/');

  return (
    <div className='app'>
      <Header setPage={setPage}/>
      <MainArea page={page} setPage={setPage}/>
      <Footer/> 
    </div>
  );
}

export default App
