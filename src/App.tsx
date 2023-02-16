import { AppRoutes } from './routes/Routes';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Theme } from './config/theme/theme';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={Theme}>
          <CssBaseline/>
          <AppRoutes />
        </ThemeProvider>
      </PersistGate>
    </Provider>  

  );
}

export default App;
