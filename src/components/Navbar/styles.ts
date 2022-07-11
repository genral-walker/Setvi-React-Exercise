import { AppBar, styled } from '@mui/material';
import { indigo } from '@mui/material/colors';

export const NavbarWrapper = styled(AppBar)(() => ({
  '& .MuiTypography-root, .MuiTypography-h4': {
    fontSize: '1.6rem',
    flexGrow: 1,

    '& a': {
      color: 'inherit',
      textDecoration: 'none',
    },
  },

  '& .MuiButton-root': {
    color: 'inherit',
    borderColor: indigo[200],
    textTransform: 'Capitalize',
  },
}));
