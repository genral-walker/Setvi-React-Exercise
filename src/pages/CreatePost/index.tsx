import { Box } from '@mui/material';
import { CustomSnackbar, Form } from 'components';
import { ROUTES } from 'constants/routes';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreatePostMutation } from 'redux/queries/posts';

export const CreatePost = () => {
  const [createPostMutation] = useCreatePostMutation();
  const [isLoading, setIsLoading] = useState(false);
  const [clearFields, setClearFields] = useState(false);
  const [APIMesaage, setAPIMesaage] = useState('');
  const [APICallType, setAPICallType] = useState<'Success' | 'Error' | ''>('');
  const navigate = useNavigate();

  const createNewpost = async (titleText: string, titleBody: string) => {
    setIsLoading(true);
    try {
      await createPostMutation({
        title: titleText,
        body: titleBody,
        userId: Math.floor(Math.random() * 343),
      }).unwrap();

      setAPICallType('Success');
      setAPIMesaage('Post created successfully!');
    } catch (error) {
      setAPICallType('Error');
      setAPIMesaage('Something When wrong! Please try again');
    }

    setIsLoading(false);
    setClearFields(true);
  };

  const clearSnackbarInfo = () => {
    setAPIMesaage('');
    setAPICallType('');
  };

  useEffect(() => {
    if (APIMesaage) {
      setTimeout(() => {
        navigate(ROUTES.HOME);
      }, 800);
    }
  }, [APIMesaage]);


  return (
    <>
      {APIMesaage ? (
        <CustomSnackbar
          message={APIMesaage}
          type={APICallType}
          isOpen={Boolean(APIMesaage)}
          handleClose={clearSnackbarInfo}
        />
      ) : (
        ''
      )}
      <Box
        my={4}
        px={4}
        pt={3}
        pb={4}
        maxWidth={500}
        sx={{ marginInline: 'auto' }}
      >
        <Form
          formType="create"
          onClickFunc={createNewpost}
          loadingState={isLoading}
          clearFields={clearFields}
        />
      </Box>
    </>
  );
};
