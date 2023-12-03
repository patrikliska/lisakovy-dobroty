import { Avatar, Button, Typography } from '@mui/material';
import { stringAvatar } from '../../utils';

export const Profile = () => {
  const { name, sx: avatarSx } = stringAvatar('Kent Dodds');

  return (
    <Button
      sx={{
        justifySelf: 'end',
        position: 'fixed',
        m: 4,
        right: 0,
        top: 0,
        p: 1.5,
        minWidth: 'unset',
      }}
    >
      <Avatar
        sx={{
          ...avatarSx,
          transition: 'all 0.25s',
          boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
          opacity: 0.9,
          '&:hover': { boxShadow: 'unset', opacity: 1 },
        }}
      >
        <Typography variant='h4'>{name}</Typography>
      </Avatar>
    </Button>
  );
};
