
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import List from './pages/List/List';
import Login from './pages/Login/Login';
import New from './pages/New/New';
import Single from './pages/Single/Single';

function App() {
  return (
    <div >

     <BrowserRouter>
     <Routes>
       <Route path='/'>
          <Route index element={<Home/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='users' >
            <Route index element={<List/>}/>
            <Route path=':userId' element={<Single/>}/>
            <Route path='new' element={<New/>}/> 
          </Route>
        </Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
