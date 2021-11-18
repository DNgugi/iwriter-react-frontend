import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import OrderForm from './forms/orderForm';
import Orders from './components/Orders';

// import {getAllOrders} from './api/api';
// import { useState } from 'react';
 

function App() {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const result = await Axios(
                'http://localhost/wordpress/wp-json/iwriter-pro/v1/orders',
              );
          
              setData(result.data);
        }
        fetchData();
      }, []); // Or [] if effect doesn't need props or state
          
  return (
    <div className="App">
      <div className="main-wrapper">
        <header>
            <h2>iWriter Pro</h2>
            <nav className="hidden">
                <ul>
                    <li> <a href="contact.html" target="_blank">Get Help</a></li>
                </ul>
            </nav>
            <button id="nav-toggle">Nav toggle</button>
        </header>
        <main>
            <div id="home">
                <div className="text">
                    <h1>We are pro writers... </h1>
                    <h4>Get help with your writing from as low as $5</h4>
                </div>
                <OrderForm />
            </div>
            <div id="services">
                <div className="orders">
                    <Orders data={data}/>
                </div>
                <h2>Our services</h2>
                <div className="card">
                    <h3>Academic Writing</h3>
                </div>
                <div className="card">
                    <h3>Professional Writing</h3>
                </div>
                <div className="card">
                    <h3>Copy Writing</h3>
                </div>
                <div className="card">
                    <h3>Transcription</h3>
                </div>
                <div className="card">
                    <h3>Copy Proofing</h3>
                </div>
                <div className="card">
                    <h3>Copy Editing</h3>
                </div>
            </div>
            <div id="support">
    
            </div>
    
        </main>
        <footer>
            <p>iWriter Pro &copy; 2021</p>
        </footer>
        
    </div>
    </div>
  );
}

export default App;
