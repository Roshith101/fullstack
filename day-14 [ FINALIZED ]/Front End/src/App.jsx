import React, { lazy} from 'react';
import {Navigate,Route,Routes} from 'react-router-dom';
import './assets/css/index.css';
import LazyLayout from './components/LazyLayout';
import UserLayout from './pages/user/UserLayout';
import AdminLayout from './pages/admin/AdminLayout';
const LazyLogin = lazy(()=>import('./pages/auth/Login'));
const LazyRegister = lazy(()=>import('./pages/auth/SignUp'));
const LazyHome = lazy(()=>import('./pages/user/Home'));
const LazyEditProfile = lazy(()=>import('./pages/user/EditProfile'));
const LazyEvent = lazy(()=>import('./pages/user/Event'));
const LazyBooking = lazy(()=>import('./pages/user/BookingForm'));
const LazySuccessfullBooking = lazy(()=>import('./pages/user/BookingSuccessful'));
const LazyDashboard = lazy(()=>import('./pages/admin/Dashboard'));
const LazyProvidedService = lazy(()=>import('./pages/user/ProvidedService'));
const LazyFood = lazy(()=>import('./pages/user/Food'));
const LazyVenue = lazy(()=>import('./pages/user/Venue'));
const LazyTheme = lazy(()=>import('./pages/user/Themes'));
const LazyManageFood = lazy(()=>import('./pages/admin/ManageFood'));
const UserRoutes= () => {
  return(
    <UserLayout>
    <Routes>
  <Route path='/home' element={<LazyLayout component={LazyHome}/>}/>
  <Route path='/booking' element={<LazyLayout component={LazyBooking}/>}/>
  <Route path='/event' element={<LazyLayout component={LazyEvent}/>}/>
  <Route path='/edit_profile' element={<LazyLayout component={LazyEditProfile}/>}/>
  <Route path='/booking_successfull' element={<LazyLayout component={LazySuccessfullBooking}/>}/>
  <Route path = '/provided_service' element={<LazyLayout component={LazyProvidedService}/>}/>
  <Route path='/food' element={<LazyFood component={LazyFood}/>}/>
  <Route path='/venue' element={<LazyVenue component={LazyVenue}/>}/>
  <Route path='/theme' element={<LazyTheme component={LazyTheme}/>}/>
    </Routes>
    </UserLayout>
  )
}
const AdminRoutes=()=>{
  return(
    <AdminLayout>
    <Routes>
    <Route path='/dashboard' element={<LazyLayout component={LazyDashboard}/>}/>
    <Route path='/managefood' element={<LazyLayout component={LazyManageFood}/>}/>
    </Routes>
    </AdminLayout>
  )
}
const App = () => {
  return (
    <Routes>
    <Route path="/" element={<Navigate to='/eventhub/login'/>}/>
    <Route  path="/eventhub/login" element={<LazyLayout component={LazyLogin}/>}/>
    <Route path='/eventhub/signup' element={<LazyLayout component={LazyRegister}/>}/>
    <Route path='eventhub/booking' element={<LazyLayout component={LazyBooking}/>}/>
    <Route path="/eventhub/user/*" element={<UserRoutes/>}/>
    <Route path="/eventhub/admin/*" element={<AdminRoutes/>}/>
    </Routes>
  
    
  )
}

export default App