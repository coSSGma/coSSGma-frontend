import { create } from 'zustand';

interface ExampleProps {
  example: string,
  setExample: (myState: string) => void,
  resetState: () => void,
}

export const useExampleStore = create<ExampleProps>((set) => ({
  example: "first",
  setExample: (myState: string) => set(() => ({ example: myState })),
  resetState: () => set(() => ({ example: "" })),
}));

// 사용법
// const example = useExampleStore(state => state.example);
// const setExample = useExampleStore(state => state.setExample);