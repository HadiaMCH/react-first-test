import React from 'react'
import { Row, Col } from 'react-bootstrap';

import Menu from './Menu';
import ImageCegep from './ImageCegep';

export default function NavBar() {
  return (
    <Row
          style={{
            border: "1px solid black",
            padding: "10px",
            marginBottom: "10px"
          }}
        >

          <Col
            xs={8}
            style={{
              border: "1px solid black",
              padding: "10px"
            }}
          >
            <ImageCegep />
          </Col>

          <Col
            xs={4}
            style={{
              border: "1px solid black",
              padding: "10px"
            }}
          >
            <Menu />
          </Col>

        </Row>
  )
}
