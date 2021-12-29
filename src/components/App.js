import { Button, Typography } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './ui/Header';
import theme from './ui/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/services" element={<div>Services</div>} />
        <Route path="/custom-software" element={<div>Custom Software</div>} />
        <Route path="/mobile-apps" element={<div>Mobile Apps</div>} />
        <Route path="/websites" element={<div>Websites</div>} />
        <Route path="/about-us" element={<div>About Us</div>} />
        <Route path="/contact-us" element={<div>Contact Us</div>} />
        <Route path="/support" element={<div>Support</div>} />
        <Route path="/estimate" element={<div>Estimate</div>} />
      </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;