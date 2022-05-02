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
            <Card.Header className="text-center bg-dark text-light" id="profile">
              {userResult.name.title} {userResult.name.first}{' '}
              {userResult.name.last}
            </Card.Header>
            <Card.Body className='bg-dark text-light'>
              <Form.Group className="mb-3">
                <div className="text-center">
                  <Image src={userResult.picture.large}></Image>
                </div>
              </Form.Group>
              <Form.Group className="mb-3 bg-dark text-light">
                <Table striped bordered hover responsive>
                  <tbody>
                    <tr>
                      <th scope="row" className='text-light'>Gender</th>
                      <td className='text-light'>{userResult.gender}</td>
                    </tr>
                    <tr>
                      <th scope="row" className='text-light'>First name</th>
                      <td className='text-light'>{userResult.name.first}</td>
                    </tr>
                    <tr>
                      <th scope="row" className='text-light'>Last name</th>
                      <td className='text-light'>{userResult.name.last}</td>
                    </tr>
                    <tr>
                      <th scope="row" className='text-light'>Email</th>
                      <td className='text-light'>{userResult.email}</td>
                    </tr>
                    <tr>
                      <th scope="row" className='text-light'>Phone</th>
                      <td className='text-light'>{userResult.phone}</td>
                    </tr>
                    <tr>
                      <th scope="row" className='text-light'>Cell</th>
                      <td className='text-light'>{userResult.cell}</td>
                    </tr>
                    <tr>
                      <th scope="row" className='text-light'>Registered date</th>
                      <td className='text-light'>{userResult.registered.date}</td>
                    </tr>
                    <tr>
                      <th scope="row" className='text-light'>Registered age</th>
                      <td className='text-light'>{userResult.registered.age}</td>
                    </tr>
                    <tr>
                      <th scope="row" className='text-light'>Date of birth</th>
                      <td className='text-light'>{userResult.dob.date}</td>
                    </tr>
                    <tr>
                      <th scope="row" className='text-light'>Age</th>
                      <td className='text-light'>{userResult.dob.age}</td>
                    </tr>
                  </tbody>
                </Table>
              </Form.Group>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-3 mb-5">
        <Col md={12}>
          <Card>
            <Card.Header className="text-center bg-dark text-light">World map</Card.Header>
            <Card.Body className='bg-dark text-light'>
              <UserMap user={userResult} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default User;
