import { Fab, Typography } from '@mui/material';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';

export const BuyButton = () => (
  <Fab sx={{ width: 'fit-content' }} variant='extended' color='secondary' size='large'>
    <AddShoppingCartOutlinedIcon sx={{ mr: 1 }} />
    <Typography variant='subtitle1'>Nakoupit</Typography>
  </Fab>
);
