import { Component } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'
import '../card.css';


export class Booking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Cars: [],
            carscars: [],
        };

    }

    componentDidMount() {
        let myCarDisplay = sessionStorage.getItem("carId")
        console.log(myCarDisplay)
        axios.get(`cars/${myCarDisplay}`)
            .then(result => {
                this.setState({ Cars: result.data });

            });

    }
    post = () => {
        let myCarDisplay = sessionStorage.getItem("carId")
        let foreignCar={id: myCarDisplay}
        let myData = {car: foreignCar }

        axios({
            method: "post",
            url: "add",
            data: myData
        })
        

    }

    render() {
        console.log(this.state.Cars)
        let carscars = []
        carscars.push(this.state.Cars)
        console.log(carscars)


        return (
            <section id="portfolio" class="bg-light-gray">
                <h1 className="card__title">Thank you, your order is done, go get the car</h1>
                <ul class="cards">
                    <li class="cards__item">
                        <div class="cardd">
                            {carscars.map((item => (
                                <div  key={item.id}  >
                                    <img className="card__image" src={item.img} />
                                    <div className="card__content">
                                    <p id="demotext1">TypeCar:{item.car_type}</p>
                                        <p id="demotext1">Model: {item.car_model}</p>
                                        <p id="demotext1">color:{item.car_color} </p>
                                        <p id="demotext1">description:{item.car_description} </p>
                                        {/* <p id="demotext1">Owner Of Car:{item.car.owner.owner_firstName}{item.car.owner.owner_lastName}</p> */}
                                   <Link to="/Review"> <button onClick={this.post}>Review</button></Link> 
                                   <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-emoji-sunglasses" viewBox="0 0 16 16">
  <path d="M4.968 9.75a.5.5 0 1 0-.866.5A4.498 4.498 0 0 0 8 12.5a4.5 4.5 0 0 0 3.898-2.25.5.5 0 1 0-.866-.5A3.498 3.498 0 0 1 8 11.5a3.498 3.498 0 0 1-3.032-1.75zM7 5.116V5a1 1 0 0 0-1-1H3.28a1 1 0 0 0-.97 1.243l.311 1.242A2 2 0 0 0 4.561 8H5a2 2 0 0 0 1.994-1.839A2.99 2.99 0 0 1 8 6c.393 0 .74.064 1.006.161A2 2 0 0 0 11 8h.438a2 2 0 0 0 1.94-1.515l.311-1.242A1 1 0 0 0 12.72 4H10a1 1 0 0 0-1 1v.116A4.22 4.22 0 0 0 8 5c-.35 0-.69.04-1 .116z"/>
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-1 0A7 7 0 1 0 1 8a7 7 0 0 0 14 0z"/>
</svg>
                                    </div>
                                </div>

                            )))
                            }
                        </div>
                        
                    </li>
                    </ul>
            </section>
        );
    }
}


export default Booking
