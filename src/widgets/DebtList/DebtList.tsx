import { Box, Container, Grid } from '@mui/material';

import { BuyButton, DebtTicket, FastBuyButton } from '../../components';

type Change = 'add' | 'remove';

export interface Customer {
  id: number;
  name: string;
  username?: string;
  cart?: Record<string, number>;
  logs?: Record<string, { change: Change; count: number; product: string }>;
}

const arrayOfObjects: Customer[] = [
  { id: 1, name: 'John Doe', username: 'johndoe', cart: { 'coca cola': 14 }, logs: { '1697297368': { change: 'add', count: 3, product: 'cola' } } },
  { id: 2, name: 'Jane Smith', username: 'janesmith', cart: { 'coca cola': 10, 'monster energy': 5 }, logs: { '1725120000': { change: 'add', count: 2, product: 'coca cola' } } },
  { id: 3, name: 'Bob Johnson', username: 'bobjohnson', cart: { snickers: 7 }, logs: { '1751416000': { change: 'remove', count: 1, product: 'snickers' } } },
  { id: 4, name: 'Alice Brown', username: 'alicebrown', cart: { 'coca cola zero': 8, corny: 3 }, logs: { '1778484000': { change: 'add', count: 4, product: 'coca cola zero' } } },
  { id: 5, name: 'Mike Wilson', username: 'mikewilson', cart: { birell: 12 }, logs: { '1805760000': { change: 'remove', count: 3, product: 'birell' } } },
  { id: 6, name: 'Emily Davis', username: 'emilydavis', cart: { mars: 6, 'Dr. witt': 2 }, logs: { '1832856000': { change: 'add', count: 1, product: 'mars' } } },
  {
    id: 7,
    name: 'David Lee',
    username: 'davidlee',
    cart: { 'monster energy': 3, 'coca cola': 7, snickers: 4 },
    logs: { '1860132000': { change: 'add', count: 2, product: 'coca cola' } },
  },
  { id: 8, name: 'Linda Taylor', username: 'lindataylor', cart: { birell: 15, 'coca cola zero': 5 }, logs: { '1887216000': { change: 'remove', count: 3, product: 'birell' } } },
  { id: 9, name: 'John Smith', username: 'johnsmith', cart: { snickers: 10 }, logs: { '1914492000': { change: 'add', count: 1, product: 'snickers' } } },
  { id: 10, name: 'Amanda Johnson', username: 'amandajohnson', cart: { 'coca cola': 6, 'Dr. witt': 2 }, logs: { '1941768000': { change: 'add', count: 1, product: 'coca cola' } } },
  {
    id: 11,
    name: 'Sarah Miller',
    username: 'sarahmiller',
    cart: { 'coca cola zero': 10, 'monster energy': 6 },
    logs: { '1969044000': { change: 'add', count: 2, product: 'monster energy' } },
  },
  { id: 12, name: 'Michael Davis', username: 'michaeldavis', cart: { mars: 8 }, logs: { '1996320000': { change: 'remove', count: 2, product: 'mars' } } },
  { id: 13, name: 'Olivia Wilson', username: 'oliviawilson', cart: { corny: 4, 'Dr. witt': 3 }, logs: { '2023680000': { change: 'add', count: 3, product: 'Dr. witt' } } },
  { id: 14, name: 'Daniel Lee', username: 'daniellee', cart: { 'coca cola': 9, snickers: 5 }, logs: { '2050956000': { change: 'add', count: 2, product: 'snickers' } } },
  { id: 15, name: 'Sophia Taylor', username: 'sophiataylor', cart: { birell: 14, 'monster energy': 2 }, logs: { '2078232000': { change: 'remove', count: 3, product: 'birell' } } },
  { id: 16, name: 'William Smith', username: 'williamsmith', cart: { 'coca cola zero': 7 }, logs: { '2105514000': { change: 'add', count: 1, product: 'coca cola zero' } } },
  { id: 17, name: 'Ava Johnson', username: 'avajohnson', cart: { 'coca cola': 8, 'coca cola zero': 4 }, logs: { '2132874000': { change: 'add', count: 2, product: 'coca cola' } } },
  { id: 18, name: 'James Brown', username: 'jamesbrown', cart: { 'monster energy': 5, snickers: 3 }, logs: { '2160150000': { change: 'remove', count: 2, product: 'snickers' } } },
  { id: 19, name: 'Mia Davis', username: 'miadavis', cart: { birell: 9, 'Dr. witt': 4 }, logs: { '2187426000': { change: 'add', count: 1, product: 'birell' } } },
  { id: 20, name: 'Benjamin Wilson', username: 'benjaminwilson', cart: { 'coca cola zero': 6, corny: 5 }, logs: { '2214702000': { change: 'add', count: 3, product: 'corny' } } },
  {
    id: 21,
    name: 'Ethan Anderson',
    username: 'ethananderson',
    cart: { 'coca cola': 12, 'monster energy': 8 },
    logs: { '2241978000': { change: 'add', count: 3, product: 'coca cola' } },
  },
  {
    id: 22,
    name: 'Chloe Harris',
    username: 'chloeharris',
    cart: { 'coca cola zero': 7, birell: 6 },
    logs: { '2269254000': { change: 'remove', count: 2, product: 'coca cola zero' } },
  },
  { id: 23, name: 'Christopher Martin', username: 'christophermartin', cart: { corny: 9, snickers: 4 }, logs: { '2296530000': { change: 'add', count: 1, product: 'snickers' } } },
  { id: 24, name: 'Lily Garcia', username: 'lilygarcia', cart: { 'Dr. witt': 5, birell: 7 }, logs: { '2323806000': { change: 'add', count: 3, product: 'Dr. witt' } } },
  { id: 25, name: 'William Rodriguez', username: 'williamrodriguez', cart: { 'coca cola': 10, mars: 5 }, logs: { '2351082000': { change: 'add', count: 2, product: 'mars' } } },
  { id: 26, name: 'Zoe Lewis', username: 'zoelewis', cart: { snickers: 8, corny: 6 }, logs: { '2378364000': { change: 'remove', count: 3, product: 'corny' } } },
  { id: 27, name: 'Daniel Adams', username: 'danieladams', cart: { birell: 11, 'monster energy': 7 }, logs: { '2405640000': { change: 'add', count: 2, product: 'birell' } } },
  {
    id: 28,
    name: 'Sophia Turner',
    username: 'sophiaturner',
    cart: { 'coca cola zero': 9, 'Dr. witt': 6 },
    logs: { '2432916000': { change: 'add', count: 1, product: 'Dr. witt' } },
  },
  { id: 29, name: 'Aiden White', username: 'aidenwhite', cart: { 'monster energy': 6, snickers: 5 }, logs: { '2460192000': { change: 'remove', count: 2, product: 'snickers' } } },
  { id: 30, name: 'Olivia King', username: 'oliviaking', cart: { 'coca cola': 13, birell: 8 }, logs: { '2487472000': { change: 'add', count: 2, product: 'birell' } } },
];

export const DebtList = () => {
  return (
    <>
      <Container maxWidth='xl'>
        <Grid container justifyContent='center' alignSelf='flex-start' gap={6} mt={4}>
          {arrayOfObjects.map(({ id, username }, index) => (
            <Grid item key={index} height='fit-content'>
              <DebtTicket username={username || `Guest #${id}`} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Box sx={{ position: 'fixed', bottom: 0, right: 0, m: 4, display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'flex-end' }}>
        <BuyButton />
        <FastBuyButton />
      </Box>
    </>
  );
};
