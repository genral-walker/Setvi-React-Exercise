import {
  Box,
} from '@mui/material';
import { Form } from 'components';

export const CreatePost = () => {
  return (
    <Box
      my={4}
      px={4}
      pt={3}
      pb={4}
      maxWidth={500}
      sx={{ marginInline: 'auto' }}
    >
      <Form formType="create" />
    </Box>
  );
};

/*
 <FormGroup >
        <FormControl>
          <FormControlLabel
            control={
              <TextField
                label="Form Input"
                required
                helperText={'Do not share your password with anyone'}
                type="password"
                error={false}
                value={'Walker'}
                // onChange={handleChange}
              />
            }
            label="Tiltle"
          />
        </FormControl>
      </FormGroup>
*/
