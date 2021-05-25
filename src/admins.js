import React, { Component } from "react";



import {firebasedb} from "./index"
import "bootstrap/dist/css/bootstrap.min.css";
// import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";

class Admins extends Component {
  state = {
    data: [],
    form:{
      comentario: '',
      correo: '',
    },
    id: 0
  };

  peticionGet = () => {
    firebasedb.child("/comentarios/render").on("value", (comentario) => {
      if (comentario.val() !== null) {
        this.setState({ ...this.state.data, data: comentario.val() });
      } else {
        this.setState({ data: [] });
      }
    });
  };

  peticionPost=()=>{
    firebasedb.child("/comentarios/render").push(this.state.form,
      error=>{
        if(error)console.log(error)
      });
      this.setState({modalInsertar: false});
  }

  peticionPut=()=>{
    firebasedb.child(`/comentarios/render/${this.state.id}`).set(
      this.state.form,
      error=>{
        if(error)console.log(error)
      });
      this.setState({modalEditar: false});
  }

  peticionDelete=()=>{
    if(window.confirm(`Estás seguro que deseas eliminar el comentario ${this.state.form && this.state.form.comentario}?`))
    {
      firebasedb.child(`/comentarios/render/${this.state.id}`).remove(
      error=>{
        if(error)console.log(error)
      });
    }
    console.log("id   " + this.state.id);
  }

  handleChange=e=>{
    this.setState({form:{
      ...this.state.form,
      [e.target.name]: e.target.value
    }})
    console.log(this.state.form);
  }

  seleccionarCanal=async(comentario, id, caso)=>{

    await this.setState({form: comentario, id: id});

    (caso==="Editar")?this.setState({modalEditar: true}):
    this.peticionDelete()

  }

  componentDidMount() {
    this.peticionGet();
  }

  render() {
    return (
      <div className="App">
        <br />
        <button className="btn btn-success" onClick={()=>this.setState({modalInsertar: true})}>Insertar</button>
        <br />
        <br />

     
          
              <h1>Comentarios</h1>
              
             
           
          
            {Object.keys(this.state.data).map(i=>{
              console.log("i"+i);
              return <tr key={i}>
                <p>{this.state.data[i].comentario}</p>
                <p>{this.state.data[i].correo}</p>
    
                
                  <button className="btn btn-primary" onClick={()=>this.seleccionarCanal(this.state.data[i], i, 'Editar')}>Editar</button> 
                  <button className="btn btn-danger" onClick={()=>this.seleccionarCanal(this.state.data[i], i, 'Eliminar')}>Eliminar</button>
                

              </tr>
            })}
          
        


        
      
     
        <div className="form-group">
          <label>Comentario: </label>
          <br />
          <input type="text" className="form-control" name="comentario" onChange={this.handleChange}/>
          <br />
        </div>
      
      
        <button className="btn btn-primary" onClick={()=>this.peticionPost()}>Insertar</button>{"   "}
        <button className="btn btn-danger" onClick={()=>this.setState({modalInsertar: false})}>Cancelar</button>
      
   



   
      
     
        <div className="form-group">
          <label>Comentario: </label>
          <br />
          <input type="text" className="form-control" name="comentario" onChange={this.handleChange} value={this.state.form && this.state.form.comentario}/>
          <br />
        </div>
      
     
        <button className="btn btn-primary" onClick={()=>this.peticionPut()}>Editar</button>
        <button className="btn btn-danger" onClick={()=>this.setState({modalEditar: false})}>Cancelar</button>
      
    
      </div>
    );
  }
}

export default Admins;
