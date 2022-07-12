import { Card, CardContent, Typography } from '@mui/material';
import { PostProps } from 'models';

export const Post = (props: PostProps) => {
  const { title, body, clickFunc } = props;

  return (
    <Card
      elevation={2}
      sx={{
        cursor: 'pointer',
        height: { xs: 'max-content', sm: '100%' },
        textTransform: 'capitalize',
      }}
      onClick={clickFunc}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" mb={2}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" lineHeight={1.7}>
          {body}
        </Typography>
      </CardContent>
    </Card>
  );
};
