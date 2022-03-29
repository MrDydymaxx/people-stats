import React from 'react';
import {
  Card, Col, Container, Row
} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import HomeMap from '../maps/home-map';
import Gender from '../stats/gender';
import Country from '../stats/country';
// import CommonNavbar from './common/navbar';

const Accueil = () => {
  // const userNumber = useSelector((state) => state.stats.userNumber);
  const usersMaps = useSelector((state) => state.stats.usersMaps);
  const usersNumber = useSelector((state) => state.stats.userNumber);
  return (
    <Container className="mt-3" fluid>
      <Row className="mt-3">
        <Col md={12}>
          <Card>
            <Card.Header className="text-center">Number of registered users</Card.Header>
            <Card.Body className='text-center'>
              {usersNumber}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={6}>
          <Card>
            <Card.Header className="text-center">Gender</Card.Header>
            <Card.Body>
              <Gender></Gender>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card>
            <Card.Header className="text-center">Country</Card.Header>
            <Card.Body>
              <Country></Country>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={12}>
          <Card>
            <Card.Header className="text-center">Maps</Card.Header>
            <Card.Body>
              <HomeMap users={usersMaps} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Accueil;
