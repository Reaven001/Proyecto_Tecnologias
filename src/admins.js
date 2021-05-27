import React, { Component } from "react";


import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {firebasedb} from "./index"
import Modal from "react-bootstrap/Modal";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/tabla.css";
// import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";

class Admins extends Component {
  state = {
    data: [],
    modalInsertar: false,
    modalEditar: false,
    form:{
      email: '',
    },
    id: 0
  };

  peticionGet = () => {
    firebasedb.child("Administra").on("value", (email) => {
      if (email.val() !== null) {
        this.setState({ ...this.state.data, data: email.val() });
      } else {
        this.setState({ data: [] });
      }
    });
  };

  peticionPost=()=>{
    firebasedb.child("Administra").push(this.state.form,
      error=>{
        if(error)console.log(error)
      });
      this.setState({modalInsertar: false});
  }

  peticionPut=()=>{
    firebasedb.child(`Administra/${this.state.id}`).set(
      this.state.form,
      error=>{
        if(error)console.log(error)
      });
      this.setState({modalEditar: false});
  }

  peticionDelete=()=>{
    if(window.confirm(`Estás seguro que deseas eliminar el canal ${this.state.form && this.state.form.email}?`))
    {
      firebasedb.child(`Administra/${this.state.id}`).remove(
      error=>{
        if(error)console.log(error)
      });
    }
  }

  handleChange=e=>{
    this.setState({form:{
      ...this.state.form,
      [e.target.name]: e.target.value
    }})
    console.log(this.state.form);
  }

  seleccionarCanal=async(email, id, caso)=>{

    await this.setState({form: email, id: id});

    (caso==="Editar")?this.setState({modalEditar: true}):
    this.peticionDelete()

  }

  componentDidMount() {
    this.peticionGet();
  }

  render() {
    return (
      <div className="Admins">

          <Row className="justify-content-center">
            <Col lg={6} sm={10} className="align-self-center">
        <br />
        <table className="table table-bordered ">
          <thead>
            <tr>
              <th>Administradores</th>

            </tr>
          </thead>
          <tbody>
            {Object.keys(this.state.data).map(i=>{
              // console.log(i);
              return <tr key={i}>
                <td>{this.state.data[i].email}</td>
                
                <td>
                  <button className="btn btn-primary" onClick={()=>this.seleccionarCanal(this.state.data[i], i, 'Editar')}>Editar</button> {"   "}
                  <button className="btn btn-danger" onClick={()=>this.seleccionarCanal(this.state.data[i], i, 'Eliminar')}>Eliminar</button>
                </td>

              </tr>
            })}
            
          </tbody>
        </table>
            </Col>
            </Row>
            {/* <img src="https://i.ytimg.com/vi/ydo-Mf_1vUc/hqdefault.jpg"></img> */}

            <Row className="justify-content-center">
            <Col lg={2} sm={12} className="align-self-center">
            <br />
            
        <button className="btn btn-secondary" onClick={()=>this.setState({modalInsertar: true})}>Agregar un nuevo administrador</button>
        <br />
        <br />
            </Col>
        </Row>


            <Row className="justify-content-center">
            <Col lg={2} sm={12} className="align-self-center">
        <Modal show={this.state.modalInsertar}>
    
        <div className="form-group">
          <label>Nuevo admin: </label>
          <br />
          <input type="text" className="form-control" name="email" onChange={this.handleChange}/>
          <br />
        </div>
     
        <button className="btn btn-primary" onClick={()=>this.peticionPost()}>Insertar</button>{"   "}
        <button className="btn btn-danger" onClick={()=>this.setState({modalInsertar: false})}>Cancelar</button>
      
    </Modal>
         </Col>
            </Row>


            <Row className="justify-content-center">
            <Col lg={2} sm={12} className="align-self-center">
    <Modal show={this.state.modalEditar}>
     
     
        <div className="form-group">
          <label>Canal: </label>
          <br />
          <input type="text" className="form-control" name="email" onChange={this.handleChange} value={this.state.form.email}/>
          <br />
        </div>
     
        <button className="btn btn-primary" onClick={()=>this.peticionPut()}>Editar</button>{"   "}
        <button className="btn btn-danger" onClick={()=>this.setState({modalEditar: false})}>Cancelar</button>
     
    </Modal>
    </Col>
            </Row>
      </div>
    );
  }
}

export default Admins;
