
import react, { useState } from "react";
import { Button, Card, Col, Container, Modal, Row } from "react-bootstrap";
import "./CardHeroeStyle.css"
const CardHeroe = (heroeObject, clave) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const API = 'https://superheroes-project-default-rtdb.firebaseio.com/heroes'

  const deleteHeroe = async(id) => {
    const response = await fetch(`${API}/${id}.json`, {
        method: 'DELETE', 
    })
    console.log("claveeeeeeeeee")
    console.log(clave)
    const data = await response.json();
}
  return (
 
      <Col>
         <Card  className="BeerListItem-main-card" style={{ width: "18rem" }} >
      <Card.Img class="cardImage" variant="top" src={heroeObject.heroe.imagen} />
      <Card.Body>
        <Card.Title>{heroeObject.heroe.heroe}</Card.Title>
        <Card.Text>
        <p><span class="bold"> Nombre: </span>{heroeObject.heroe.nombre}</p>
        <p><span class="bold">Edad: </span>{heroeObject.heroe.edad} </p>
        
        </Card.Text>
        <Row>
        <Button variant="light" onClick={handleShow}>Ver más</Button>
        <Button variant="danger" onClick={()=>deleteHeroe(clave)}>Eliminar</Button>
        </Row>
        
      </Card.Body>
    </Card>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header className="modalHeader" closeButton>
          <Modal.Title  > <span class="bold">Detalles </span></Modal.Title>
        </Modal.Header>
        <Modal.Body className="bodyModal" >
        <p> <span class="bold">Heroe:</span> {heroeObject.heroe.heroe}</p>
        <p> <span class="bold">Nombre:</span> {heroeObject.heroe.nombre}</p>
        <p> <span class="bold">Edad: </span>{heroeObject.heroe.edad}</p>
        <p> <span class="bold">Poderes: </span>{heroeObject.heroe.detalles}</p>  
        </Modal.Body>
        <Modal.Footer className="footerModal">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleClose}>
            Editar
          </Button>
        </Modal.Footer>
      </Modal>
    
    </Col>
  );
};

export default CardHeroe;
