import React from "react";
import axios from "axios"
import { useState, useEffect } from "react";
import '../App.css';
import { Link } from 'react-router-dom'

export default function LogInPage() {

  const [userName, setmyUsername] = useState("")
  const [password, setmypassword] = useState("")
  const [check, setCheck] = useState("")
  const [message, setmessage] = useState("");

  let myData = { userName: userName, password: password, roles: "USER" }

  function SignUp() {
    axios({
      method: "post",
      url: "api/user/add",
      data:
        myData
    }).then(response => { setCheck(response.data) })
  }

  function Login(event) {
    event.preventDefault();
    axios.get('api/user/login', { params: { userName: userName, password: password } })
      .then(response => {
        if (response.data == "authenticatedUSER") {
          localStorage.setItem("Check", "authenticatedUSER")
        }
        else if (response.data == "authenticatedADMIN") {
          localStorage.setItem("Check", "authenticatedADMIN")

        }
        else { setmessage("Your username or Passwrd is invalid") }
      })
    console.log(check)

  }

  return (
<section id="portfolio" class="bg-light-gray" >
    <fieldset>
    <form id="msform">
      <h1 className="card__title"  > log in:  </h1>
      <br/>
  
     userName: <input type="text" name="userName" onChange={(event) => { setmyUsername(event.target.value) }} /><br></br>
      password: <input type="text" name="password" onChange={(event) => { setmypassword(event.target.value) }} /><br></br>
      <h3>{check}</h3>
      <button button className="action-button" onClick={Login}>Log in</button>

      <h2>{message}</h2>
      <div class="login-help">
        <a  href="/RegisterUser">Register</a>
      </div>
   </form>
   </fieldset>

</section>
  );
}