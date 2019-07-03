import React, { Component } from 'react';
import Addtache from './components/Addtache';
import Affichetache from './components/Affichetache';
import './App.css';
import {Alert} from 'reactstrap';

const data = [{
  id:0,
  tache:"Faire le ménage a la maison",
  lieu:"Paris"

},
{
  id:1,
  tache:"Ranger sa chambre avant de sortir",
  lieu:"à la maison"

},
{
  id:2,
  tache:"Aller aux cinema avec une amie",
  lieu:"Aeroville"

}];

localStorage.setItem('data',JSON.stringify(data));



class App extends Component {

  constructor(props){

    super(props);

    this.Recuperation_data = this.Recuperation_data.bind(this)
    this.Update_data = this.Update_data.bind(this);
    this.state = this.getData.bind(this);
    this.App_delecte_data = this.App_delecte_data.bind(this);
    this.method_is_true_update = this.method_is_true_update.bind(this)

    this.state = {

        numbercrement:null,
        is_true:false,
        Alltache: JSON.parse(localStorage.getItem('data'))
    }

  }

  componentWillMount(){

    const numbercrement = 3;

    this.setState({numbercrement:numbercrement})

  
  }

  getData(){

    return this.state.Alltache;
    
  }

  Recuperation_data(tache,lieu){
   
    const id = this.state.numbercrement++;

    this.state.Alltache.push({id,tache,lieu})


    this.setState({ Alltache:this.state.Alltache})

  }

  Update_data(id,tache,lieu){

  
    let Alltache = this.getData();


    Alltache = Alltache.map(element => {

      if(element.id == id)
      {
        element.tache = tache;
        element.lieu = lieu;
        
      }

      return element;

    })


    this.setState({Alltache});  
  }

  App_delecte_data(ider){


    let Alltache_new = this.state.Alltache;

 
    let filter_delete = Alltache_new.filter(element => {
      
      return element.id !== ider
    
    
    });

    this.setState({Alltache:filter_delete})


  }

  method_is_true_update(element){

    this.setState({is_true:element})


  }

 
  render() {

    return (
      <div class="container">

       
           <h1>Gérez vos tâche à réaliser</h1>

           <hr/>

           {
                  this.state.is_true ? <Alert color="warning">

                    veuillez remplir tous les champs pour pouvoir modifier.

                  </Alert>: null
            }

           <Addtache Recuperation_data={this.Recuperation_data}/>

          <Affichetache data={this.state.Alltache} Update_data={this.Update_data} App_delecte_data={this.App_delecte_data} method_is_true_update={this.method_is_true_update}/>

      </div>
    );
  }
}

export default App;
