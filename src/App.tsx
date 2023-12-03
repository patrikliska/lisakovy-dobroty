import { Box } from '@mui/material';

import { DebtList, NavBar } from './widgets';

export const App = () => (
  <>
    <NavBar />
    <Box sx={{ p: 2, minHeight: '100%', minWidth: '100vw', display: 'flex' }}>
      <DebtList />
    </Box>
  </>
);
