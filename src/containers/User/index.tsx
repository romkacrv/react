import React, { useCallback, useEffect, useState, ReactElement } from 'react';
import { Link, useParams } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

import * as types from '../../types';
import { fetchUser } from '../../api';

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
});

const Details = ({ user }: { user: types.TUser }): ReactElement => {
  const classes = useStyles();

  const { address = {}, name = {} } = user;

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
  const [user, setUser] = useState<types.TUser>();
  const [loading, setLoading] = useState(true);
  const params = useParams();

  const { id } = params;

  const getUser = useCallback(async () => {
    const data: Awaited<types.TUser> = await fetchUser(id);
    setUser(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <div className={classes.container}>
      <h4>
        <Link to="/users">&lsaquo;</Link> Details
      </h4>
      <Loader loading={loading}>
        <Details user={user} />
      </Loader>
    </div>
  );
};

export default User;
