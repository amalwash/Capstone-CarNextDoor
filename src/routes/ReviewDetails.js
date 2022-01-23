import axios from "axios";
import { Component } from "react";
import '../index.css';
import { Link } from 'react-router-dom'


export default class ReviewDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ReviewEmphasis:[],
            Cars: [],

        };

    }
    componentDidMount() {
        axios.get("Reviews")
            .then(result => {
                const ReviewEmphasis = result.data;
                this.setState({ ReviewEmphasis });

            });
    }
    deleteListCar(id) {
        console.log("in")
            axios.delete(`delete/car/${id}`)
                .then(res => {
                    const Cars = this.state.Cars.filter
                        (item => item.id !== id);
                    this.setState({ Cars });
                    console.log(Cars)
                }

                )

        }
        // deleteReviewEmphasis(id) {
        //     console.log("in")
        //         axios.delete(`api/delete/${id}`)
        //             .then(res => {
        //                 const ReviewEmphasis = this.state.ReviewEmphasis.filter
        //                     (item => item.id !== id);
        //                 this.setState({ ReviewEmphasis });
        //                 console.log(ReviewEmphasis)
        //             }
    
        //             )
    
        //     }

    render() {

        return (
            <section id="portfolio" class="bg-light-gray" >
            <div  className="card__title">thank you:</div>
            <br />
            <ul class="cards">
                <li class="cards__item">
                    <div class="cardd">
                {this.state.ReviewEmphasis.map((item => (
                        <div key={item.id} >
                            <img className="card__image" src={item.booking.car.img} />
                            <div className="card__content">
                                <p id="demotext1">Review Details: {item.review_details}</p>
                                <p id="demotext1">Date:{item.review_Date}</p>
                                <p id="demotext1">color:{item.booking.car.car_color}</p>
                                <p id="demotext1">Model:{item.booking.car.car_model}</p>
                                <p id="demotext1">Type:{item.booking.car.car_type}</p>
                                <p id="demotext1">Owner Of Car:{item.booking.car.owner.owner_firstName}</p>
                                <button  type="button" class="btn btn-secondary" onClick={(e) => this.deleteListCar(item.id, e)}>Delete Car</button>
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
                    
                               