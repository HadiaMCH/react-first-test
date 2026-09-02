import React from 'react'
import InfoEcole from './InfoEcole'
import { Row,Col } from 'react-bootstrap'
import MenuFooter from './MenuFooter'
export default function Footer() {
  return (
    <div>
        <Row>
            <Col xs={8} ClassName="border  border-dark p-2">
                <MenuFooter />
            </Col>
            <Col xs={4} ClassName="border  border-dark p-2">
                <InfoEcole />
            </Col>
        </Row>
    </div>
  )
}