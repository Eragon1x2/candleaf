import './App.css';
import { RouterProvider, createBrowserRouter, redirect } from 'react-router-dom';
import Main from './pages/Main/Main';
import Root from './pages/Root';
import ItemDetail from './pages/ItemDetail/ItemDetail';
import Busket from './pages/Cart/Busket';
import { Fragment } from 'react';
import Discovery from './pages/Discovery/Discovery';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Auth from './pages/Auth/Auth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const gg =() => {
  let a = localStorage.getItem('user');
  if (!a) {
    return redirect('/candleaf/auth?mode=signup');
  }
  else {
    return a;
  }
}

const router = createBrowserRouter([
  {
    path: 'candleaf',
    element: <Root/>,
    children: [
      { index: true, element: <Main/> },
      { path: 'items/:id', element: <ItemDetail></ItemDetail>},
      { path: 'busket', element:  <Busket></Busket>, loader: gg},
      {path: 'discovery', element: <Discovery></Discovery>},
      {path: 'about', element: <About></About>},
      {path: 'contact', element: <Contact></Contact>},
      {path: 'auth', element: <Auth></Auth>}
      // {path: 'auth?mode=signup', element: <Auth></Auth>, loader: authLoader},
      // {path: 'logout', element: <LogOuts></LogOuts>, loader: LogOutAction }
    ]
    }    
  ]);
function App() {
  return <Fragment><RouterProvider router={router} />
  <ToastContainer
position="top-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
{/* Same as */}
<ToastContainer /></Fragment>;
}
export default App;
