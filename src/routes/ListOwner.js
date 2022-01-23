import axios from "axios";
import { Component } from "react";
import '../card.css';


export default class ListOwner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Owner: [],

        };

    }

    componentDidMount() {
        axios.get("owner")
            .then(result => {
                const Owner = result.data;
                this.setState({ Owner });

            });
    }

    deleteListOwner(owner_id) {
        console.log("add Owner")
        let checkLogIn = localStorage.getItem("Check")
        if (checkLogIn == "authenticatedADMIN") {

        axios.delete(`delete/owner/${owner_id}`)
            .then(res => {
                const Owner = this.state.Owner.filter
                    (item => item.owner_id !== owner_id);
                this.setState({ Owner });
            }

            )
        }
        alert(" NO OWNER")
    }
    render() {

        console.log(this.buttonId)
        return (

            <section id="portfolio" class="bg-light-gray" >
                <br />
                <ul class="cards">
                    <li class="cards__item12">
                        <div class="cardd">
                            {this.state.Owner.map((item => (
                                <div key={item.owner_id}  >
                                    <div className="card__content">
                                        <p className="card__title" >firstName:{item.owner_firstName}</p>
                                        <p className="card__title" >lastName: {item.owner_lastName}</p>
                                        {/* <p id="demotext1">address:{item.owner_address} </p> */}
                                        {/* <p id="demotext1">phone:{item.owner_phone} </p> */}
                                        {/* <p id="demotext1">age:{item.owner_age}</p> */}
                                        <p className="card__title" >email:{item.owner_email}</p>
                                        <br />

                                        <button type="button" class="btn btn-secondary" onClick={(e) => this.deleteListOwner(item.owner_id, e)}>Delete Owner</button>
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

