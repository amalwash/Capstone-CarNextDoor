import '../index.css';
import '../ListCar.css';
import { Link } from 'react-router-dom'


export default function Home() {

    return (
        
        <div className='main3'>
            <a name="home"></a>
            <div class="intro-header">
                <div class="bg-overlay">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="intro-message">
                                    <h1>Car Next Door</h1>
                                    <h3>Get money while you are at home.</h3>
                                    <hr class="intro-divider" />
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <br/><br/>
            <section id="portfolio" class="bg-light-gray">
                <p><img className='imgg3' src="ffff.jpg" alt='lions' width="100" height="100" align="left" />
                    <p className='ditails'> The app is to rent a car
                        but not from a rental company
                        but from <br />a person  like you and me who owns a car and registered through<br />
                        this
                        app to rent his own car for other people to use.</p>
                </p>

                <p><img className='imgg4' src="zx.jpg" alt='lions' width="100" height="100" align="right" />
                    <p className='ditails2'> So this is just one on one with the person how is renting his  <br />Just through this application you can easily and without  <br />
                        trouble rent a car anf you don't know maybe the car is next door</p>
                </p>
            </section>
           
            <br /> <br /> <br />
            <section id="portfolio" class="bg-light-gray">
                <div id="demotext">You can choose the type of your car:</div>
                < br />
                <ul class="card-list">
                    <li class="card">
                        <a class="card2-image" href="/ListUteCar">
                        </a>< br />
                        <a class="card-description" href='/ListUteCar' target="_blank">
                            <p>UteCar</p>
                        </a>
                    </li>

                    <li class="card">
                        <a class="card1-image" href="/ListVanCar" >
                        </a>< br />
                        <a class="card-description" href='/ListVanCar' target="_blank">
                            <p>VanCar</p>
                        </a>
                    </li>

                    <li class="card">
                        <a class="card-image" href="/ListSmallCar">
                        </a>< br />
                        <a class="card-description" href='/ListSmallCar' target="_blank">
                            <p>SmallCar</p>
                        </a>
                    </li>

                </ul>
            </section>
            {/* city */}
            <br /> <br /> <br /> <br />
            <br /> <br /> <br />
            <section id="portfolio" class="bg-light-gray">
                <div id="demotext">you can choose cars around carthe country:</div>
                <br />
                <ul class="card-list">
                    <li class="card">
                        <a class="card4-image" href='/ListCars' />
                        <a class="card-description" href='/ListCars' target="_blank">
                            <h5>AL Riyadh</h5>
                        </a>
                    </li>
                    <li class="card">
                        <a class="card5-image" href='/ListCars' />
                        <a class="card-description" href='/ListCars' target="_blank">
                            <h5>Mecca</h5>
                        </a>
                    </li>
                    <li class="card">
                        <a class="card6-image" href='/ListCars' />
                        <a class="card-description" href='/ListCars' target="_blank">
                            <h5>Madina AL Monawara</h5>
                        </a>
                    </li>
                    <li class="card">
                        <a class="card9-image" href='/ListCars' />
                        <a class="card-description" href='/ListCars' target="_blank">
                            <h5>Jeddah</h5>
                        </a>
                    </li>
                    <li class="card">
                        <a class="card8-image" href='/ListCars' />
                        <a class="card-description" href='/ListCars' target="_blank">
                            <h5>AL Dammam</h5>
                        </a>
                    </li>
                    <li class="card">
                        <a class="card10-image" href='/ListCars' />
                        <a class="card-description" href='/ListCars' target="_blank">
                            <h5>Al Khobar</h5>
                        </a>
                    </li>
                    <li class="card">
                        <a class="card7-image" href='/ListCars' />
                        <a class="card-description" href='/ListCars' target="_blank">
                            <h5>Al Qassim</h5>
                        </a>
                    </li>
                    <li class="card">
                        <a class="card11-image" href='/ListCars' />
                        <a class="card-description" href='/ListCars' target="_blank">
                            <h5>Hail</h5>
                        </a>
                    </li>
                    <li class="card">
                        <a class="card12-image" href='/ListCars' />
                        <a class="card-description" href='/ListCars' target="_blank">
                            <h5>Al Jouf</h5>
                        </a>
                    </li>
                    <li class="card">
                        <a class="card13-image" href='/ListCars' />
                        <a class="card-description" href='/ListCars' target="_blank">
                            <h5>Arar</h5>
                        </a>
                    </li>
                    <li class="card">
                        <a class="card14-image" href='/ListCars' />
                        <a class="card-description" href='/ListCars' target="_blank">
                            <h5>Aser</h5>
                        </a></li>
                    <li class="card">
                        <a class="card15-image" href='/ListCars' />
                        <a class="card-description" href='/ListCars' target="_blank">
                            <h5>Najran</h5>
                        </a></li>
                    <li class="card">
                        <a class="card16-image" href='/ListCars' />
                        <a class="card-description" href='/ListCars' target="_blank">
                            <h5>Jazan</h5>
                        </a></li>
                    <li class="card">
                        <a class="card17-image" href='/ListCars' />
                        <a class="card-description" href='/ListCars' target="_blank">
                            <h5>Tabuk</h5>
                        </a></li>
                    <li class="card">
                        <a class="card18-image" href='/ListCars' />
                        <a class="card-description" href='/ListCars' target="_blank">
                            <h5>Taif</h5>
                        </a></li>

                </ul>
            </section>
            <br />  <br />
            <section id="services" id="portfolio" class="bg-light-gray">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                            <h2 class="section-heading">No monthly fee</h2>
                            <h3 class="section-subheading text-muted">It's free to join, with no subscription fees – pay only when you need a car.</h3>
                        </div>
                    </div>
                    <div class="row text-center">
                        <div class="col-md-4">
                            <span class="fa-stack fa-4x">
                                <i class="fa fa-circle fa-stack-2x text-primary"></i>
                                <i class="glyphicon glyphicon-tree-conifer"></i>
                            </span>
                            <h4 class="service-heading">Free cancellation</h4>
                            <p class="text-muted">Life happens – cancel for free up to 48 hours before your trip</p>
                        </div>
                        <div class="col-md-4">
                            <span class="fa-stack fa-4x">
                                <i class="fa fa-circle fa-stack-2x text-primary"></i>
                                <i class="glyphicon glyphicon-heart"></i>
                            </span>
                            <h4 class="service-heading">Damage cover included</h4>
                            <p class="text-muted">All trips include damage cover and 24/7 roadside assistance.</p>
                        </div>
                        <div class="col-md-4">
                            <span class="fa-stack fa-4x">
                                <i class="fa fa-circle fa-stack-2x text-primary"></i>
                                <i class="glyphicon glyphicon-tint"></i>
                            </span>
                            <h4 class="service-heading">On-demand access</h4>
                            <p class="text-muted">Choose a car with Instant Keys and get the keys from a smart lockbox.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}

