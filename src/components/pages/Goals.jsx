
import { useEffect } from "react";
import Stack from "@mui/material/Stack";
import { GoalCard } from "../cards/GoalCard";
import useGoalStore from "../../store/useGoalStore";


export const Goals = () => {
  const { goals, fetchGoals } = useGoalStore();

  useEffect(() => {
    fetchGoals(); // call on mount
    console.log(goals);

  }, [fetchGoals]);

  return (
    <Stack spacing={2} sx={{paddingTop: '100px'}}>
      { goals.length > 0 &&
        goals.map((goal, key) => {
          return (
          < GoalCard goal={goal} key={key} />
          )
        })
      }
    </Stack>
  );
};
