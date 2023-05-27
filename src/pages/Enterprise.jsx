import React from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const Enterprise = () => {
  return (
    <div>
         
         <div>
      <Container className="cont1">
        <Row>
          <Col md={12}>
            <h1 className="text-center h1cont1"><span> Way more </span> than a scheduling link</h1>
            <p className="text-center pcont1">Standardize on the #1 scheduling platform and deliver the power of Calendly across your entire organization</p>
            <Button className="text-center btn1">Contact sales</Button>
          </Col>
        </Row>
      </Container>

      <Container fluid className="cont2">
        <h3 className="text-center h3cont2">Trusted by more than 50,000 of the world's leading organizations</h3>
        <Row className="row1">
          <Col><img src="css/uba.jpg" width="100" height="70" alt="" /></Col>
          <Col><img src="css/drb.png" width="50" height="40" alt="" /></Col>
          <Col><img src="css/sim.png" width="100" height="70" alt="" /></Col>
          <Col><img src="css/ama.jpg" width="100" height="50" alt="" /></Col>
          <Col><img src="css/alii.png" width="100" height="50" alt="" /></Col>
        </Row>
      </Container>

      <Container className="cont3">
        <Row>
          <Col md={4}>
            <Card className="cd" style={{ width: '18rem' }}>
              <Card.Title className="hh">Sales</Card.Title>
              <Card.Img src="css/sales.jpg" height="200" alt="..." />
              <Card.Body>
                <Card.Text>Convert more leads and prospects into meetings and revenue. Easily book demos and customer calls without the back and forth.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="cd" style={{ width: '18rem' }}>
              <Card.Title className="hh">Customer Success</Card.Title>
              <Card.Img src="css/cs.jpg" height="200" alt="..." />
              <Card.Body>
                <Card.Text>Deliver better support interactions and customer consultations. Stay connected with automated reminders and follow-ups.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="cd" style={{ width: '18rem' }}>
              <Card.Title className="hh">Recruiting</Card.Title>
              <Card.Img src="css/rc.jpg" height="200" alt="..." />
              <Card.Body>
                <Card.Text>Fill your candidate pipelines and book more interviews and recruiter screens with easy standardized scheduling.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="cont5">
        <Row>
          <Col md={12}>
            <Button className="btn5">Learn more</Button>
          </Col>
        </Row>
      </Container>
    </div>


    </div>
  )
}

export default Enterprise
