import { Box, styled } from '@mui/material';
import { red } from '@mui/material/colors';

export const FormWrapper = styled(Box)(() => ({
  '& .card': {
    padding: '20px 5px 12px',
  },
  '& .createBtn': {
    marginLeft: 'auto',
  },
  '& .updateBtnBody': {
    '& span:first-of-type': {
      marginRight: '10px',
      marginLeft: 'auto',
    },
    '& button:last-of-type.deleteBtn' : {
      '&:hover': {
        color: red[300]
      }
    },
  },
}));
