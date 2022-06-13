import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignIn from './Component/SignIn/SignIn';
import SignUp from './Component/SignUp/SignUp';

function App() {
  return (
    <div className="App">
        <Routes>
        <Route path="/" element={<SignIn></SignIn>} />
        <Route path="signup" element={<SignUp></SignUp>} />
      </Routes>
    </div>
  );
}

export default App;
