import { Button, Toolbar, Typography } from '@mui/material';
import { ROUTES } from 'constants/routes';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { NavbarWrapper } from './styles';

export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <NavbarWrapper position="static">
      <Toolbar>
        <Typography variant="h4" component="h1">
          <Link to={ROUTES.HOME}>Posts App</Link>
        </Typography>
        {location.pathname === ROUTES.HOME ? (
          <Button variant="outlined" onClick={()=> navigate(ROUTES.CREATE)}>Create Post</Button>
        ) : ''}
      </Toolbar>
    </NavbarWrapper>
  );
};
