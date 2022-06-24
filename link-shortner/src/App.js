import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignIn from './Component/SignIn/SignIn';
import SignUp from './Component/SignUp/SignUp';
import Home from './Component/Home/Home';

function App() {
  return (
    <div className="">
        <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/signin" element={<SignIn></SignIn>} />
        <Route path="signup" element={<SignUp></SignUp>} />
      </Routes>
    </div>
  );
}

export default App;
