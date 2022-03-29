import React from 'react';
import {
  Card, Col, Container, Row
} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import HomeMap from '../maps/home-map';
import Gender from '../stats/gender';
import Country from '../stats/country';
import './index.scss';
// import CommonNavbar from './common/navbar';

const Accueil = () => {
  // const userNumber = useSelector((state) => state.stats.userNumber);
  const usersMaps = useSelector((state) => state.stats.usersMaps);
  const usersNumber = useSelector((state) => state.stats.userNumber);
  return (
    <Container className="mt-3 bg-secondary" fluid>
      <Row className="mt-3">
        <Col md={12}>
          <Card>
            <Card.Header className="text-center bg-dark text-light">Number of registered users</Card.Header>
            <Card.Body className='text-center bg-secondary text-light'>
              {usersNumber}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={6}>
          <Card>
            <Card.Header className="text-center bg-dark text-light">Gender</Card.Header>
            <Card.Body class="bg-dark">
              <Gender></Gender>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card>
            <Card.Header className="text-center bg-dark text-light">Country</Card.Header>
            <Card.Body class="bg-dark">
              <Country></Country>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-3 mb-5">
        <Col md={12}>
          <Card>
            <Card.Header className="text-center bg-dark text-light">Maps</Card.Header>
            <Card.Body class="bg-dark">
              <HomeMap users={usersMaps} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Accueil;
