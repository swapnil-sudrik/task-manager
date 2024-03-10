import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import TaskManager from './components/TaskManager';
import { PrimeReactProvider } from 'primereact/api';
import LoginPage from './login/LoginPage';
import { useSelector } from 'react-redux';
import NotFound from './components/NotFound';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {


  const isDarkMode = useSelector((state) => state.isDarkMode);

  document.body.classList.toggle('dark-mode', isDarkMode);

  return (
    <div className={`main ${isDarkMode ? 'dark-mode' : 'light-mode'}`} >
      <ToastContainer />
      <PrimeReactProvider>
        <BrowserRouter>
          {/* <LoginPage />
          <TaskManager />  */}

          <Routes>
            <Route path='/auth/*' element={<LoginPage />} />
     
              <Route path='/user/*' element={<TaskManager />} />
       
            <Route path='*' element={<NotFound />} />
            <Route element={<NotFound />} />
          </Routes>

        </BrowserRouter>
      </PrimeReactProvider>
    </div>
  );
}

export default App;
