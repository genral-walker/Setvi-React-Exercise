import { AppBar, Button, Stack, Toolbar, Typography } from '@mui/material';
import { HomeWrapper } from './styles';

export const Home = () => {
  return (
    <HomeWrapper>
      <AppBar>
        <Toolbar>
          <Typography variant="h4" component="h1">
            Posts App
          </Typography>
          <Button variant='outlined'>Create Post</Button>
        </Toolbar>
      </AppBar>
    </HomeWrapper>
  );
};
