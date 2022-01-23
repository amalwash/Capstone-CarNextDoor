import React from "react";
import react, { useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

export default function Review() {


    let [review_details, setReview_details] = useState("")
    let [review_Date, setReview_Date] = useState("")
    let [id, setBooking_id] = useState("")


    function handleReview_details(event) {
        setReview_details((review_details = event.target.value));
    }
    function handleReview_Date(event) {
        setReview_Date((review_Date = event.target.value));
    }
    function handleBookingId(event) {
        setBooking_id((id = event.target.value));
    }

    function rgisterHandel(event) {
        event.preventDefault();
        let Reviews = { review_details: review_details, review_Date: review_Date, booking: { id: id } }
        console.log("insid function");
        console.log(Reviews)
        axios({
            method: 'post',
            url: 'review/add',
            data: Reviews,
        });

    }

    return (

        <section id="portfolio" class="bg-light-gray" >
        <fieldset>
        <form id="msform">
          <h1 className="card__title"> Register Review </h1>

            <br />  <br />

            <label className="last"> Review Date: </label>
            <input type="textarea" name="ReviewDate"
                placeholder="ReviewDate" 
                onChange={handleReview_Date}
            />
            <br />  <br />
            <label> Review Details: </label>
            <textarea maxlength="290" name=" Review Details" id="info"
                placeholder="ReviewDetails"
                onChange={handleReview_details}
            />
            <br />
            <label> BookingId: </label>
            <input type="text" name="BookingId"
                placeholder="BookingId"
                onChange={handleBookingId}
            />
            <br />  <br />
            <Link to="ReviewDetails"> <button className="action-button"  onClick={(e) => { rgisterHandel(e) }}>Submit</button></Link>

        </form>
        </fieldset>
        </section>
        



    );

}
