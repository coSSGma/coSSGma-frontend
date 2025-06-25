import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./feature/login/login";
import Layout from "./layout/Layout";
import LearingStyleTest from "./feature/learning-style-test/LearingStyleTest";
import TestResult from "./feature/learning-style-test/TestResult";
import StudyPage from "./feature/study/StudyPage";
import StudyStart from "./feature/study/components/StudyStart";
import StudyMatching from "./feature/matching/StudyMatching";
import MatchingLoading from "./feature/matching/MatchingLoading";
import MatchedStudyRoom from "./feature/matching/MatchedStudyRoom";
import StudyGame from "./feature/study/components/StudyGame";
import QuizResult from "./feature/study/components/QuizResult";
import AllStudyRoom from "./feature/study/components/AllStudyRoom";
import StudyInfo from "./feature/study/components/StudyInfo";
// import RankingHome from "./feature/ranking/RangingHome";
import Home from "./feature/home/Home";
import QuizAnalysis from "./feature/study/components/QuizAnalysis";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/learning-test" element={<LearingStyleTest />} />
        <Route path="/result" element={<TestResult />} />
        <Route path="/study-matching" element={<StudyMatching />} />
        <Route path="/matching-study-room" element={<MatchingLoading />} />
        <Route path="/matched-study-room" element={<MatchedStudyRoom />} />
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="study-main" element={<StudyPage />} />
          <Route path="study-main/all-study-rooms" element={<AllStudyRoom />} />
          <Route path="study/info" element={<StudyInfo />} />
          <Route path="study/info/learning" element={<StudyStart />} />
          <Route path="study/info/participate" element={<StudyGame />} />
          <Route path="study/info/quiz/result" element={<QuizResult />} />
          <Route path="ranking" element={<QuizAnalysis />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
