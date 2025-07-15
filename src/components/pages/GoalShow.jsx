import { useParams } from "react-router-dom";
import useGoalStore from "../../store/useGoalStore";
import { ProgressRingShow } from "../shared/ProgressRingShow";
import { useEffect } from "react";
import { Typography, Box, Card, CardContent, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles("dark", {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#1a90ff",
    ...theme.applyStyles("dark", {
      backgroundColor: "#308fe8",
    }),
  },
}));

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
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <ProgressRingShow value={75} size={240} thickness={3} />
      </Box>
      <Card variant="outlined" sx={{ mb: 2 }}>
        <CardContent>
          <Typography
            gutterBottom
            sx={{ color: "text.secondary", fontSize: 14 }}
          >
            Beginner Phase: 1/8
          </Typography>
          <BorderLinearProgress variant="determinate" value={50} />
        </CardContent>
      </Card>
    </Box>
  );
};
