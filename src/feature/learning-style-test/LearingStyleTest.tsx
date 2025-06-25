import { useLearningStyleTestStore } from '../../store/learningStyleTestStore';
import StartScreen from './StartScreen';
import QuestionScreen from './QuestionScreen';

const LearingStyleTest = () => {
  const { step } = useLearningStyleTestStore();

  if (step === 0) return <StartScreen />;
  return <QuestionScreen />;
};

export default LearingStyleTest;
