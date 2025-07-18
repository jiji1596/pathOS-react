import { Box, Card, CardContent, Typography } from "@mui/material";

import { ProgressRing } from "../shared/ProgressRing";

export const GoalCard = ({ goal }) => {


  return (
    <Card sx={{ display: "flex", p: 2 }}>
      <Box sx={{ display: "flex", flexGrow: "2", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }} value={25}>
          <Typography
            sx={{ marginBottom: "0px", fontWeight: "500", fontSize: "22px" }}
            component="div"
            variant="h5"
          >
            {goal.identity_statement}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "start", gap: "5px" }}>
            <Typography component="div" variant="body1">
              Phase 1:
            </Typography>
            <Typography
              sx={{ textTransform: "capitalize" }}
              component="div"
              variant="body1"
            >
              {goal.current_level}
            </Typography>
          </Box>
        </CardContent>
      </Box>
      <Box
        sx={{
          width: "30%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          p: 0,
        }}
      >
        <ProgressRing sx={{ marginBottom: "6px" }} value={75} />
        <Typography component="div" variant="body1">
          Daily time goal
        </Typography>

      </Box>
    </Card>
  );
};
