import { create } from 'zustand';

interface AuthProps {
  userid: number,
  name: string,
  setUserId: (myId: number) => void,
  setName: (name: string) => void,
  resetState: () => void,
}

export const useAuthStore = create<AuthProps>((set) => ({
  userid: 0,
  name: "",
  setUserId: (myId: number) => set(() => ({ userid: myId })),
  setName: (name: string) => set(() => ({ name: name })),
  resetState: () => set(() => ({ userid: 0, name: "" })),
}));