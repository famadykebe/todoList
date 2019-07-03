import React, { Component } from 'react';
import {Button,Table,FormGroup,Form} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'; 
library.add(fab,fas);

class TacheItem extends React.Component {

    constructor(props){

       super(props);

       this.Editproduct = this.Editproduct.bind(this)
       this.TacheItem_delecte_data = this.TacheItem_delecte_data.bind(this);
    }

    Editproduct = (e) => {

        const {active_is_true,newtacheinput,newlieuinput,id_tache,recupere_id} = this.props;

        e.preventDefault();

         const is_true = true;

        active_is_true(is_true,newtacheinput,newlieuinput,id_tache);

        recupere_id(id_tache);

    
       
   }

   TacheItem_delecte_data(e,id){

    e.preventDefault();

    const {Affichetache_delecte_data,id_tache} = this.props;

    Affichetache_delecte_data(id_tache);

   }

  
    render(){

        const {id,tache,lieu} = this.props;

        
        return(
            <tr key={id}>

                    <th>{id}</th>
                    <td>{tache}</td>
                    <td>{lieu}</td>
                    <td>
                       <Button color="warning" className="btn-conf" onClick={(e) => this.Editproduct(e)}><FontAwesomeIcon icon={['fas', 'edit']}/></Button>
                       <Button color="danger" className="btn-conf" onClick={(e) => this.TacheItem_delecte_data(e)}><FontAwesomeIcon icon={['fas', 'times']}/></Button>

                    </td>
            </tr>
     
         )

    }


}


export default TacheItem;