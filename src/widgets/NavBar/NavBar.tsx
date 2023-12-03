import * as React from 'react';
import { Box, AppBar, Toolbar, IconButton, Typography, Button, Container, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Container maxWidth='xl'>
          <Toolbar sx={{ color: 'secondary.dark' }}>
            <IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }} onClick={handleMenu}>
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              Lišákovy Dobroty
            </Typography>
            <Button color='inherit'>Login</Button>
            <Menu
              id='menu-appbar'
              anchorEl={anchorEl}
              variant='menu'
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              sx={{ '& > .MuiPopover-paper': { bgcolor: 'primary.light', color: 'secondary.dark' } }}
            >
              <MenuItem onClick={handleClose}>Dashboard</MenuItem>
              <MenuItem onClick={handleClose}>Sklad</MenuItem>
              <MenuItem onClick={handleClose}>Jak to funguje?</MenuItem>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
