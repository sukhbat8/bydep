import React, { Component } from 'react';
import css from './style.module.css';
import { Route, Routes } from "react-router-dom";

import Toolbar from '../../components/Toolbar';
import BurgerPage from "../BurgerPage";
import SideBar from '../../components/SideBar';
import OrderPage from '../OrderPage';

class App extends Component {
  state = {
    showSideBar: false
  };
  toggleSideBar = () => {
    this.setState(prevState => {
      return { showSideBar: !prevState.showSideBar }
    });
  };
  render() {
    return (
      <div>
        <Toolbar toggleSideBar={this.toggleSideBar} />
        <SideBar showSideBar={this.state.showSideBar} toggleSideBar={this.toggleSideBar} />
        <main className={css.Content}>
          <Routes>
            <Route path='/orders' element={<OrderPage/>} />
            <Route path='/' element={<BurgerPage/>} />
          </Routes>
        </main>
      </div>
    )
  }
}

export default App;
