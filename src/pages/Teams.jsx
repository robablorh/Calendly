import React from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import  h8 from '../images/h8.jpg'

const Teams = () => {
  return (
     <div>

        
    
      <Container className="cont1">
        <Row>
          <Col>
            <h1 className="hcont1"><span>Power up </span> your teams</h1>
            <p className="pcont1">Calendly gives you power over team scheduling with a standardized scalable process. It's secure, easy to manage, and integrates with your team's favorite tools, so you can get everyone working as efficiently and effectively as possible</p>
            <ul>
              <li><Button className="blue">Start for free</Button></li>
              <li><Button className="white">Contact sales</Button></li>
            </ul>
          </Col>
          <Col>
            <img src={h8} className="img-fluid" alt="" />
          </Col>
        </Row>
      </Container>

      <Container className="cont2">
        <Row>
          <Col md={12}>
            <h1 className="text-center hcont2">Streamline tasks extend team reach</h1>
          </Col>
        </Row>
      </Container>

      <Container className="cont3">
        <Row>
          <Col md={6}>
            <img src="css/h7.jpg" className="img-fluid" alt="" />
          </Col>
          <Col md={6}>
            <p className="pcont">Automated Assignment</p>
            <h2 className="hcont3">Control how your team gets booked</h2>
            <p className="p2cont3">With Calendly, you can offer sessions that are a few minutes or a few hours for one invitee or a group. Automated round-robin, first-available, or geography-based assignments let you easily divvy up meetings in a way that works for your team members</p>
          </Col>
        </Row>
      </Container>

      <Container className="cont6">
        <div>
          <p className="text-center pcont6">Solutions</p>
          <h1 className="text-center hcont6">The right Calendly for the work you do</h1>
        </div>
      </Container>

      <Container className="cont4">
        <Row>
          <Col md={3}>
            <Card style={{ width: '15rem' }}>
              <Card.Img src="css/h5.jpg" className="card-img-top" alt="..." />
              <Card.Body className="c4">
                <Card.Text>Sales</Card.Text>
                <p className="p4">Get to your leads faster</p>
                <Button href="#">Learn more &gt;</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card style={{ width: '15rem' }}>
              <Card.Img src="css/h6.jpg" className="card-img-top" alt="..." />
              <Card.Body className="c4">
                <Card.Text>Recruiting</Card.Text>
                <p className="p4">Less emailing, more closing</p>
                <Button href="#">Learn more &gt;</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card style={{ width: '15rem' }}>
              <Card.Img src="css/c2.jpg" className="card-img-top" alt="..." />
              <Card.Body className="c4">
                <Card.Text>Customer Success</Card.Text>
                <p>Contact with customers when it matters</p>
                <Button href="#">Learn more &gt;</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card style={{ width: '15rem' }}>
              <Card.Img src="css/c1.jpg" className="card-img-top" alt="..." />
              <Card.Body className="c4">
                <Card.Text>Education</Card.Text>
                <p className="p4">Boost student success</p>
                <Button href="#">Learn more &gt;</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      </div>

          
                     
                   
    

    
  )
}

export default Teams
