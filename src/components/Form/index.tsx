import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  IconButton,
  Stack,
} from '@mui/material';
import React from 'react';
import { FormWrapper } from './styles';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { FormProps } from 'models';
import { LoadingButton } from '@mui/lab';

export const Form = (props: FormProps) => {
  const { formType } = props;
  const submit = (evt: React.FormEvent<HTMLFormElement>) => {};

  return (
    <FormWrapper>
      <Card className="card">
        <CardContent>
          <Typography gutterBottom variant="h5" pb={2}>
            {formType === 'create' ? 'Create Post' : 'Update Post'}
          </Typography>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log('Hello');
            }}
          >
            <Stack spacing={4}>
              <TextField
                placeholder="Enter title"
                label="Title"
                variant="outlined"
                required
              />
              <TextField
                placeholder="Enter Description"
                label="Description"
                variant="outlined"
                required
              />
              <Stack direction={'row'} className="updateBtnBody">
                {formType === 'create' ? (
                  <LoadingButton
                    type="submit"
                    variant="contained"
                    color="primary"
                    className="createBtn"
                  >
                    Save
                  </LoadingButton>
                ) : (
                  <>
                    <LoadingButton
                      variant="contained"
                      aria-label="Upgrade"
                      size="large"
                    >
                      <UpgradeIcon />
                    </LoadingButton>
                    <LoadingButton
                      variant="contained"
                      aria-label="delete"
                      size="large"
                    >
                      <DeleteForeverIcon />
                    </LoadingButton>
                  </>
                )}
              </Stack>
            </Stack>
          </form>
        </CardContent>
      </Card>
    </FormWrapper>
  );
};
