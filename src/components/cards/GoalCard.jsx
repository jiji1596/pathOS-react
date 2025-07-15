import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

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
        <CircularProgressWithLabel sx={{ marginBottom: "6px" }} value={75} />
        <Typography component="div" variant="body1">
          Daily time goal
        </Typography>
      </Box>
    </Card>
  );
};



function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex"}}>
      <CircularProgress
        size={64}
        thickness={6}
        sx={{backgroundColor: "yellow"}}
        variant="determinate"
        {...props}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          sx={{ fontSize: "18px", fontWeight: "600" }}
        >
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};
