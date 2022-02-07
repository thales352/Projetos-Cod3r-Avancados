import Head from 'next/head';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  ThemeProvider,
} from '@mui/material';
import { useThemes } from '../utils/Theme';

export default function Layout({ children }) {
  const theme = useThemes();
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>NeoSign</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography>NeoSign Comunicação Visual</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
      <footer>
        <Typography>Todos os Direitos Reservados por Thales Miguel</Typography>
      </footer>
    </ThemeProvider>
  );
}
