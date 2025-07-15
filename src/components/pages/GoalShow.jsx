import { useParams } from "react-router-dom";
import useGoalStore from "../../store/useGoalStore";
import { useEffect } from "react";
import { Typography, Box, Card, CardContent } from "@mui/material";

export const GoalShow = () => {
  const { id } = useParams();
  const { goal, fetchGoal } = useGoalStore();

  useEffect(() => {
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
      <Card variant="outlined">
        <CardContent>
          <Typography
            gutterBottom
            sx={{ color: "text.secondary", fontSize: 14 }}
          >
            Word of the Day
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
