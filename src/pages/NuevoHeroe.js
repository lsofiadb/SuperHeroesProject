import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import "./NuevoHeroeStyle.css";

const NuevoHeroe = ({ onSubmit }) => {
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

  const alerta = () => {
    Swal.fire({
      title: "Heroe creado!",
      icon: "success",
      button: "Aww yiss!",
    });
  };
  return (
    <div>
      <Container id="main-container" className="d-grid h-100">
        <Form id="sign-in-form" className="text-center p-3 w-100">
          <img
            className="logo"
            src="https://ae01.alicdn.com/kf/HTB1Bu3VHpXXXXbMaXXXq6xXFXXXG/Env-o-libre-Justice-League-logo-Marvel-Cartel-HD-HOME-Decor-WALL-ART-PRINT-Personalizada-Papel.jpg_Q90.jpg_.webp"
          />
          <p className="mb-3 fs-3 fw-normal">Sign in</p>
          <Form.Group className="formGroup">
            <Col>
              <Form.Control
                type="text"
                size="lg"
                placeholder="Nombre del Heroe"
                name="heroe"
                value={Heroe.heroe}
                onChange={handleChange}
                className="position-relative"
              />
            </Col>
          </Form.Group>

          <Form.Group className="formGroup">
            <Form.Control
              type="text"
              size="lg"
              placeholder="Nombre real del Heroe"
              name="nombre"
              value={Heroe.nombre}
              onChange={handleChange}
              className="position-relative"
            />
          </Form.Group>

          <Form.Group className="formGroup">
            <Form.Control
              type="text"
              size="lg"
              placeholder="URL de la imagen del heroe"
              name="imagen"
              value={Heroe.imagen}
              onChange={handleChange}
              className="position-relative"
            />
          </Form.Group>

          <Form.Group className="formGroup">
            <Form.Control
              type="text"
              size="lg"
              placeholder="Edad"
              name="edad"
              value={Heroe.edad}
              onChange={handleChange}
              className="position-relative"
            />
          </Form.Group>

          <Form.Group className="formGroup">
            <Form.Control
              type="text"
              size="lg"
              placeholder="Detalles, superpoderes"
              name="detalles"
              value={Heroe.detalles}
              onChange={handleChange}
              className="position-relative"
            />
          </Form.Group>

          <div className="Row">
            <Button
              variant="secondary"
              type="button"
              size="lg"
              onClick={() => {
                onSubmit(Heroe);
                alerta();
              }}
            >
              Crear
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default NuevoHeroe;
