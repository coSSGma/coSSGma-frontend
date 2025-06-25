import { create } from 'zustand';

interface Answer {
  questionId: number;
  answer: string;
}

interface LearningStyleTestState {
  step: number; // 0: 시작화면, 1~N: 질문
  answers: Answer[];
  goNext: () => void;
  selectAnswer: (questionId: number, answer: string) => void;
  reset: () => void;
}

export const useLearningStyleTestStore = create<LearningStyleTestState>((set) => ({
  step: 0,
  answers: [],
  goNext: () => set((state) => ({ step: state.step + 1 })),
  selectAnswer: (questionId, answer) =>
    set((state) => ({
      answers: [
        ...state.answers.filter((a) => a.questionId !== questionId),
        { questionId, answer },
      ],
    })),
  reset: () => set({ step: 0, answers: [] }),
}));