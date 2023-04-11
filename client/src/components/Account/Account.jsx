import  React, { useState } from 'react';
import "./Account.css";


const AccountInfo = () => {
  return (
      <div>
        <div className="info">
          <h2>Profile User</h2>
          <div className="img">
            <div></div>
            <div>
              <img src='/assets/images/avatar.jpg' className="avatar" alt="avatar"></img>
            </div>
            <div></div>
          </div>
          <div className="name">
            <div><ion-icon name="person-outline"></ion-icon></div>
            <div className="group">
              <div>Tan</div>
            </div>
            <div className="group">
              <div>Ngo</div>            
            </div>
          </div>
          <div className="group">
            <div><ion-icon name="mail-open-outline"></ion-icon></div>
            <div>tanngo@gmail.com</div>            
          </div>     
          <div className="group">
            <div><ion-icon name="call-outline"></ion-icon></div>
            <div>0123456789</div>            
          </div>
          <div className="group">
            <div><ion-icon name="location-outline"></ion-icon></div>
            <div>179 Hai BA Trung Ha Noi</div>            
          </div>
        </div>    
      </div>
  );
};

const Account = () => {
  return (
    <section className="account">
      <AccountInfo />
    </section>
  );
};

export default Account;


