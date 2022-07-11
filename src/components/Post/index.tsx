import { Card, CardContent, Typography } from '@mui/material';
import { PostProps } from 'models';

export const Post = (props: PostProps) => {
  const { title, body, clickFunc } = props;

  return (
    <Card
      elevation={2}
      sx={{ cursor: 'pointer', height: '100%' }}
      onClick={clickFunc}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {body}
        </Typography>
      </CardContent>
    </Card>
  );
};
