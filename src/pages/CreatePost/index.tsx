import { Box } from '@mui/material';
import { Form } from 'components';
import { useState } from 'react';
import { useCreatePostMutation } from 'redux/queries/posts';

export const CreatePost = () => {
const [createPostMutation] = useCreatePostMutation();
const [isLoading, setIsLoading] = useState(false)

  const createNewpost = async (titleText: string, titleBody: string) => {
    setIsLoading(true)
    const result = await createPostMutation({
      title: titleText,
      body: titleBody,
      userId: Math.floor(Math.random() * 343) + 1
    }).unwrap();

    setIsLoading(false)
  };

  return (
    <Box
      my={4}
      px={4}
      pt={3}
      pb={4}
      maxWidth={500}
      sx={{ marginInline: 'auto' }}
    >
      <Form formType="create" onClickFunc={createNewpost} loadingState={isLoading} />
    </Box>
  );
};
