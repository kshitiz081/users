import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
// import useToken from './useToken';
import SignupPage from './SignupPage';

function App() {
  // const { token, setToken } = useToken();
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/Login' element={<LoginPage/>} />
          <Route path='/Signup' element={<SignupPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
