import React from 'react';

import Navbar from '../../components/Navbar';

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <p> Aqui vai o footer </p>
  </>
);
export default Layout;
