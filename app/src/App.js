import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import List from './components/List';
import About from './components/About';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Home from './components/Home';
function App() {
  return (
    <>
    <List/>
    <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/signin" element={<SignIn/>}/>
         <Route path="/signup" element={<SignUp/>}/>     
    </Routes>
    </>
  );
}

export default App;
