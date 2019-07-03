import React, { } from 'react';
import { Button,Input,FormGroup,Form,Alert } from 'reactstrap';
import '../assets/css/Addtache.css';

const phrase = "salut je m'appel famady et j'ai 23 ans";

class Addtache extends React.Component{

    constructor(props){

        super(props)

        this.state = {
            incrematation:0,
            active: false,
            active_city:false,
        
        }

        this.controlLenght = this.controlLenght.bind(this)
    }

    componentDidMount(){

    
    }


    controlLenght(e){

        e.preventDefault();

       const verif = /^[A-Za-z]+[A-Za-zÈÉÊèéêî-]+[A-Za-zÈÉÊèéêî]$/;

       if(this.tacheInput.value == "" || this.inputlieu.value == "")
       {

        this.setState({active:true})
        this.setState({active_city:false})


    
       }else
       {
        this.setState({active:false})

            if(!verif.test(this.inputlieu.value))
            {
                this.setState({active_city:true})

            }else
            {
                this.setState({active_city:false})

                const {Recuperation_data} = this.props;

                Recuperation_data(this.tacheInput.value,this.inputlieu.value)

            }

        }

    }

    render(){

       
        return(

            <div>

               {
                this.state.active ?  <Alert color="danger" className="active">
                    
                   veuillez remplir tous les champs

               </Alert> : ""
               }

              {
                this.state.active_city ?  <Alert color="danger" className="active">
                    
                    le format de la ville est incorécte

               </Alert> : ""
               }
                  
              <Form className="row">

                
                  <FormGroup className="formgroup">
                      <input type="text" placeholder="Tache" class="form-control" ref={tacheInput => this.tacheInput = tacheInput}/>
                  </FormGroup>

                  <FormGroup className="formgroup">
                      <input class="form-control" type="text" placeholder="lieu" ref={inputlieu => this.inputlieu = inputlieu}/>
                  </FormGroup>

                  <FormGroup className="formgroup">
                    <Button color="success" type="submit" onClick={this.controlLenght}>Valider</Button>
                  </FormGroup> 

              </Form>   


                </div>

          
        )


    }


}

export default Addtache;