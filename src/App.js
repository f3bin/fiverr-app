
import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/footer/Footer';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/home/Home.jsx'
import Gigs from './Pages/gigs/Gigs.jsx'
import Gig from './Pages/gig/Gig.jsx'
import Orders from './Pages/orders/Orders.jsx'
import MyGigs from './Pages/myGigs/myGigs.jsx'
import Add from './Pages/add/Add.jsx'
import Messages from './Pages/messages/Messages.jsx'
import Message from './Pages/message/Message.jsx'



function App() {

  const Layout = () => {
    return (
    <div className='app'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
    );
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,  
      children:[
        {
          path:'/',
          element:<Home />
        },
        {
          path:'/gigs',
          element:<Gigs />
        },
        {
          path:'/gig/:id',
          element:<Gig />
        },
        {
          path:'/orders',
          element:<Orders />
        },
        {
          path:'/mygigs',
          element:<MyGigs />
        },
        {
          path:'/add',
          element:<Add />
        },
        {
          path:'/messages',
          element:<Messages />
        },
        {
          path:'/message/:id',
          element:<Message />
        },
      ]
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
