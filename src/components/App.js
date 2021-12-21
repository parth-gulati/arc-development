import { Button } from '@material-ui/core';
import Header from './ui/Header';

function App() {
  return (
    <div className="App">
      <p> {[...new Array(100)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
            )
            .join('\n')}</p>
      <Header/>
        <Button variant="contained">
          Click me!
        </Button>
    </div>
  );
}

export default App;