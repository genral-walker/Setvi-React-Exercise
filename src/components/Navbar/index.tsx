import { Button, Toolbar, Typography } from '@mui/material';
import { ROUTES } from 'constants/routes';
import { Link, useLocation } from 'react-router-dom';
import { NavbarWrapper } from './styles';

export const Navbar = () => {
  const location = useLocation();
  return (
    <NavbarWrapper position="static">
      <Toolbar>
        <Typography variant="h4" component="h1">
          <Link to={ROUTES.HOME}>Posts App</Link>
        </Typography>
        {location.pathname === ROUTES.HOME ? (
          <Button variant="outlined">Create Post</Button>
        ) : ''}
      </Toolbar>
    </NavbarWrapper>
  );
};
