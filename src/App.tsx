import { RouterProvider } from 'react-router';
import './index.css'
import { router } from './routes';
import { PasswordProvider } from './contexts';
import './i18n.ts';

function App() {
  return (
    <div className='bg-primary h-screen'>
      <PasswordProvider>
        <RouterProvider router={ router } />
      </PasswordProvider>
    </div>
  );
}

export default App
