import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './feature/login/login';
import Layout from './layout/Layout';
import Home from './feature/home/Home';
import StudyPage from './feature/study/StudyPage';

function App() {  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='' element={<StudyPage />} />
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
