import React, { Component } from 'react';
import TacheItem from './TacheItem';
import {Button,Table,FormGroup,Form} from 'reactstrap';
import '../assets/css/Affichetache.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'; 
library.add(fab,fas);

class Affichetache extends React.Component {

    constructor(props){

        super(props);

        this.state = {

            is_true: false,
            id_get: null,
            rename_id:null,
            is_true_upate:true,

        }

        this.active_is_true = this.active_is_true.bind(this)
        this.update = this.update.bind(this);
        this.recupere_id = this.recupere_id.bind(this)
        this.Affichetache_delecte_data = this.Affichetache_delecte_data.bind(this)
        this.resetClass = this.resetClass.bind(this)

    }

   

  
   active_is_true(value,newtacheinput,newlieuinput,id){

        this.newtacheinput.value = newtacheinput;
        this.newlieuinput.value = newlieuinput;
    
        this.setState({is_true:value,id_get:id});

   }

   recupere_id(id){

     this.setState({rename_id:id})

   }
   
   update(e){

        e.preventDefault();

        const { Update_data,method_is_true_update } = this.props;

        const verif = /^[A-Za-z]+[A-Za-zÈÉÊèéêî-]+[A-Za-zÈÉÊèéêî]$/;

        if(this.newtacheinput.value.value == "" || this.newlieuinput.value == "")
        {
 
            method_is_true_update(this.state.is_true_upate)
 
        }else
        {
             if(!verif.test(this.newlieuinput.value))
             {
                
             }else
             {
               
                 method_is_true_update(!this.state.is_true_upate)

                 this.setState({is_true:false})
                 Update_data(this.state.rename_id,this.newtacheinput.value,this.newlieuinput.value) 
 
             }
 
         }

        e.preventDefault();

   
    
   }

   resetClass(e){

    e.preventDefault();

    this.setState({is_true:false})

  }

  Affichetache_delecte_data(id){

    const {App_delecte_data} = this.props;

    App_delecte_data(id)
    
  }

    render(){

        const {data} = this.props;


        return(

            <div class="row">


            <div id="modal" className={this.state.is_true == true ? "active-modal": ""}>
            
                 <Form>
     
                     <h3 class="title">Modification de id n° {this.state.id_get}</h3>
     
                    <div class="row">
     
                     <FormGroup className="formgroup updat_form_groupe">
                         <input type="text" className="form-control fomr-update" ref={input => this.newtacheinput = input} />
                      </FormGroup>
                     <FormGroup className="formgroup updat_form_groupe">
                         <input type="text" className="form-control fomr-update" ref={input => this.newlieuinput = input}/>
                     </FormGroup>
     
                     <FormGroup className="formgroup btn-groupe">
                            <Button color="success" type="submit" onClick={(e) => this.update(e)}>Valide le changement</Button>
                            <Button color="danger"onClick={this.resetClass}>Annulé</Button>
                     </FormGroup>
     
             
                    </div>
     
                 </Form>
            
            </div>
            
            {

                data.length !== 0 ?  <Table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>tâche a réaliser</th>
                    <th>Lieu</th>
                    <th>Configuration</th>
                </tr>
                </thead>
                <tbody>
                
                   {

                       data.map(element => (

                           <TacheItem key={element.id} {...element} active_is_true={this.active_is_true} newtacheinput={element.tache} newlieuinput={element.lieu} id_tache={element.id} recupere_id={this.recupere_id} Affichetache_delecte_data={this.Affichetache_delecte_data}/>

                       ))

                   }

                </tbody>
            </Table>
           
                : <div className="center-data-false">

                    <span className="icon-smiley">

                    <FontAwesomeIcon icon={['fas', 'frown']} />

                   

                    </span>

                    <h3 className="titre-smiley">Aucune donnée</h3>

                </div>

            }


            </div>
     
     
         )

    }


}


export default Affichetache;