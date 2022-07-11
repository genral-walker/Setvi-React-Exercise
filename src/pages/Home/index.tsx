import { Grid, Pagination, Stack, Typography } from '@mui/material';
import { Post, PostSkeleton } from 'components';
import { useEffect, useMemo, useState } from 'react';
import { useGetAllPostsQuery } from 'redux/queries/posts';
import { createGroupsFromArr } from 'utils';
import { HomeWrapper } from './styles';

export const Home = () => {
  const { isLoading, data, error } = useGetAllPostsQuery();

  // const paginatedData = useMemo(
  //   () => data?.length && createGroupsFromArr<object>(data, 9),
  //   [data]
  // );
  const [page, setPage] = useState(1);

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

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => setPage(newPage);

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
      {/* {data?.length && (
        <Stack pl={2} pr={1} sx={{ alignItems: { xs: 'left', sm: 'center' } }}>
          <Pagination
            count={data.length}
            page={page}
            shape="rounded"
            onChange={handlePageChange}
          />
        </Stack>
      )} */}
    </HomeWrapper>
  );
};
