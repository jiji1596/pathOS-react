import { useParams } from "react-router-dom";
import useGoalStore from "../../store/useGoalStore";
import { Typography } from "@mui/material";

export const GoalShow = () => {
  const { id } = useParams();
  const { goals } = useGoalStore();

  // Try to find the goal with the matching id
  const goal = goals.find((g) => g.id.toString() === id);

  if (!goal) {
    return <p>Loading goal...</p>; // or fetch it from API
  }

  return (
    <Typography variant="h1" sx={{position: "relative", top: "200px"}}>
      {goal.identity_statement}
    </Typography>
  );
};
