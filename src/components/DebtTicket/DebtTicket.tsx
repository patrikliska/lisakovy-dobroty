import { Box, Grid, Paper, Stack, useTheme } from '@mui/material';

const screwStyles = (last?: boolean) => ({
  backgroundColor: 'rgba(0,0,0,0.2)',
  borderRadius: '50%',
  height: 15,
  position: 'relative',
  width: 15,
});

const screwLineStyles = (last?: boolean) => {
  const randomNumber = Math.floor(Math.random() * 100);
  const screwLinePosition = randomNumber * 3.6;

  return {
    backgroundColor: 'rgba(0,0,0,0.3)',
    width: '100%',
    height: 2,
    position: 'absolute',
    transform: `translateY(-50%) rotate(${screwLinePosition}deg)`,
    top: '50%',
  };
};

export const DebtTicket = ({ username }: { username: string }) => {
  const theme = useTheme();

  const computerPaperWidth = () => Math.floor(Math.random() * 100) + 200;

  const getDebt = () => {
    const debtCount = Math.floor(Math.random() * 100);
    const arrayIWant = [];
    let string = '';

    for (let i = 0; i < debtCount; i++) {
      string = string + '|';
    }

    for (let i = 0; i < string.length; i += 5) {
      arrayIWant.push(string.substring(i, i + 5));
    }

    console.log('arrayIWant', arrayIWant);

    const formattedArray = arrayIWant.map((value, index) => {
      if (value.length < 5) return value;

      const lastChar = value[value.length - 1];

      console.log('index', lastChar);

      return (
        <Stack flexDirection='row'>
          {value.substring(0, value.length - 1)}
          {/* Remove the last character */}
          <Box sx={{ transform: 'rotate(110deg) translateY(32%) translateX(20%)', fontSize: '1.35rem' }}>{lastChar}</Box>
        </Stack>
      );
    });
    // const formattedString = formattedArray.join(''); // Join the array into a single string

    return formattedArray;
  };

  return (
    <Paper
      sx={{
        width: computerPaperWidth(),
        p: ({ spacing }) => spacing(3, 4),
        height: 250,
        color: '#000000',
        [theme.breakpoints.down('sm')]: { width: 350 },
        [theme.breakpoints.down('md')]: { width: 350 },
      }}
    >
      <Stack position='relative' flexDirection='row' width='100%' justifyContent='space-between' mb={4} alignItems='center'>
        <Box sx={screwStyles(true)}>
          <Box sx={screwLineStyles()} />
        </Box>
        {username}
        <Box sx={screwStyles(true)}>
          <Box sx={screwLineStyles()} />
        </Box>
      </Stack>
      <Grid container>{getDebt()}</Grid>
    </Paper>
  );
};
