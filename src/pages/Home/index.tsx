import { Grid, Typography } from '@mui/material';
import { Post, PostSkeleton } from 'components';
import { useEffect } from 'react';
import { useGetAllPostsQuery } from 'redux/queries/posts';
import { HomeWrapper } from './styles';

export const Home = () => {
  const { isLoading, data, error } = useGetAllPostsQuery();

  // If error, alert(an error occured, plese, retrying..)

  const renderSkeletons = (num: number): JSX.Element[] => {
    const skeletons: JSX.Element[] = [];

    for (let index = 0; index < num; index++) {
      skeletons.push(
        <Grid item md={4} sm={6} xs={12} key={index}>
          <PostSkeleton />
        </Grid>
      );
    }

    return skeletons;
  };

  if (error)
    return (
      <Typography variant="h4" mt={'60px'} align="center">
        No Post fetched!!
      </Typography>
    );

  return (
    <HomeWrapper pb={4}>
      <Grid spacing={5} container my={4} px={4}>
        {isLoading
          ? renderSkeletons(6)
          : data?.map(({ id, body, title }) => (
              <Grid item md={4} sm={6} xs={12} key={id}>
                <Post
                  title={title}
                  body={body}
                  clickFunc={() => {
                    console.log(data);
                  }}
                />
              </Grid>
            ))}
      </Grid>
    </HomeWrapper>
  );
};
