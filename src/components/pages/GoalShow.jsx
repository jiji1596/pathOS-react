import { useParams } from "react-router-dom";
import useGoalStore from "../../store/useGoalStore";
import { ProgressRingShow } from "../shared/ProgressRingShow";
import { PhaseCard } from "../shared/PhaseCard";
import { useEffect } from "react";
import { Typography, Box, Button } from "@mui/material";




export const GoalShow = () => {
  const { id } = useParams();
  const { goal, fetchGoal } = useGoalStore();

  useEffect(() => {
    console.log(goal);

    if (id) fetchGoal(id);
  }, [id, fetchGoal]);

  if (!goal) {
    return <p>Loading goal...</p>; // or fetch it from API
  }

  return (
    <Box sx={{ pt: 12, px: 1 }}>
      {" "}
      {/* pt: 20 = paddingTop: 160px */}
      <Typography variant="h4" sx={{ fontWeight: 500, mb: 2 }}>
        {goal.identity_statement}
      </Typography>
      <Button
        variant="contained"
        sx={{
          minWidth: 360,
          minHeight: 64,
          mb: 2,
          mx: "auto",
          display: "block",
        }}
      >
        Do Task
      </Button>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 3,
        }}
      >
        <ProgressRingShow value={75} size={240} thickness={3} />
      </Box>
      <PhaseCard goal={goal} />
    </Box>
  );
};
