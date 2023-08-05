import React from 'react'
import { useLocation, Outlet } from 'react-router-dom'
import Header from './components/header';

const Layouts = ({ hideHeaderPaths = ['/sign-up', '/login'] }) => {
  const { pathname } = useLocation();
  console.log(pathname);

  return (

    <div className="container">
      {!hideHeaderPaths.includes(pathname) && <Header />}
      <Outlet />
    </div>
  )
}

export default Layouts