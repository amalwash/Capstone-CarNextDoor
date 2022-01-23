import axios from "axios";
import { Component } from "react";
import '../card.css';
import { Link } from 'react-router-dom'


export default class ListCars extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Cars: [],
            buttonId: ""

        };

    }
    handleButtonId = (carId) => {
        console.log("car id is=> " + carId)
        sessionStorage.setItem("carId", carId)

    }

    componentDidMount() {
        axios.get("car")
            .then(result => {
                const Cars = result.data;
                this.setState({ Cars });

            });
    }
    deleteListCar(id) {
        console.log("in")
        let checkLogIn = localStorage.getItem("Check")
        if (checkLogIn == "authenticatedADMIN") {

            axios.delete(`api/delete/car/${id}`)
                .then(res => {
                    const Cars = this.state.Cars.filter
                        (item => item.id !== id);
                    this.setState({ Cars });
                    console.log(Cars)
                }

                )

        }
    alert(" NO OWNER")
    }
    render() {

        console.log(this.buttonId)
        return (
            
            <section id="portfolio" class="bg-light-gray" >
                <div id="demotext">Choose your car for your next trip:</div>
                <br />
                <ul class="cards">
                    <li class="cards__item">
                        <div class="cardd">
                            {this.state.Cars.map((item => (
                                <div key={item.id}  >
                                    <img className="card__image" src={item.img} />
                                    <div className="card__content">
                                        <p id="demotext1">TypeCar:{item.car_type}</p>
                                        <p id="demotext1">Model: {item.car_model}</p>
                                        <p id="demotext1">color:{item.car_color} </p>
                                        <p id="demotext1">description:{item.car_description} </p>
                                        <p id="demotext1">Owner Of Car:{item.owner.owner_firstName}</p>
                                        <br/>
                                        <Link to="/RegisterUser"> <button   type="button" class="btn btn-secondary" onClick={() => { this.handleButtonId(item.id) }} value={this.state.buttonId} >Request</button> </Link>
                                        {/* <button className="action-button" onClick={(e) => this.deleteListCar(item.id, e)}>Delete Car</button> */}
                                        <br />
                                        
                                        <svg onClick={(e) => this.deleteListCar(item.id, e)} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-archive" viewBox="0 0 16 16">
  <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
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






