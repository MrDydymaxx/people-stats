import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

const SearchFilter = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.search.users);

  function onSubmit(data) {
    let users = allUsers;
    // We update the filter data
    dispatch({
      type: 'data/update',
      filter: data
    });

    /* By default filter value are :
    gender: 'Genre',
    city: '', state: '',
    nameFirst: '',
    nameLast: '' */

    // We check the gender input
    if (data.gender !== 'Genre') {
      users = users.filter((v) => v.gender === data.gender);
    }

    // We check the city input
    if (data.city !== '') {
      users = users.filter((v) => v.location.city === data.city);
    }

    // We check the state input
    if (data.state !== '') {
      users = users.filter((v) => v.location.state === data.state);
    }

    // We check the first name input
    if (data.nameFirst !== '') {
      users = users.filter((v) => v.name.first === data.nameFirst);
    }

    // We check the last name input
    if (data.nameLast !== '') {
      users = users.filter((v) => v.name.last === data.nameLast);
    }
    // Reset the current page
    dispatch({
      type: 'initialPage/update',
      initialPage: 0
    });
    // The minimum data scale is reset
    dispatch({
      type: 'itemOffSet/update',
      itemOffSet: 0
    });
    // We send the users based on filter if the form is submit
    dispatch({
      type: 'usersFilter/update',
      usersFilter: users
    });
  }
  // We return here the form that we will call inside search.js
  return (<div className='d-flex justify-content-center'>
            <Form className="d-flex mt-5" onSubmit={handleSubmit(onSubmit)}>
                <Form.Select {...register('gender')} aria-label="Default select example">
                    <option value='Genre'>Gender</option>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                </Form.Select>
                <Form.Control type="text" placeholder='City' {...register('city')}/>
                <Form.Control type="text" placeholder='State' {...register('state')} />
                <Form.Control type="text" placeholder='first name' {...register('nameFirst')} />
                <Form.Control type="text" placeholder='last name' {...register('nameLast')}/>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>);
};

export default SearchFilter;
