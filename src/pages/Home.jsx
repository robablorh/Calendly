import React from 'react'
import{Container , Col, Row , Form , Button} from 'react-bootstrap'
import pic1 from '../images/p1.jpg'
import c from '../images/c.png'
import db from '../images/db.png'
import lb from '../images/lb.png'
import az from '../images/az.png'
import ali from '../images/ali.png'

const Home = () => {

  return (
    <div>

    <Container>
        <Row>
          <Col md={4} className="col1">
            <p className="black"> Easy Scheduling <span>ahead</span> </p>

            <p className="para">Calendy is your hub for scheduling meetings professionally and efficiently, eliminating the hassle of back-and-forth so you can get back to work</p>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Control type="text" placeholder="Enter your Email" />
              <Button variant="outline-secondary" id="button-addon2" className="btn" >Sign Up '</Button>
            </Form.Group>
            <p className="pcont1">Create our free account. No credit card required</p>
          </Col>
          <Col md={8}>
            <img src={pic1} alt=" pic"  className='pict1'/>
          </Col>
        </Row>
      </Container>
      <br /><br />

      <Container className="container2">
        <h3 className="hcont2">Simplified scheduling for more than <span>10,000,000</span> users worldwide</h3>
        <Row className="row1">
          <Col> <img src={c} width="100" height="70" alt="" /></Col>
          <Col> <img src={db} width="50" height="40" alt="" /></Col>
          <Col> <img src={lb} width="100" height="70" alt="" /></Col>
          <Col> <img src={az} width="100" height="50" alt="" /></Col>
          <Col> <img src={ali} width="100" height="50" alt="" /></Col>
        </Row>
      </Container>

      <Container className="cont3">
        <Row>
          <Col className="coll">
            <ul>
              <li className="li1">1.</li>
              <li className="li2">Creat simple rules</li>
            </ul>
            <p className="colp">let calendly know your availability preferences and it will do the work for you</p>
          </Col>

          <Col className="coll">
            <ul>
              <li className="li1">2.</li>
              <li className="li2">Share your link</li>
            </ul>
            <p className="colp">send guest your calendly link or embed it on your website</p>
          </Col>

          <Col className="coll">
            <ul>
              <li className="li1">3.</li>
              <li className="li2">Get linked</li>
            </ul>
            <p className="colp">they pick a time and the event is added to your calendar</p>
          </Col>
        </Row>
      </Container>
    </div>
  );

  
}

export default Home

