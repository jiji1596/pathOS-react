import { create } from "zustand";
import axios from "axios";

const useGoalStore = create((set) => ({
  goals: [],
  error: null,
  goal: null,
  fetchGoals: async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/v1/goals");
      set({ goals: res.data });
    } catch (err) {
      set({ error: err.message, isLoading: false });
    }
  },
  fetchGoal: async (id) => {
    try {
      const res = await axios.get(`http://localhost:3000/api/v1/goals/${id}`); // adjust this to your API route
      set({ goal: res.data });
    } catch (err) {
      set({ error: err.message, isLoading: false });
    }
  },
}));

export default useGoalStore;
