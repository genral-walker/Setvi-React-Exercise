import { Box } from '@mui/material';
import { Form } from 'components';

export const Details = () => {
  const FormUIprops = {title: 'Test Title', body: 'Test Body'}
  return (
    <Box
      my={4}
      px={4}
      pt={3}
      pb={4}
      maxWidth={500}
      sx={{ marginInline: 'auto' }}
    >
      <Form formType="update" onClickFunc={() => {}} loadingState={false}  />
    </Box>
  );
};
