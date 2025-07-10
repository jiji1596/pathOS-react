
import { useEffect } from "react";
import Stack from "@mui/material/Stack";
import { GoalCard } from "../cards/GoalCard";
import useGoalStore from "../../store/useGoalStore";


export const Goals = () => {
  const { goals, fetchGoals, error } = useGoalStore();

  useEffect(() => {
    fetchGoals(); // call on mount
  }, [fetchGoals]);

  return (
    <Stack spacing={2} sx={{paddingTop: '100px'}}>
      { goals.length > 0 &&
        <GoalCard />
      }
    </Stack>
  );
};
