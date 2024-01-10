import React from 'react'
import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer/Footer';
function Root() {
    return (
        <>
       <Nav> </Nav>
     <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
      <Footer></Footer>
       </>
    )
}

export default Root
