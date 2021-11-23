import './styles/App.css';

import TileGrid from './TileGrid.js'
import SentenceBuilder from './SentenceBuilder';

import MetaTags from 'react-meta-tags';
import * as React from 'react';

import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import SettingsIcon from '@mui/icons-material/Settings';


function App() {

  /* Theme handling */
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return (
    <>
      <MetaTags>
        <title>Free Speech React</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" /> 
      </MetaTags>

     <ThemeProvider theme={theme}>
        {/* <CssBaseline /> */}
        
        <SentenceBuilder />
        <Fab size="small" className='menuFAB' color="primary" aria-label="add">
          <SettingsIcon />
        </Fab>
        <TileGrid />
        
      </ThemeProvider>
      
    </>
    
  );
}

export default App;
