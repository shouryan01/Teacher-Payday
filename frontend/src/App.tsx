// import React from 'react';
// import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
// import './App.css';

// // Components
// import LandingPage from './components/LandingPage';
// import LogIn from './components/LogIn';
// import SignUp from './components/SignUp';
// import Dashboard from './components/Dashboard';
// import NotFoundPage from './components/NotFoundPage';

// // Ant css
// import 'antd/dist/antd.min.css';

// function App() {
//   return (
//     <div className='App'>
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/login" element={<LogIn />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/dashboard" element={<PrivateRoute />} >
//           <Route path="" element={<Dashboard />} />
//         </Route>
//         <Route path="*" element={<NotFoundPage />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;


// function PrivateRoute() {
//   const authenticated = true
//   return authenticated ? <Outlet /> : <Navigate to="/login" />;
// }

import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Loader } from "./components/loader";
import { MobileNavBar } from "./components/mobile-nav-bar";
import { NavBar } from "./components/nav-bar";
import { ProtectedRoute } from "./components/protected-route";
import { AdminPage } from "./pages/admin";
import { Home } from "./pages/home";
import { NotFound } from "./pages/not-found";
import { Profile } from "./pages/profile";
import { ProtectedPage } from "./pages/protected";
import { PublicPage } from "./pages/public";

export function App () {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="page-layout">
        <Loader />
      </div>
    );
  }

  return (
    <div className="page-layout">
      <NavBar />
      <MobileNavBar />
      <div className="page-layout__content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/profile"
            element={<ProtectedRoute component={Profile} />}
          />
          <Route path="/public" element={<PublicPage />} />
          <Route
            path="/protected"
            element={<ProtectedRoute component={ProtectedPage} />}
          />
          <Route
            path="/admin"
            element={<ProtectedRoute component={AdminPage} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};
