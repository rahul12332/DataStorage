import Footer from './components/Footer';
import Header from './components/Header';
import LandingPage from './screens/LandingPage/LandingPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CreateNotes from './screens/myNotes/CreateNotes';
import LoginPage from './screens/LoginPage/LoginPage';
import RegisterPage from './screens/RegisterPage/RegisterPage';
import PageError from './screens/errorPage/PageError';

function App() {
  return (    
<>
<BrowserRouter>
<Header/>
<Routes>
<Route exact path='/' element={<LandingPage/>}/>
<Route path='/login' element={<LoginPage/>}/>
<Route path='/register' element={<RegisterPage/>}/>
<Route path='/createnotes' element={<CreateNotes/>}/>
<Route path='/*' element={<PageError/>}/>


</Routes>
<Footer/>
</BrowserRouter>
</>  );
}

export default App;
