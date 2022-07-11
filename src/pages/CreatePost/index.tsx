import { Box } from '@mui/material';
import { Form } from 'components';
import { useState } from 'react';

export const CreatePost = () => {
  const [title, setTitle] = useState<string | null>();
  const [body, setBody] = useState<string | null>();

  const createNewpost = () => {};

  return (
    <>
      <Box
        my={4}
        px={4}
        pt={3}
        pb={4}
        maxWidth={500}
        sx={{ marginInline: 'auto' }}
      >
        <Form formType="create" onClickFunc={createNewpost} />
      </Box>
      {console.log(title, body)}
    </>
  );
};
