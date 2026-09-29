import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type ProgressState = {
  read: string[];
  markRead: (id: string) => void;
  quizBest: number;
  setQuizBest: (n: number) => void;
};

export const useProgress = create<ProgressState>()(
  persist(
    (set, get) => ({
      read: [],
      markRead: (id) => {
        if (get().read.includes(id)) return;
        set({ read: [...get().read, id] });
      },
      quizBest: 0,
      setQuizBest: (n) => set({ quizBest: Math.max(get().quizBest, n) }),
    }),
    {
      name: "ems-manual-progress",
      storage: createJSONStorage(() => localStorage),
      skipHydration: true,
    },
  ),
);
