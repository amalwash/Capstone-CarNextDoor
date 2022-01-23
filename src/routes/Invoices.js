export default class UserProfile extends Component {


  constructor(props) {
      super(props);

      this.state = {

          useTrees: [],

      };
  }


  componentDidMount() {
      axios.get("api/users").then(response => {
          const useTrees = response.data
          this.setState({ useTrees });
      });
  }




  deleteUseTrees(id) {
      console.log("Delete after Entering")
      axios.delete(`api/users/delete/${id}`)
          .then(res => {
              const useTrees = this.state.useTrees.filter(item => item.id !== id);
              this.setState({ useTrees });
          })
  }



  render() {
      return (



  <div className="Home" >
      <div className="Home2"> 
           <div class="W1" id="W2">
               {this.state.useTrees.map((item => (
                   <tr key={item.id}>
                         <div class="card">
                          <div class="card-header"></div>
                           <div class="card-img-container">
                             <div class="card-image">
                        <img height="200" width="200" src={item.picture} />
                           </div>
                          </div>
                        <div class="card-name">
                         <p>NAME :{item.name} </p>
                        </div>
                          <div class="card-info">
                          <p>@{item.username}</p>
                          <p>id :{item.id} </p>
                          </div>
                         <div class="card-social">
                         <Link to="/AddPlant"><button class="bubbly1"> add Plant </button> </Link>
                         <Link to="/MyGarden"><button class="bubbly1"> My Garden </button> </Link>
                         <button  class="bubbly" onClick={(e) => this.deleteUseTrees(item.id, e)}>delete</button>
                         <Outlet />
                          </div>
                         
                          </div>
                          </tr>
                      )))
                      }
              
          </div> 
       </div> 





       <div className="Home2"> 
           <div class="W1" id="W2">
                         <div class="card">
                          <div class="card-header"></div>
                           <div class="card-img-container">
                             <div class="card-image">
                        <img height="200" width="200" src={"https://png.pngtree.com/png-vector/20190626/ourlarge/pngtree-female-student-icon-design-png-image_1501288.jpg"} />
                           </div>
                          </div>
                        <div class="card-name">
                         <p>NAME : Dana  </p>
                        </div>
                          <div class="card-info">
                          <p>@DANA </p>
                          <p>id :100  </p>
                          </div>
                         <div class="card-social">
                         <Link to="/AddPlant"><button class="bubbly1"> add Plant </button> </Link>
                         <Link to="/MyGarden"><button class="bubbly1"> My Garden </button> </Link>
                         <Outlet />
                          </div>
                          </div>
                  </div> 
              </div> 




              <div className="Home2"> 
           <div class="W1" id="W2">
                         <div class="card">
                          <div class="card-header"></div>
                           <div class="card-img-container">
                             <div class="card-image">
                        <img height="200" width="200" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ_GaXM_RrcoepDsmJkXeOAylfpp8YxqKAEKuYXvyH4YznjAe-Zmbl82LjEsalMVwy_3o&usqp=CAU"} />
                           </div>
                          </div>
                        <div class="card-name">
                         <p>NAME :Hoor </p>
                        </div>
                          <div class="card-info">
                          <p>@7oor</p>
                          <p>id : 99 </p>
                          </div>
                         <div class="card-social">
                         <Link to="/AddPlant"><button class="bubbly1"> add Plant </button> </Link>
                         <Link to="/MyGarden"><button class="bubbly1"> My Garden </button> </Link>
                         <Outlet />
                          </div>
                         
                          </div>
                         
                      

                      
              
          </div> 
       </div> 




    </div> 
        





        
      
    )

  }
}