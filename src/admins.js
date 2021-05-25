import React, { Component } from "react";



import {firebasedb} from "./index"
import "bootstrap/dist/css/bootstrap.min.css";
// import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";

class Admins extends Component {
  state = {
    data2: [],
    formpop:{
      descripcion: '',
      email: '',
      image: '',
    },
    id2: 0
  };

  peticionGet = () => {
    firebasedb.child("/proyectos/animacion3d").on("value", (descripcion) => {
      if (descripcion.val() !== null) {
        this.setState({ ...this.state.data2, data2: descripcion.val() });
      } else {
        this.setState({ data2: [] });
      }
    });
  };

  peticionPost=()=>{
    firebasedb.child("/proyectos/animacion3d").push(this.state.formpop,
      error=>{
        if(error)console.log(error)
      });
      this.setState({modalInsertar: false});
  }

  peticionPut=()=>{
    firebasedb.child(`/proyectos/animacion3d/${this.state.id2}`).set(
      this.state.formpop,
      error=>{
        if(error)console.log(error)
      });
      this.setState({modalEditar: false});
  }

  peticionDelete=()=>{
    if(window.confirm(`Estás seguro que deseas eliminar el comentario ${this.state.formpop && this.state.formpop.descripcion}?`))
    {
      firebasedb.child(`/proyectos/animacion3d/${this.state.id2}`).remove(
      error=>{
        if(error)console.log(error)
      });
    }
    console.log("id2   " + this.state.id2);
  }

  handleChange=e=>{
    this.setState({formpop:{
      ...this.state.formpop,
      [e.target.name]: e.target.value
    }})
    console.log(this.state.formpop);
  }

  seleccionarCanal=async(descripcion, id2, caso)=>{

    await this.setState({formpop: descripcion, id2: id2});

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
              
             
           
          
            {Object.keys(this.state.data2).map(i=>{
              console.log("i"+i);
              return <div key={i}>
                <p>{this.state.data2[i].descripcion}</p>
                <p>{this.state.data2[i].email}</p>
                <img
                      src={this.state.data2[i].image}
                      alt="image select Gallery"
                    />
                
                  <button className="btn btn-primary" onClick={()=>this.seleccionarCanal(this.state.data2[i], i, 'Editar')}>Editar</button> 
                  <button className="btn btn-danger" onClick={()=>this.seleccionarCanal(this.state.data2[i], i, 'Eliminar')}>Eliminar</button>
                

              </div>
            })}
          
        


        
      
     
        <div className="form-group">
          <label>Comentario: </label>
          <br />
          <input type="text" className="form-control" name="descripcion" onChange={this.handleChange}/>
          <br />
        </div>
      
      
        <button className="btn btn-primary" onClick={()=>this.peticionPost()}>Insertar</button>{"   "}
        <button className="btn btn-danger" onClick={()=>this.setState({modalInsertar: false})}>Cancelar</button>
      
   



   
      
     
        <div className="form-group">
          <label>Comentario: </label>
          <br />
          <input type="text" className="form-control" name="descripcion" onChange={this.handleChange} value={this.state.formpop && this.state.formpop.comentario}/>
          <br />
        </div>
      
     
        <button className="btn btn-primary" onClick={()=>this.peticionPut()}>Editar</button>
        <button className="btn btn-danger" onClick={()=>this.setState({modalEditar: false})}>Cancelar</button>
      
    
      </div>
    );
  }
}

export default Admins;
