import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import './ListCar.css';
import Home from './routes/Home';
import ListCars from './routes/ListCars';
import ListVanCar from './routes/ListVanCar';
import Booking from './routes/Booking';
import Review from './routes/Review';
import HomePage from './routes/HomePage';
import ListOwner from './routes/ListOwner';
import ReviewDetails from './routes/ReviewDetails';
import ListSmallCar from './routes/ListSmallCar';
import RegisterUser from './routes/RegisterUser';
import ListUteCar from './routes/ListUteCar';
import RegisterCar from './routes/RegisterCar';
import LogInPage from './routes/LogInPage';
import RegisterOwner from './routes/RegisterOwner';
import './index.css';




ReactDOM.render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<HomePage />} />
      <Route path="/" element={<App />}>
        <Route path="home" element={<Home />} />
        <Route path=":registerCar" element={<RegisterCar />} />
        <Route path="registerOwner" element={< RegisterOwner />} />
        <Route path="registerUser" element={<RegisterUser />}/>
        <Route path="ListCars" element={<ListCars />} />
        <Route path="ListSmallCar" element={<ListSmallCar />} />
        <Route path="ReviewDetails" element={<ReviewDetails />} />
        <Route path="listVanCar" element={<ListVanCar />} />
        <Route path="ListOwner" element={<ListOwner />} />
        <Route path="listUteCar" element={<ListUteCar />} />
        <Route path="LogInPage" element={<LogInPage />} />
        <Route path="Review" element={<Review />} />
        <Route path="Booking" element={<Booking />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
    </Routes>
  </BrowserRouter>
  , document.getElementById('root'));