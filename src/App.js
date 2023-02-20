
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Home from './Pages/Home'; 
import Store from './Pages/Store'
import Iphone from './Pages/Iphone'
import Ipad from './Pages/Ipad'
import Macbook from './Pages/Macbook'
import Accesories from './Pages/Accesories'
import Cart from './Pages/Cart';

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Store' element={<Store/>} />
        <Route path='/Iphone' element={<Iphone/>} />
        <Route path='/Ipad' element={<Ipad/>} />
        <Route path='/Macbook' element={<Macbook/>} />
        <Route path='/Accesories' element={<Accesories/>} />
        <Route path='/Cart' element={<Cart/>}/>
       
    </Routes>
    </BrowserRouter>

</>   
  );
}

export default App;
