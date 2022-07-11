import { Box, styled } from '@mui/material';
import { red } from '@mui/material/colors';

export const FormWrapper = styled(Box)(() => ({
  '& .card': {
    padding: '20px 5px',
  },
  '& .createBtn': {
    marginLeft: '80%',
  },
  '& .updateBtnBody': {
    '& button:first-of-type': {
      marginRight: '10px',
      marginLeft: 'auto',
    },
    '& button:last-of-type': {
      '&:hover': {
        color: red[300]
      }
    },
  },
}));
