import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

import * as types from '../../types';
import { useUser } from '../../hooks';

import { Loader } from '../../components';

const useStyles = createUseStyles({
  container: {
    padding: '16px',
  },
  title: {},
  list: {
    'list-style': 'none',
    marginTop: 16,
    '& a': {
      'text-decoration': 'none',
    },
  },
  error: {
    marginTop: 16,
    color: 'red',
  },
});

const Details = ({ user }: { user: types.TUser }): ReactElement => {
  const classes = useStyles();
  const { address, name } = user;

  return (
    <ul className={classes.list}>
      <li>Username: {user.username}</li>
      <li>
        Name: {name.firstname} {name.lastname}
      </li>
      <li>
        Address: {address.city}, {address.street}, {address.zipcode}
      </li>
      <li>Phone: {user.phone}</li>
      <li>Email: {user.email}</li>
    </ul>
  );
};

const User = () => {
  const classes = useStyles();

  const { user, loading, error } = useUser();

  return (
    <div className={classes.container}>
      <h4>
        <Link to="/users">&lsaquo;</Link> Details
      </h4>
      <Loader loading={loading}>
        {error ? (
          <div className={classes.error}>{error}</div>
        ) : (
          <Details user={user} />
        )}
      </Loader>
    </div>
  );
};

export default User;
