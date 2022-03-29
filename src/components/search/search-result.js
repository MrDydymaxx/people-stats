import React, { useEffect, useState } from 'react';
import {
  Card, Col, Container, Row, Button, ListGroup
} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

const Items = ({ currentItems }) => (
  <>
    {currentItems
      && currentItems.map((item) => (
        <Col key={item.login.username} sm={3} className="mt-3">
          <Card className='bg-dark text-light'>
            <Card.Img variant="top" src={item.picture.large} />
            <Card.Body class='bg-dark'>
              <Card.Title className="text-center">
                {item.name.title} {item.name.first} {item.name.last}
              </Card.Title>
            </Card.Body>
            <ListGroup className='bg-dark text-light'>
              <ListGroup.Item className='bg-dark text-light'>
                <b>Gender :</b> {item.gender}
              </ListGroup.Item>
              <ListGroup.Item className='bg-dark text-light'>
                <b>Email :</b> <br />
                {item.email}
              </ListGroup.Item>
              <ListGroup.Item className='bg-dark text-light'>
                <b>Phone :</b> {item.phone}
              </ListGroup.Item>
              <ListGroup.Item className='bg-dark text-light'>
                <b>Cell : </b>
                {item.cell}
              </ListGroup.Item>
            </ListGroup>
            <Card.Footer className="d-grid gap-2 text-center bg-dark text-light">
              <Link to={`/user/${item.login.username}`}>
                <Button className="cardsButton bg-dark">Show</Button>
              </Link>
            </Card.Footer>
          </Card>
        </Col>
      ))}
  </>
);
const SearchResult = ({ itemsPerPage }) => {
  // We init our redux dispatcher
  const dispatch = useDispatch();
  // We init all the users from the database
  const allUsers = useSelector((state) => state.search.users);
  // We init all the users when filter is applied
  const usersFilter = useSelector((state) => state.search.usersFilter);
  // By default userFilter get all the users if filter is not used
  let userFilter = allUsers;
  const filter = useSelector((state) => state.search.filter);
  const initialPage = useSelector((state) => state.search.initialPage);

  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);

  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const itemOffset = useSelector((state) => state.search.itemOffSet);

  // We check if filter is applied by the user
  if (usersFilter.length) {
    userFilter = usersFilter;
  }

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    // On met ici à jour la liste des utilisateurs à afficher à l'écran
    setCurrentItems(userFilter.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(userFilter.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, filter, initialPage, userFilter]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % userFilter.length;
    // Here we update the list of users to be displayed on the screen
    dispatch({
      type: 'itemOffSet/update',
      itemOffSet: newOffset
    });
    // The current page is updated here
    dispatch({
      type: 'initialPage/update',
      initialPage: event.selected
    });
  };
  // Then we return the users and the pagination to make the web page more fast
  return (
    <Container fluid>
      <Row>
        <Col md={4}></Col>
        <Col md={6} className="mt-4">
          <ReactPaginate
            nextLabel="Next >"
            onPageChange={handlePageClick}
            forcePage={initialPage}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="< Previous"
            pageClassName="page-item bg-dark text-light"
            pageLinkClassName="page-link bg-dark text-light"
            previousClassName="page-item bg-dark text-light"
            previousLinkClassName="page-link bg-dark text-light"
            nextClassName="page-item bg-dark text-light"
            nextLinkClassName="page-link bg-dark text-light"
            breakLabel="..."
            breakClassName="page-item bg-dark text-light"
            breakLinkClassName="page-link bg-dark text-light"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
          />
        </Col>
        <Col md={2}></Col>
      </Row>
      <Row>
        <Items currentItems={currentItems} />
      </Row>
      <Row>
        <Col md={4}></Col>
        <Col md={6} className="mt-4">
          <ReactPaginate
            nextLabel="Next >"
            onPageChange={handlePageClick}
            forcePage={initialPage}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="< Previous"
            pageClassName="page-item bg-dark text-light"
            pageLinkClassName="page-link bg-dark text-light"
            previousClassName="page-item bg-dark text-light"
            previousLinkClassName="page-link bg-dark text-light"
            nextClassName="page-item bg-dark text-light"
            nextLinkClassName="page-link bg-dark text-light"
            breakLabel="..."
            breakClassName="page-item bg-dark text-light"
            breakLinkClassName="page-link bg-dark text-light"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
          />
        </Col>
        <Col md={2}></Col>
      </Row>
    </Container>
  );
};

export default SearchResult;
