import { AlertProps, Stack, Snackbar, Alert } from '@mui/material';
import { CustomSnackbarType } from 'models';
import React from 'react';

const AlertCustom = React.forwardRef<HTMLDivElement, AlertProps>(
  function AlertCustom(props, ref) {
    return <Alert elevation={6} ref={ref} variant="filled" {...props} />;
  }
);

export const CustomSnackbar = ({
  message,
  type,
  isOpen,
  handleClose,
}: CustomSnackbarType) => {
  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar
        open={isOpen}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        sx={{ marginTop: '45px'}}
      >
        {type === 'Success' ? (
          <AlertCustom
            onClose={handleClose}
            severity="success"
            sx={{ width: '100%' }}
          >
            {message}
          </AlertCustom>
        ) : (
          <AlertCustom severity="error" onClose={handleClose}>
            {message}
          </AlertCustom>
        )}
      </Snackbar>
    </Stack>
  );
};
