import { Box } from '@mui/material';
import { CustomSnackbar, Form } from 'components';
import { ROUTES } from 'constants/routes';
import { UpdatePayloadType } from 'models';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  useDeletePostMutation,
  useGetSinglePostQuery,
  useUpdatePostMutation,
} from 'redux/queries/posts';

const Details = () => {
  const params = useParams() as { id: string };
  const { isLoading, data, error } = useGetSinglePostQuery(params.id);
  const [updatePostMutation] = useUpdatePostMutation();
  const [deletePostMutation] = useDeletePostMutation();
  const [internalCallLoading, setInternalCallLoading] = useState(false);
  const [APIMesaage, setAPIMesaage] = useState('');
  const [APICallType, setAPICallType] = useState<'Success' | 'Error' | ''>('');
  const navigate = useNavigate();

  const updatePost = async (titleText: string, titleBody: string) => {
    const titleUpdated = titleText.toLowerCase() !== data?.title.toLowerCase();
    const bodyUpdated = titleBody.toLowerCase() !== data?.body.toLowerCase();

    if (titleUpdated || bodyUpdated) {
      const dataPayload: UpdatePayloadType = { id: +params.id };
      if (titleUpdated) dataPayload.title = titleText;
      if (bodyUpdated) dataPayload.body = titleBody;

      setInternalCallLoading(true);
      try {
        await updatePostMutation(dataPayload).unwrap();
        setAPICallType('Success');
        setAPIMesaage('Post updated successfully!');
      } catch (error) {}
      setInternalCallLoading(false);
    } else {
      setAPICallType('Error');
      setAPIMesaage('Pleae update any input field!');
    }
  };

  const deletePost = async () => {
    setInternalCallLoading(true);
    try {
      await deletePostMutation(params.id).unwrap();
      setAPICallType('Success');
      setAPIMesaage('Post deleted successfully!');
      setTimeout(() => {
        navigate(ROUTES.HOME);
      }, 800);
    } catch (error) {
      setAPICallType('Error');
      setAPIMesaage('Error: Something went wrong. Try again.');
    }
    setInternalCallLoading(false);
  };

  const clearSnackbarInfo = () => {
    setAPIMesaage('');
    setAPICallType('');
  };

  useEffect(() => {
    if (error) {
      setAPICallType('Error');
      setAPIMesaage('Error: Failed to fetch post, please reload.');
    }
  }, [error]);

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
        <Box sx={{ pointerEvents: isLoading ? 'none' : '' }}>
          <Form
            formType="update"
            updateFunc={updatePost}
            deleteFunc={deletePost}
            loadingState={internalCallLoading}
            titleText={data?.title}
            bodyText={data?.body}
          />
        </Box>
      </Box>
    </>
  );
};

export default React.memo(Details);
