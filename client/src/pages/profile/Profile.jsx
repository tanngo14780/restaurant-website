import  React, { useState } from 'react';
import EditProfile from '../../components/EditProfile/EditProfile';
import Order from '../../components/Order/Order';
import Account from '../../components/Account/Account'
import "./Profile.css";

const App = () => {
  const [showMyComponent, setShowMyComponent] = useState(false);
  const handleClick = () => {
    setShowMyComponent(true);
  };
  
  return (
    <>
      <header className="header section-divider">
        <div className="container">
          <nav className="navbar">
            <label className="hamburger-icon" aria-label="Open navigation menu" for="abc"><ion-icon name="menu-outline"></ion-icon></label>
            <input type="checkbox" id="abc" />
            <ul className="navbar-list">
              <li className="nav-item">
                <a href="#home" className="navbar-link" data-nav-link>Home</a>
              </li>

              <li className="nav-item">
                <a href="#about" className="navbar-link" data-nav-link>About Us</a>
              </li>

              <li className="nav-item">
                <a href="#promo" className="navbar-link" data-nav-link>Shop</a>
              </li>

              <li className="nav-item">
                <a href="#menu" className="navbar-link" data-nav-link>Menu</a>
              </li>

              <li className="nav-item">
                <a href="#contact" className="navbar-link" data-nav-link>Contact</a>
              </li>
            </ul> 
          </nav>

          <div className="header-btn">
            <a href="#">
              <button className="btn">Order Here</button>
            </a>
          </div>
        </div>

        <div className="marquee">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci odio, qui nam quisquam velit eos nemo doloresex laborum magni corrupti! Reprehenderit sequi!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci odio, qui nam quisquam velit eos nemo doloresex laborum magni corrupti! Reprehenderit sequi!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci odio, qui nam quisquam velit eos nemo doloresex laborum magni corrupti! Reprehenderit sequi!</p>
        </div>
      </header>

      <div className='main'>
        <main >
          <section className="account-info">
            <Account></Account>   
            <div >
              <button onClick={handleClick} className='edit-btn'>Edit Profile</button>
                <div className='edit-profile'>
                  {showMyComponent && <EditProfile ></EditProfile>}
                </div>
            </div>
          </section>
          <section className="order-history">
            <Order></Order>
          </section>
        </main>
      </div>
      
      <footer>
        <section className="footer section-divider section-padding" id="contact">
          <div className="container">
            <div className="grid-list">
              <ul className="footer-list">
                <li>
                  <h3 className="footer-list-title">
                    jp fruit
                  </h3>
                </li>
        
                <li>
                  <p className="the-company">
                    Specialities
                  </p>
                </li>
        
                <li>
                  <p className="the-company">
                    Weekly Promos 
                  </p>
                </li>
        
                <li>
                  <p className="the-company">
                    Stay in the loop
                  </p>
                </li>
              </ul>
        
              <ul className="footer-list">
                <li>
                  <h3 className="footer-list-title">
                      the team
                  </h3>
                </li>
        
                        <li>
                            <p className="the-team">
                                Meet the Tean
                            </p>
                        </li>
        
                        <li>
                            <p className="the-team">
                                Collabborations
                            </p>
                        </li>
        
                        <li>
                            <p className="the-team">
                                Our Specilaty Chefs
                            </p>
                        </li>
              </ul>
        
              <ul className="footer-list">
                <li>
                   <h3 className="footer-list-title">
                      from japan
                    </h3>
                </li>
        
                <li>
                  <p className="from-japan">
                    The Cuisine
                  </p>
                </li>
        
                <li>
                  <p className="from-japan">
                    Authentic
                  </p>
                </li>
        
                <li>
                  <p className="from-japan">
                    Delicious and Healthy
                  </p>
                </li>
              </ul>
        
              <ul className="footer-list">
                <li>
                  <h3 className="footer-list-title">
                    legal
                  </h3>
                </li>
        
                <li>
                  <p className="legal">
                    Term & Conditoins
                  </p>
                </li>
        
                <li>
                  <p className="legal">
                    Privacy Policy
                  </p>
                </li>
        
                <li>
                  <p className="legal">
                    Copyright
                  </p>
                </li>
              </ul>
            </div>

          </div>
        </section>
      </footer>
    </>
  );
}

export default App;
