import { Button, Typography } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import Header from './ui/Header';
import theme from './ui/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <div className="App">
        <Typography variant="body1">
         HELLO
        </Typography>
        <Button variant="contained">
          Click me!
        </Button>
      </div>
    </ThemeProvider>
  );
}

export default App;