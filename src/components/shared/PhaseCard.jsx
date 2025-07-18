import { useState } from "react";
import {
  Card,
  CardContent,
  IconButton,
  Collapse,
  Typography,
  Box,
  CardActions,
  ListSubheader,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 20,
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

export const PhaseCard = ({ goal }) => {
  const [open, setOpen] = useState(false);

  return (
    <Card
      variant="outlined"
      sx={{
        mb: 0,
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
      onClick={() => setOpen(!open)}
    >
      <CardContent sx={{ position: "relative" }}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ color: "text.primary", fontWeight: 500 }}
        >
          {goal.phases[0].title}
        </Typography>

        <BorderLinearProgress variant="determinate" value={50} />
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
          <Typography
            gutterBottom
            sx={{ color: "text.secondary", fontSize: 16 }}
          >
            Phase: 1/{goal.phases.length}
          </Typography>
          <Typography
            gutterBottom
            sx={{ color: "text.secondary", fontSize: 16 }}
          >
            50%
          </Typography>
        </Box>
        <CardActions
          sx={{ justifyContent: "flex-end", height: 0, width: "100%" }}
        >
          <IconButton onClick={() => setOpen(!open)}>
            {open ? (
              <ExpandLess sx={{ fontSize: 32 }} />
            ) : (
              <ExpandMore sx={{ fontSize: 32 }} />
            )}
          </IconButton>
        </CardActions>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            component="div"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Phases
              </ListSubheader>
            }
          >
            {goal.phases.length > 0 &&
              goal.phases.map((phase) => {
                return (
                  <ListItemButton key={phase.id}>
                    <ListItemText primary={`Phase ${phase.phase_number}: ${phase.title}`} />
                  </ListItemButton>
                );
              })}
          </List>
        </Collapse>
      </CardContent>
    </Card>
  );
};
