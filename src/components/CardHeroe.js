
import react, { useState } from "react";
import { Button, Card, Col, Container, Modal, Row } from "react-bootstrap";
import "./CardHeroeStyle.css"
const CardHeroe = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
 
      <Col>
         <Card  className="BeerListItem-main-card" style={{ width: "18rem" }} >
      <Card.Img class="cardImage" variant="top" src={props.heroe.imagen} />
      <Card.Body>
        <Card.Title>{props.heroe.heroe}</Card.Title>
        <Card.Text>
        <p><span class="bold"> Nombre: </span>{props.heroe.nombre}</p>
        <p><span class="bold">Edad: </span>{props.heroe.edad} </p>
        
        </Card.Text>
        <Row>
        <Button variant="light" onClick={handleShow}>Ver más</Button>
        <Button variant="danger">Eliminar</Button>
        </Row>
        
      </Card.Body>
    </Card>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header className="modalHeader" closeButton>
          <Modal.Title  > <span class="bold">Detalles </span></Modal.Title>
        </Modal.Header>
        <Modal.Body className="bodyModal" >
        <p> <span class="bold">Heroe:</span> {props.heroe.heroe}</p>
        <p> <span class="bold">Nombre:</span> {props.heroe.nombre}</p>
        <p> <span class="bold">Edad: </span>{props.heroe.edad}</p>
        <p> <span class="bold">Poderes: </span>{props.heroe.detalles}</p>  
        </Modal.Body>
        <Modal.Footer className="footerModal">
          <Button variant="warning" onClick={handleClose}>
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
