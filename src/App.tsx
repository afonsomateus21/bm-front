import { RouterProvider } from 'react-router';
import './index.css'
import { router } from './routes';

function App() {
  return (
    <div className='bg-primary h-screen'>
      <RouterProvider router={ router } />
    </div>
  );
}

export default App
