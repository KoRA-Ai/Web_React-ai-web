import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import Navbar from './Navbar'
import McdMenu from './McdMenu'

function App() {
  return (
    
   <BrowserRouter>
    <Navbar />

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/mcd-menu' element={<McdMenu />}/>
      <Route path='*' element={<p >404</p>} />

    </Routes>
   </BrowserRouter>
  );
}

export default App;
