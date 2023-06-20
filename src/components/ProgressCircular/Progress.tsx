import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { FC } from "react";

const ProgressCircular:FC = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', padding: '250px'}}>
      <CircularProgress />
    </Box>
  );
};

export default ProgressCircular;