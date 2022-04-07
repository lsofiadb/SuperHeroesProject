import react, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import "./NuevoHeroeStyle.css"
const NuevoHeroe = ({onSubmit}) => {
    const [Heroe, setHeroe] = useState({
        heroe: "",
        edad: "",
        imagen: "",
        nombre: "",
        detalles: "",
      });
    
      const handleChange = (e) => {
        setHeroe({
          ...Heroe,
          [e.target.name]: e.target.value,
        });
      };


  return (
    <div>
      <Container id="main-container" className="d-grid h-100">
      <Form id="sign-in-form" className="text-center p-3 w-100">
        <img className="logo" 
              src="https://ae01.alicdn.com/kf/HTB1Bu3VHpXXXXbMaXXXq6xXFXXXG/Env-o-libre-Justice-League-logo-Marvel-Cartel-HD-HOME-Decor-WALL-ART-PRINT-Personalizada-Papel.jpg_Q90.jpg_.webp" 
            />
        <h2 className="mb-3 fs-3 fw-normal">¡Añade un nuevo heroe!</h2>
        <Form.Group>

        <Form.Label className="label"> <h4>Nombre del heroe</h4> </Form.Label>
          <Form.Control type="text" size="lg" placeholder="Nombre del Heroe" 
           name="heroe"
           value={Heroe.heroe}
           onChange={handleChange}
          className="position-relative" />
        </Form.Group>
        <Form.Group >
        <Form.Label><h4>Nombre real del heroe</h4></Form.Label>
          <Form.Control  type="text" size="lg" placeholder="Nombre real del Heroe" 
          name="nombre"
          value={Heroe.nombre}
          onChange={handleChange}
          className="position-relative" />
        </Form.Group>
        <Form.Group >
        <Form.Label><h4>URL Imagen</h4></Form.Label>
          <Form.Control type="text" size="lg" placeholder="URL de la imagen del heroe" 
          name="imagen"
          value={Heroe.imagen}
          onChange={handleChange}
          className="position-relative" />
        </Form.Group>
        <Form.Group >
        <Form.Label><h4>Edad</h4></Form.Label>
          <Form.Control  type="text" size="lg" placeholder="Edad" 
          
          name="edad"
          value={Heroe.edad}
          onChange={handleChange}
          className="position-relative" />
        </Form.Group>
        <Form.Group >
        <Form.Label><h4>Detalles</h4></Form.Label>
          <Form.Control type="text" size="lg" placeholder="Detalles, superpoderes" 
          
          name="detalles"
          value={Heroe.detalles}
          onChange={handleChange}
          className="position-relative" />
        </Form.Group>
        
        <div className="d-grid">
          <Button variant="success" type="button" size="lg" onClick={() => onSubmit(Heroe)}>Añadir</Button>
        </div>
       
      </Form>
    </Container>
    </div>
  );
};

export default NuevoHeroe;
