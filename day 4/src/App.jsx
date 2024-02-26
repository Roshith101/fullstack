// App.jsx
import { Navigate,Route,Routes } from 'react-router-dom';
import { lazy } from "react"
import UserLayout from './pages/user/UserLayout';
import AdminLayout from './pages/admin/AdminLayout';
// import Header from './components/Header';
import LazyLayout from './components/LazyLayout';
import './App.css'; 
// const images = [
//   { src: "image1.jpg", alt: "Image 1" },
//   { src: "image2.jpg", alt: "Image 2" },
//   { src: "image3.jpg", alt: "Image 3" },
// ];
const LazyLogin = lazy(()=> import('./pages/auth/login'));
const LazyRegister = lazy(()=> import('./pages/auth/register'));
const LazyHome = lazy(()=> import('./pages/user/Home'));
const LazyEvent = lazy(()=> import('./pages/user/Events'));
const LazyAbout  = lazy(()=> import('./pages/user/About'));
const LazyFeature = lazy(()=> import('./pages/user/Feature'));
const LazyProfile = lazy(()=> import('./pages/user/EditProfile'));
const LazyDashboard = lazy(()=> import('./pages/admin/Dashboard'));
const LazyBooking = lazy(()=> import('./pages/user/Booking'));
// const LazyHeader = lazy(()=> import('./components/Header'));
// const LazyLogin =lazy(()=>import("../pages/auth/Login"))
// const LazyRegister = lazy(()=>import("../pages/auth/register"))
// const LazyHome = lazy(()=> import("./pages/user/Home"))
// const LazyDashboard = lazy(()=> import("./pages/admin/Dashboard"))

const UserRoutes = () => {
  return(
    <UserLayout>
    <Routes>
    <Route path="/home" element={<LazyLayout component={LazyHome}/>}/>
    <Route path="/event" element={<LazyLayout component={LazyEvent}/>}/>
    <Route path="/about" element={<LazyLayout component={LazyAbout}/>}/>
    <Route path="/feature" element={<LazyLayout component={LazyFeature}/>}/>
    <Route path="/editprofile" element={<LazyLayout component={LazyProfile}/>}/>
   <Route path='/booking' element={<LazyLayout component={LazyBooking}/>}/>


</Routes>
    </UserLayout>
  )
}

const AdminRoutes = () => {
  return(
    <AdminLayout>
    <Routes>
    <Route path="/dashboard" element={<LazyLayout component={LazyDashboard}/>}/>
    </Routes>
    </AdminLayout>
  )
}


const App = () => {
  return (
    <Routes>

      <Route path="/" element={<Navigate to="/eventhub/login"/>}/>
      <Route path="/eventhub/login" element={<LazyLayout component={LazyLogin}/>}/>
      <Route path="/eventhub/register" element={<LazyLayout component={LazyRegister}/>}/>
      {/* <Route path='/eventhub/nav' element={<LazyLayout component={LazyHeader}/>}/> */}
      <Route path="/eventhub/user/*" element={<UserRoutes/>}/>
      <Route path="/eventhub/admin/*" element={<AdminRoutes/>}/>
    </Routes>
  );
};

export default App;
