import { Card, CardContent, Typography, TextField, Stack } from '@mui/material';
import { useState } from 'react';
import { FormWrapper } from './styles';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { FormProps } from 'models';
import { LoadingButton } from '@mui/lab';

export const Form = ({ formType, onClickFunc }: FormProps) => {
  const [inputTitle, setInputTitle] = useState('');
  const [inputBody, setInputBody] = useState('');
  const [inputTitleClicked, setInputTitleClicked] = useState(false);
  const [inputBodyClicked, setInputBodyClicked] = useState(false);

  const errorValidatorFormat = (
    isClicked: boolean,
    text: string,
    minTextlength: number
  ): boolean =>
    isClicked && (!text || !text.trim() || text.length < minTextlength);

  const buttonValidatorFormat = (
    text: string,
    minTextlength: number
  ): boolean =>
    text && text.trim() && text.length >= minTextlength ? true : false;

  const validateInput = (
    text: string,
    clicked: boolean,
    minTextVal: number
  ) => {
    if (clicked) {
      if (!text || !text.trim()) return 'No value inputed!';
      if (text.length < minTextVal)
        return `Input must contain at least ${minTextVal} letters!`;
    }
  };

  return (
    <FormWrapper>
      <Card className="card">
        <CardContent>
          <Typography gutterBottom variant="h5" pb={2}>
            {formType === 'create' ? 'Create Post' : 'Update Post'}
          </Typography>
          <Stack spacing={4}>
            <TextField
              placeholder="Enter title"
              label="Title"
              variant="outlined"
              required
              value={inputTitle}
              error={errorValidatorFormat(inputTitleClicked, inputTitle, 3)}
              helperText={validateInput(inputTitle, inputTitleClicked, 3)}
              onChange={(evt) => setInputTitle(evt.target.value)}
              onInput={() => setInputTitleClicked(true)}
            />
            <TextField
              placeholder="Enter Description"
              label="Description"
              variant="outlined"
              required
              value={inputBody}
              error={errorValidatorFormat(inputBodyClicked, inputBody, 5)}
              helperText={validateInput(inputBody, inputBodyClicked, 5)}
              onChange={(evt) => setInputBody(evt.target.value)}
              onInput={() => setInputBodyClicked(true)}
            />
            <Stack direction={'row'} className="updateBtnBody">
              {formType === 'create' ? (
                <LoadingButton
                  variant="contained"
                  color="primary"
                  className="createBtn"
                  aria-label="Save"
                  onClick={onClickFunc}
                  disabled={
                    !buttonValidatorFormat(inputTitle, 3) ||
                    !buttonValidatorFormat(inputBody, 5)
                  } // loading
                >
                  Save
                </LoadingButton>
              ) : (
                <>
                  <LoadingButton
                    variant="contained"
                    aria-label="Upgrade"
                    size="large"
                    onClick={onClickFunc}
                    disabled={
                      !buttonValidatorFormat(inputTitle, 3) ||
                      !buttonValidatorFormat(inputBody, 5)
                    } // loading
                  >
                    <UpgradeIcon />
                  </LoadingButton>
                  <LoadingButton
                    variant="contained"
                    aria-label="delete"
                    size="large"
                    className="deleteBtn"
                    onClick={onClickFunc}
                    disabled={
                      !buttonValidatorFormat(inputTitle, 3) ||
                      !buttonValidatorFormat(inputBody, 5)
                    } // loading
                  >
                    <DeleteForeverIcon />
                  </LoadingButton>
                </>
              )}
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </FormWrapper>
  );
};
