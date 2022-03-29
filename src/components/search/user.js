import React from 'react';
import {
  Card, Col, Container, Form, Image, Row, Table
} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import UserMap from '../maps/user-map';

const User = () => {
  const userResult = useSelector((state) => state.search.userResult);

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={8}>
          <Card>
            <Card.Header className="text-center" id="profile">
              {userResult.name.title} {userResult.name.first}{' '}
              {userResult.name.last}
            </Card.Header>
            <Card.Body>
              <Form.Group className="mb-3">
                <div className="text-center">
                  <Image src={userResult.picture.large}></Image>
                </div>
              </Form.Group>
              <Form.Group className="mb-3">
                <Table striped bordered hover responsive>
                  <tbody>
                    <tr>
                      <th scope="row">Gender</th>
                      <td>{userResult.gender}</td>
                    </tr>
                    <tr>
                      <th scope="row">First name</th>
                      <td>{userResult.name.first}</td>
                    </tr>
                    <tr>
                      <th scope="row">Last name</th>
                      <td>{userResult.name.last}</td>
                    </tr>
                    <tr>
                      <th scope="row">Email</th>
                      <td>{userResult.email}</td>
                    </tr>
                    <tr>
                      <th scope="row">Phone</th>
                      <td>{userResult.phone}</td>
                    </tr>
                    <tr>
                      <th scope="row">Cell</th>
                      <td>{userResult.cell}</td>
                    </tr>
                    <tr>
                      <th scope="row">Registered date</th>
                      <td>{userResult.registered.date}</td>
                    </tr>
                    <tr>
                      <th scope="row">Registered age</th>
                      <td>{userResult.registered.age}</td>
                    </tr>
                    <tr>
                      <th scope="row">Date of birth</th>
                      <td>{userResult.dob.date}</td>
                    </tr>
                    <tr>
                      <th scope="row">Age</th>
                      <td>{userResult.dob.age}</td>
                    </tr>
                    <tr>
                      <th scope="row"></th>
                      <td></td>
                    </tr>
                  </tbody>
                </Table>
              </Form.Group>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={12}>
          <Card>
            <Card.Header className="text-center">Maps</Card.Header>
            <Card.Body>
              <UserMap user={userResult} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default User;
