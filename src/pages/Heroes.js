import react from "react";
import { Row } from "react-bootstrap";
import CardHeroe from "../components/CardHeroe";

const Heroes = (props) => {
  return (
    <div>
        {/* xs--> cantidad de columnas en reponsive
            md--> cantidad de columnas mostradas
            g-5-->centrar las cards
        */}
      <Row xs={1} md={3} className="g-5">
        {
          /* Iterar sobre heroes */
          Object.entries(props.heroes).map(([key, value]) => {
            return <CardHeroe heroe={value} key={key}></CardHeroe>;
          })
        }
      </Row>
    </div>
  );
};

export default Heroes;
