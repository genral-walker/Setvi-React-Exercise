import { Card, CardContent, Typography } from '@mui/material';

export const Post = () => {
  return (
    <Card elevation={2}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          React
        </Typography>
        <Typography variant="body2" color="text.secondary">
          React is a JavaScript library for building user interfaces. React can
          be used as a base in the development of single-page or mobile
          applications.
        </Typography>
      </CardContent>
    </Card>
  );
};
