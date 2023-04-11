import React, { useState } from 'react';
import * as yup from 'yup';
import "./EditProfile.css"


const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().matches(/^\d{10}$/).required(),
  address: yup.string().required(),
  password: yup.string().min(6).required(),
});

const EditProfileForm = () => {
    const [firstName, setFirstname] = useState('');
    const [lastName, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  
    const handleFirstNameChange = e => setFirstname(e.target.value);
    const handleLastNameChange = e => setLastname(e.target.value);
    const handleEmailChange = e => setEmail(e.target.value);
    const handlePhoneChange = e => setPhone(e.target.value);
    const handleAddressChange = e => setAddress(e.target.value);
    const handlePassChange = e => setPassword(e.target.value);
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});

    const handleSave = () => {     
        setIsFormSubmitted(true);
        setFirstname('');
        setLastname('');
        setEmail('');
        setPhone('');
        setAddress('');
        setPassword('');
    };

    const handleCancel =() =>{
      setIsFormSubmitted(true); 
      window.location.reload();  
    }
      
  
    const handleSubmit = e => {
      e.preventDefault();
      schema
        .validate(
          { firstName, lastName, email, phone, address, password }, 
          { abortEarly: false })
        .then(() => {
          handleSave();
          console.log(firstName, lastName, email, phone, address, password);
          setTimeout(() => {
            window.alert("Update successful")
            window.location.reload();
          }, 2000);
        })
        .catch(errors => {
          const newErrors = {};
          errors.inner.forEach(error => {
            newErrors[error.path] = error.message;
          });
          setErrors(newErrors);
        });
    };
    
    const handleShowPassword = () => {
      setShowPassword(!showPassword);
    };
  
    return (
        <>
          {!isFormSubmitted && (
            <form className='formEdit' onSubmit={handleSubmit}>                
              <div className="name">
              <div className="form-group">
                <label for="First_name">First Name:</label>
                <input id="First_name" type="text" value={firstName} onChange={handleFirstNameChange} />
                {errors.firstName && <p classNameName="error">{errors.firstName}</p>}
              </div>
              <div className="form-group">
                <label for="Last_name">Last Name:</label>
                <input id="Last_name" type="text" value={lastName} onChange={handleLastNameChange} />
                {errors.firstName && <p classNameName="error">{errors.lastName}</p>}
              </div>
            </div>
            <div className="form-group">
              <label for="email">Email:</label>     
              <input id="email" type="email" value={email} onChange={handleEmailChange} />                   
              {errors.email && <span classNameName="error">{errors.email}</span>}
            </div>
            <div className="form-group">
              <label for="phone">Phone number:</label>
              <input id="phone" type="tel" value={phone} onChange={handlePhoneChange} />
              {errors.phone && <span classNameName="error">{errors.phone}</span>}
            </div>
            <div className="form-group">
              <label for="address">Address:</label>
              <input id="address" type="text" value={address} onChange={handleAddressChange} />
              {errors.address && <span classNameName="error">{errors.address}</span>}
            </div>
            <div className="form-group">
              <label for="password">Password:</label>
              <div className="show">
                <input id="password" type={showPassword ? "text" : "password"}  value={password} onChange={handlePassChange} />
                {errors.password && <span classNameName="error">{errors.password}</span>}
                <button className="show-btn" onClick={handleShowPassword}>{showPassword ? "Hide" : "Show"}</button>
              </div>
            </div>
              <button type="submit">Submit</button>
              <button className='cancel-btn' id='cancel' onClick={handleCancel}>Cancel</button>
            </form>
            
          )}
        </>
      );


};




  
  
export default EditProfileForm;
