import React from "react";
import react, { useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom'
import '../forms.css';

export default function RegisterOwner() {

    let [owner_id, setowner_id] = useState("")
    let [firstName, setOwner_firstNamE] = useState("")
    let [lastName, setOwner_lastName] = useState("")
    let [Age, setOwner_age] = useState("")
    let [Email, setOwner_email] = useState("")
    let [Address, setOwner_address] = useState("")
    let [phone, setOwner_phone] = useState("")


    function handleOwner_id(event) {
        setowner_id((owner_id = event.target.value));
    }
    function handleOwner_firstName(event) {
        setOwner_firstNamE((firstName = event.target.value));
    }
    function handleOwner_lastName(event) {
        setOwner_lastName((lastName = event.target.value));
    }
    function handleOwner_age(event) {
        setOwner_age((Age = event.target.value));
    }
    function handleOwner_email(event) {
        setOwner_email((Email = event.target.value));
    }
    function handleOwner_address(event) {
        setOwner_address((Address = event.target.value));
    }
    function handlEOwner_phone(event) {
        setOwner_phone((phone = event.target.value));
    }


    function rgisterHandel() {
        let NewOwner = { owner_id: owner_id, owner_firstName: firstName, owner_lastName: lastName, owner_age: Age, owner_email: Email, owner_address: Address, owner_phone: phone }

        console.log("insid function");
        console.log(NewOwner)
        axios({
            method: 'post',
            url: 'api/owner/add',
            data: NewOwner,
        });
    }


    return (
        <section id="portfolio" class="bg-light-gray" >
        <fieldset>
            <form id="msform">
                <h4 className="card__title" > Register Owner </h4>
                <br />
                <label> OwnerId: </label>
                <input type="text" name="OwnerId"
                    placeholder="OwnerId"
                    onChange={handleOwner_id}
                />
                <br />
                <label> Firstname: </label>
                <input type="text" name="firstName"
                    placeholder="FirstName"
                    onChange={handleOwner_firstName}
                />
                <br /> 

                <label className="last"> Lastname: </label>
                <input type="text" name="lastName"
                    placeholder="LastName"
                    onChange={handleOwner_lastName}
                />
                <br />

                <label> Age: </label>
                <input type="text" name="age"
                    placeholder="Age" onChange={handleOwner_age}
                />
                <br />
                <label> Email: </label>
                <input type="text" name="email"
                    placeholder="email" onChange={handleOwner_email}
                />
                <br />
                <label> Address: </label>
                <input type="text" name="Address"
                    placeholder="Address" onChange={handleOwner_address}
                />
                <br />
                <label> Phone: </label>
                <input type="text" name="phone"
                    placeholder="phone" onChange={handlEOwner_phone}
                />
                <br />
                <Link to="/RegisterCar"><button className="action-button" onClick={rgisterHandel}>Submit</button> </Link>
            </form>
        </fieldset>
        </section>
    );
}