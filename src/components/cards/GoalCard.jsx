import PropTypes from 'prop-types';
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import CircularProgress from "@mui/material/CircularProgress";



function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" {...props} />
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
          sx={{ color: "text.secondary" }}
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


export const GoalCard = () => {
  return (
    <Card sx={{ display: "flex" }}>
      <Box sx={{ display: "flex", flexGrow: "2", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }} value={25}>
          <Typography
            sx={{ marginBottom: "10px" }}
            component="div"
            variant="h5"
          >
            I am a life long learner
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography component="div" variant="p">
              Beginner
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
            width: "20%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pl: 1,
            pb: 1,
          }}
        >
          <CircularProgressWithLabel value={25} />
        </Box>
    </Card>
  );
};
