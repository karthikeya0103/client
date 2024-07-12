import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Home';
import Admin_Login from './admin/Admin_Login';
import Admin_Home from './admin/Admin_Home';
import Not_found from './Not_found';
import AddMentor from './admin/Add_Mentor';
import All_Mentors from './admin/All_Mentors';

function App() {
  return (
   <>
   <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/admin-login' element={<Admin_Login/>}/>
        <Route path='/admin-home' element={<Admin_Home/>}/>
        <Route path='/:trash' element={<Not_found/>}/>
        <Route path='/add-mentor' element={<AddMentor/>}/>
        <Route path='/all-mentors' element={<All_Mentors/>}/>
      </Routes>
   </BrowserRouter>
   </>
   
  );
}

export default App;
