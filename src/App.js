import './App.css';
import { Row, Container, Col } from 'react-bootstrap';

import NavBar from './components/NavBar';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Contenu from './components/Contenu';
import ImageCegep from './components/ImageCegep';

function App() {
  return (
    <div>
      <Container style={{ marginTop: "20px" }}>

        <Row
          style={{
            border: "1px solid black",
            padding: "10px",
            marginBottom: "10px"
          }}
        >
          <NavBar />
        </Row>


        <Row
          style={{
            border: "1px solid black",
            padding: "10px",
            marginBottom: "10px"
          }}
        >
          <Contenu />
        </Row>


        <Row
          style={{
            border: "1px solid black",
            padding: "10px",
            marginBottom: "10px"
          }}
        >
          <Footer />
        </Row>

      </Container>
    </div>
  );
}

export default App;