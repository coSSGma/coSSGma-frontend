import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './feature/login/login';
import Layout from './layout/Layout';
import LearingStyleTest from './feature/learning-style-test/LearingStyleTest';
import TestResult from './feature/learning-style-test/TestResult';
import StudyPage from './feature/study/StudyPage';
import StudyStart from './feature/study/components/StudyStart';
import StudyGame from './feature/study/components/StudyGame';
import QuizResult from './feature/study/components/QuizResult';

function App() {  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='' element={<StudyPage />} />
          <Route path='learning' element={<StudyStart />} />
          <Route path='participate' element={<StudyGame />} />
          <Route path='quiz/result' element={<QuizResult />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/learning-test" element={<LearingStyleTest />} />
        <Route path="/result" element={<TestResult />} />
      </Routes>
    </Router>
  );
}

export default App;
