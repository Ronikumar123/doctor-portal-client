
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routes/Routes';
import 'react-day-picker/dist/style.css';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='max-w-[100%] mx-auto'>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
