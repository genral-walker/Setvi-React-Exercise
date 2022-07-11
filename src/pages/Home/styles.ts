import { Box, styled } from '@mui/material';
import { indigo } from '@mui/material/colors';

export const HomeWrapper = styled(Box)(({ theme }) => {
  const { typography } = theme;
  return {
    //   backgroundColor: indigo[900],

    '& .MuiTypography-root, .MuiTypography-h4': {
      fontSize: '1.6rem',
      flexGrow: 1,
    },

    '& .MuiButton-root, .MuiButton-text': {
     color: 'inherit',
     borderColor: indigo[200],
     textTransform: 'Capitalize',
     
    }
  };
});
