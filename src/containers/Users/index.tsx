import React, { useState, useCallback, useEffect, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

import * as types from '../../types';
import { fetchUsers } from '../../api';

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

const List = ({ users }: { users: [types.TUser] }): ReactElement => {
  const classes = useStyles();

  return (
    <ul className={classes.list}>
      {users.map((item) => (
        <li key={`users-${item.id}`}>
          <Link to={`/users/${item.id}`}>{item.username}</Link>
        </li>
      ))}
    </ul>
  );
};

const Users = () => {
  const classes = useStyles();
  const [users, setUsers] = useState<[types.TUser]>();
  const [loading, setLoading] = useState(true);

  const getUsers = useCallback(async () => {
    const data: Awaited<[types.TUser]> = await fetchUsers();
    setUsers(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <div className={classes.container}>
      <h4 className={classes.title}>
        <Link to="/">&lsaquo;</Link> Users
      </h4>
      <Loader loading={loading}>
        <List users={users} />
      </Loader>
    </div>
  );
};

export default Users;
