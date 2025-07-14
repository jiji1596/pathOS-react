import { useEffect } from "react";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import { GoalCard } from "../cards/GoalCard";
import useGoalStore from "../../store/useGoalStore";

export const Goals = () => {
  const { goals, fetchGoals } = useGoalStore();

  useEffect(() => {
    fetchGoals(); // call on mount
  }, [fetchGoals]);

  return (
    <Stack spacing={2} sx={{ paddingTop: "100px" }}>
      {goals.length > 0 &&
        goals.map((goal) => {
          return (
            <Link style={{textDecoration: "none"}} key={goal.id} to={`/goals/${goal.id}`}>
              <GoalCard goal={goal} underline="none" />
            </Link>
          );
        })}
    </Stack>
  );
};
