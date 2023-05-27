import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';

const Individual = () => {
  return (
    <div>
    <Container className="cont1">
      <Row>
        <Col md={6}>
          <h1 className="hcont">The genius way to work <span>better</span></h1>
          <p className="pcont1">Calendy makes it easy to work smarter when you are working solo meetings sessions and appointments become more efficient ways to achieve Success and accomplish goals.</p>
          <Button className="btn1">Sign Up for free</Button>
        </Col>
        <Col md={6}>
          <img src="css/h1.jpg" className="img-fluid" alt="" />
        </Col>
      </Row>
    </Container>

    <Container className="cont2">
      <Row>
        <Col md={6}>
          <img src="css/h2.jpg" className="img-fluid" alt="" />
        </Col>
        <Col md={6}>
          <p className="pcont"> Acurate calendar </p>
          <h1 className="hcont">Book up efficiently</h1>
          <p className="p2cont2">When invites select a meeting slot from your schedule, they only see the times you are available and only the length and type of meeting you want to have. Your schedule fills up efficiently and everyone avoids excess email exchanges.</p>
        </Col>
      </Row>
    </Container>

    <Container className="cont3">
      <Row>
        <Col md={6}>
          <p className="pcont">Automates notification and follow-ups</p>
          <h1 className="hcont">Work like you have a personal assistant</h1>
          <p className="p2cont3">Because Calendy automates administrative tasks like sending reminder emails and follow-ups, you can focus on your work that builds your business and brings customers back for more.</p>
        </Col>
        <Col md={6}>
          <img src="css/h3.jpg" className="img-fluid" alt="" />
        </Col>
      </Row>
    </Container>

    <Container className="cont4">
      <Row>
        <Col md={6}>
          <h1 className="c">Find just-right plans for individuals and small teams</h1>
          <Button className="btn2">See your plans</Button>
        </Col>
        <Col md={6} className="img-fluid"></Col>
      </Row>
    </Container>
  </div>

  )
    
}

export default Individual
