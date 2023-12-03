import { Fab, Typography } from '@mui/material';
import ElectricBoltOutlinedIcon from '@mui/icons-material/ElectricBoltOutlined';

export const FastBuyButton = () => (
  <Fab variant='extended' color='info' size='large'>
    <ElectricBoltOutlinedIcon sx={{ mr: 1 }} />
    <Typography variant='subtitle1'>Nakoupit Zrychleně</Typography>
  </Fab>
);
