import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => (
  <div className='text-center align-middle'>
    <h1>Error 404 : not found.</h1>
    <p>
      Click{' '}
      <Link as={Link} to="/">
        here
      </Link>{' '}
      to return to the homepage
    </p>
  </div>
);

export default Error;
