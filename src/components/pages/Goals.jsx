import Stack from "@mui/material/Stack";
import { GoalCard } from "../cards/GoalCard";


export const Goals = () => {
  return (
    <Stack spacing={2} sx={{paddingTop: '100px'}}>
      <GoalCard />
      <GoalCard />
      <GoalCard />
    </Stack>
  );
};
