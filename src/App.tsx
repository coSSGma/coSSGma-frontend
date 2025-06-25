import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './feature/login/login';
import Layout from './layout/Layout';

function App() {  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
        
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
