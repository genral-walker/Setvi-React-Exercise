import {
  Card,
  CardContent,
  Typography,
  TextField,
  Stack,
  Tooltip,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { FormWrapper } from './styles';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { FormProps } from 'models';
import { LoadingButton } from '@mui/lab';

export const Form = ({
  formType,
  onClickFunc,
  loadingState,
  clearFields,
  titleText,
  bodyText,
  updateFunc,
  deleteFunc
}: FormProps) => {
  const [inputTitle, setInputTitle] = useState('');
  const [inputBody, setInputBody] = useState('');
  const [buttonTypeClicked, setButtonTypeClicked] = useState<
    'update' | 'delete' | ''
  >('');
  const [inputTitleClicked, setInputTitleClicked] = useState(false);
  const [inputBodyClicked, setInputBodyClicked] = useState(false);

  const callOnClickFunc = () => {
    if (onClickFunc) return onClickFunc(inputTitle, inputBody);
  };

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

  useEffect(() => {
    if (titleText && bodyText) {
      setInputTitle(titleText);
      setInputBody(bodyText);
    }
  }, [titleText, bodyText]);

  useEffect(() => {
    if (clearFields) {
      setInputTitle('');
      setInputBody('');
      setInputTitleClicked(false);
      setInputBodyClicked(false);
    }
  }, [clearFields]);

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
              multiline
              rows={4}
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
                  onClick={callOnClickFunc}
                  loading={loadingState}
                  disabled={
                    !buttonValidatorFormat(inputTitle, 3) ||
                    !buttonValidatorFormat(inputBody, 5) ||
                    loadingState
                  }
                >
                  Save
                </LoadingButton>
              ) : (
                <>
                  <Tooltip arrow title="Update" placement="bottom">
                    <span>
                      <LoadingButton
                        variant="contained"
                        aria-label="Update"
                        size="large"
                        onClick={() => {
                          setButtonTypeClicked('update');
                          updateFunc && updateFunc(inputTitle, inputBody);
                        }}
                        loading={
                          loadingState && buttonTypeClicked! === 'update'
                        }
                        disabled={
                          !buttonValidatorFormat(inputTitle, 3) ||
                          !buttonValidatorFormat(inputBody, 5) ||
                          loadingState
                        }
                      >
                        <UpgradeIcon />
                      </LoadingButton>
                    </span>
                  </Tooltip>

                  <Tooltip arrow title="Delete" placement="bottom">
                    <span>
                      {' '}
                      <LoadingButton
                        variant="contained"
                        aria-label="delete"
                        size="large"
                        className="deleteBtn"
                        onClick={() => {
                          setButtonTypeClicked('delete');
                          deleteFunc && deleteFunc();
                        }}
                        loading={loadingState && buttonTypeClicked === 'delete'}
                        disabled={
                          !buttonValidatorFormat(inputTitle, 3) ||
                          !buttonValidatorFormat(inputBody, 5) ||
                          loadingState
                        }
                      >
                        <DeleteForeverIcon />
                      </LoadingButton>
                    </span>
                  </Tooltip>
                </>
              )}
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </FormWrapper>
  );
};
