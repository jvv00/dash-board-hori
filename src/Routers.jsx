import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom'
import Home from './views/home/Home';
import Marketplace from './views/marketplace/Marketplace';
import DataTables from './views/datatables/DataTables';
import Profile from './views/profile/Profile';
import Signin from './views/signin/Signin';
import Layout, { NoneLayout } from './components/layout/Layout';

const Routers = () => {

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/marketplace' element={<Marketplace/>}/>
          <Route path='/datatables' element={<DataTables/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Route>

          <Route element={<NoneLayout/>}>
            <Route path='/signin' element={<Signin/>} />
          </Route>


      </Routes>
    </Router>
  );
};

export default Routers;
