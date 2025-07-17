import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Stack, Button } from "@mui/material";
import { GoalCard } from "../cards/GoalCard";
import AddIcon from '@mui/icons-material/Add';
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
        <Button
        variant="contained"
        sx={{
          p: 2,
          mb: 2,
          mx: "auto",
          display: "block",
        }}
      >
        <AddIcon sx={{fontSize: 40}} />
      </Button>
    </Stack>
  );
};
