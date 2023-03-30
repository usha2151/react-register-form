import React, { useState } from 'react';

export default function Navbar() {

  const [user, setUser] = useState({
    name:"",
    username:"",
    email:"",
    phone:"",
    password:"",
    confirm_password:"",
  });

  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
  

    setUser({  ...user, [name]: value } );
  };

  const postData = async (e) => {
     e.preventDefault();

     const { name, username, email, phone, password, confirm_password } = user;

     if(name && username && email && phone && password && confirm_password){
  const res = await fetch(
    "https://registration-page-3a933-default-rtdb.firebaseio.com/registrationform.json",{
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify({
        name,
        username,
        email,
        phone,
        password,
        confirm_password,
      }),
    }
    );
    if(res){
      setUser({
        name:"",
        username:"",
        email:"",
        phone:"",
        password:"",
        confirm_password:"",
      });

      alert("Data Stored Successfully");
    }
    
  }else {
     alert("Please Fill All The Data");
  }
  };
  return (
    <div>
     
  <div className="container">
    <div className="title">Registration</div>
    <div className="content">
     <form method="POST">
        <div className="user-details">
          <div className="input-box">
            <span className="details">Full Name</span>
            <input type="text" name="name" value={user.name} onChange={getUserData} placeholder="Enter your name" required/>
          </div>
          <div className="input-box">
            <span className="details">Username</span>
            <input type="text" name="username" value={user.username} onChange={getUserData} placeholder="Enter your username" required/>
          </div>
          <div className="input-box">
            <span className="details">Email</span>
            <input type="text" name="email" value={user.email} onChange={getUserData} placeholder="Enter your email" required/>
          </div>
          <div className="input-box">
            <span className="details">Phone Number</span>
            <input type="text" name="phone" value={user.phone} onChange={getUserData} placeholder="Enter your number" required/>
          </div>
          <div className="input-box">
            <span className="details">Password</span>
            <input type="text" name="password" value={user.password} onChange={getUserData} placeholder="Enter your password" required/>
          </div>
          <div className="input-box">
            <span className="details">Confirm Password</span>
            <input type="text" name="confirm_password" value={user.confirm_password} onChange={getUserData} placeholder="Confirm your password" required/>
          </div>
        </div>
        
        <div className="button">
          <input type="submit" onClick={postData} value="Register"/>
        </div>
        </form>
    </div>
  </div>



    </div>
  )
}
