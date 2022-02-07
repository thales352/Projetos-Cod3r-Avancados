import { createTheme } from '@mui/material';

const useThemes = createTheme({
  components: {
    MuiAppBar: {
      defaultProps: {
        color: '#CBE86B',
      },
    },
  },
});

export default useThemes;
