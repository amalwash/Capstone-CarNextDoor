import axios from "axios";
import { Component } from "react";
import { Link } from 'react-router-dom'

export default class ListSmallCar extends Component {
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
    axios.get("Cars")
        .then(result => {
            const Cars = result.data;
            this.setState({ Cars });

        });
}
deleteListCar(id) {
    console.log("in")
    let checkLogIn = localStorage.getItem("Check")
    if (checkLogIn == "authenticatedADMIN") {

        axios.delete(`delete/car/${id}`)
            .then(res => {
                const Cars = this.state.Cars.filter
                    (item => item.id !== id);
                this.setState({ Cars });
                console.log(Cars)
            }

            )

    }
    alert("ADMIN")
}
render() {
    const myCars = this.state.Cars.filter(item => item.car_type == 'SmallCar');
    console.log(this.buttonId)
    return (
        
        <section id="portfolio" class="bg-light-gray" >
            <div id="demotext">Choose your car for your next trip:</div>
            <br />
            <ul class="cards">
                <li class="cards__item">
                    <div class="cardd">
                    {myCars.map((item => (
                 <div key={item.id}  >
                 <img className="card__image" src={item.img} />
                 <div className="card__content">
                     <p id="demotext1">TypeCar:{item.car_type}</p>
                     <p id="demotext1">Model: {item.car_model}</p>
                     <p id="demotext1">color:{item.car_color} </p>
                     <p id="demotext1">description:{item.car_description} </p>
                     <p id="demotext1">Owner Of Car:{item.owner.owner_firstName}</p>
                     <Link to="/RegisterUser"> <button class="btn btn--block card__btn" onClick={() => { this.handleButtonId(item.id) }} value={this.state.buttonId} >Request</button> </Link>
                     <button  onClick={(e) => this.deleteListCar(item.id, e)}>Delete Car</button>
                     <br />
                     

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



            
                      

