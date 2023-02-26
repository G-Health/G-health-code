import React from 'react';
import './Homepage.css';
import Homepage2 from './Homepage2';
import Homepage3 from './Homepage3';
import Footer from '../Footer/Footer';


function Homepage() {
  return (
    <div className="Homepage">
      <header className="Homepage-header">
        <nav>
          <div className="menu-icon">
          </div>
          <div className="menu">
            <button className="get-started-btn">Get Started</button>
          </div>
        </nav>
      </header>
      <main>
        <div className="main-text">
          <h1>Foundational Medical Software of Today</h1>
          <h2>Delivered Right Now.</h2>
        </div>
      </main>
     <Homepage2 />
     <Homepage3 />
     <Footer />
    </div>
  );
}

export default Homepage;
