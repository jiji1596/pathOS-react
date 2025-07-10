import PropTypes from 'prop-types';
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import CircularProgress from "@mui/material/CircularProgress";
import useGoalStore from '../../store/useGoalStore';



function CircularProgressWithLabel(props) {

  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress size={64} thickness={6} sx={{}} variant="determinate" {...props} />
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
          sx={{ color: "text.secondary", fontSize: "18px", fontWeight: "600" }}
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


export const GoalCard = ({goal}) => {
  return (
    <Card sx={{ display: "flex", backgroundColor: "#CDFFC5", p: 1}}>
      <Box sx={{ display: "flex", flexGrow: "2", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }} value={25}>
          <Typography
            sx={{ marginBottom: "10px",
              fontWeight: "500",
              fontSize: "22px"
             }}
            component="div"
            variant="h5"
          >
            { goal.identity_statement }
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{textTransform: "capitalize"}} component="div" variant="p">
              { goal.current_level}
            </Typography>
            <Typography component="div" variant="p">
              Phase 1 of 8
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={50}
            sx={{ padding: "5px", borderRadius: "15px" }}
          />
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
          <CircularProgressWithLabel sx={{marginBottom: "6px"}} value={75} />
          <Typography component="div" variant="p">
            Daily time goal
          </Typography>
        </Box>
    </Card>
  );
};
