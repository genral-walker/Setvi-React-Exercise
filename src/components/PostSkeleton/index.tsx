import { Card, CardContent, Typography, Skeleton } from '@mui/material';

export const PostSkeleton = () => {
  return (
    <Card elevation={0}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <Skeleton variant="text" animation="wave" height={37} width={'37%'} />
        </Typography>

        <Typography variant="body2" color="text.secondary">
          <Skeleton variant="rectangular" height={83} animation="wave" />
        </Typography>
      </CardContent>
    </Card>
  );
};
