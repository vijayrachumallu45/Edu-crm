import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { EduProvider } from './context/EduContext';
import { AppRoutes } from './routes/AppRoutes';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <EduProvider>
        <AppRoutes />
      </EduProvider>
    </BrowserRouter>
  );
};

export default App;
