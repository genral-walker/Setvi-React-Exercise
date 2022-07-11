import { Grid } from '@mui/material';
import { Post } from 'components';
import { HomeWrapper } from './styles';

export const Home = () => {
  return (
    <HomeWrapper pb={4}>
      <Grid rowSpacing={4} columnSpacing={3} container my={4} px={3}>
        <Grid item md={4} sm={6} xs={12}>
          <Post />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Post />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Post />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Post />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Post />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Post />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Post />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Post />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Post />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Post />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Post />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Post />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Post />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Post />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Post />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Post />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Post />
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <Post />
        </Grid>
      </Grid>
    </HomeWrapper>
  );
};
