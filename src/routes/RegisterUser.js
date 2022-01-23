import React from "react";
import { useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import '../App.css';


export default function RegisterUser() {

  
  let [userName, setuserName] = useState("")
  let [password, setPassword] = useState("")
  let [firstName, set_firstNamE] = useState("")
  let [Age, setUser_age] = useState("")
  let [Email, setUser_email] = useState("")
  let [Address, setUser_address] = useState("")
  let [phone, setUser_phone] = useState("")
  let[roles , setroles]= useState("")



 
  function handleUser_firstName(event) {
    set_firstNamE((firstName = event.target.value));
  }
  function handlePassword(event) {
    setPassword((password = event.target.value));
  }
  function handleUserName(event) {
    setuserName((userName = event.target.value));
  }
  function handleUser_age(event) {
    setUser_age((Age = event.target.value));
  }
  function handleUser_email(event) {
    setUser_email((Email = event.target.value));
  }
  function handleUser_address(event) {
    setUser_address((Address = event.target.value));
  }
  function handleUser_phone(event) {
    setUser_phone((phone = event.target.value));
  }
  function handleroles(event) {
    setroles((roles = event.target.value));
  }


  function rgisterHandel() {
    let NewUser = {  user_firstName: firstName,roles:roles, user_age: Age, user_email: Email, user_address: Address, password: password, userName: userName,phone:phone }

    console.log("insid function");
    console.log(NewUser)
    axios({
      method: 'post',
      url: 'api/user/add',
      data: NewUser,
    });
    alert("SignUp")
  }
 
  return (
    <section id="portfolio" class="bg-light-gray" >
    <fieldset>
    <form id="msform">
      <h1 className="card__title"  > Register NewUser </h1>
      <br />
      <label className="last"> userName: </label>
      <input type="text" name="userName"
        placeholder="userName"
        onChange={handleUserName}
      />
      <br />

      <label className="last"> password: </label>
      <input type="text" name="password"
        placeholder="password"
        onChange={handlePassword}
      />
      <br />
      <label className="last"> roles: </label>
      <input type="text" name="USER or ADMIN"
        placeholder="USER or ADMIN"
        onChange={handleroles}
      />
      <br />
      <label> Firstname: </label>
      <input type="text" name="firstName"
        placeholder="FirstName"
        onChange={handleUser_firstName}
      />

      <br />
      <label> Age: </label>
      <input type="text" name="age"
        placeholder="Age" onChange={handleUser_age}
      />
      <br />
      <label> Email: </label>
      <input type="text" name="email"
        placeholder="email" onChange={handleUser_email}
      />
      <br />
      <label> Address: </label>
      <input type="text" name="Address"
        placeholder="Address" onChange={handleUser_address}
      />
      <br />
      <label> Phone: </label>
      <input type="text" name="phone"
        placeholder="phone" onChange={handleUser_phone}
      />
      <br /> 
      <Link to="/Booking"> <button className="action-button" onClick={rgisterHandel}>Rgister</button> </Link>
    </form>
    </fieldset>
    </section>
  );
}