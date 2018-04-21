import React from 'react';
import './App.css';

import Header from './Header';
import Footer from './Footer';
import LineChart from './LineChart';

const App = () => (
  <div id='app-container'>
    <Header id='app-header'/>
    <div id="content-wrapper">
        <div id="breadcrumb">
          <ol>
            <li className="first">
              <a href="http://uhero.hawaii.edu">Home</a>
            </li>
          </ol>
        </div>
        <div id="dashboard-title">
          <h4 id="dash-title">Dashboard Title</h4>
        </div>
        <LineChart id='vis' />
    </div>
    <Footer id='app-footer' />
  </div>
);

export default App;
