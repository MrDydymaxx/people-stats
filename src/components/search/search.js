import React from 'react';
import { Container } from 'react-bootstrap';
import SearchFilter from './search-filter';
import SearchResult from './search-result';
import './index.scss';

const Search = () => (
  <Container fluid="md">
      {/* We init the filter */}
    <SearchFilter />
    {/* We init the number of users that we will display in the search result page */}
    <SearchResult itemsPerPage={8}/>
  </Container>
);

export default Search;
