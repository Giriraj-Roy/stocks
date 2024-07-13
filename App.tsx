import React from 'react';
import AppNavigation from "./src/navigation/AppNavigation"
import AppProvider from './src/utils/AppProvider';

const App: React.FC = () => {
  return (
    <AppProvider>
      <AppNavigation/>
    </AppProvider>
  )
};

export default App;
