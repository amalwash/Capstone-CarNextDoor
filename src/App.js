import React from "react";
import { Outlet, Link } from "react-router-dom";



export default function App() {


  let checkLogIn = localStorage.getItem("carId")

  return (
    <div className="main3">
      <br />
      {/* <button onClick={() => { localStorage.setItem("Check", "") }}>LogOut</button> */}
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <br /> <br /><br />
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link class="nav-link" to="Home">Home</Link>
              <Link class="nav-link" to="RegisterOwner">RegisterOwner</Link>
             <Link class="nav-link" to="ListOwner">ListOwner</Link>
              <Link class="nav-link" to="ListCars">All Cars</Link>
              <Link class="nav-link" to="ReviewDetails">ReviewDetails</Link>
              <Link class="nav-link" to="Review">Review</Link>
              <Link class="nav-link" to="Booking">Booking</Link>
              <br /> <br /><br />
            </div>
          </div>
          <Link to="LogInPage"> <svg className="logIC" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person-plus-fill" viewBox="0 0 16 16">
            <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
          </svg> </Link>
          < br /> < br />< br />
        </div>
        <svg onClick={() => { localStorage.setItem("Check", "") }} className="logINC" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person-x-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6.146-2.854a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z"/>
</svg>
      </nav>

      <br />

      <Outlet />


    </div>

  );
}




