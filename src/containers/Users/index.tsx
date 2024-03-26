import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

import * as types from '../../types';
import { useUsers } from '../../hooks';

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

const List = ({ users }: { users: types.TUsers }): ReactElement => {
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

const Users = (): ReactElement => {
  const classes = useStyles();
  const { users, loading, error } = useUsers();

  return (
    <div className={classes.container}>
      <h4 className={classes.title}>
        <Link to="/">&lsaquo;</Link> Users
      </h4>
      <Loader loading={loading}>
        {error ? (
          <div className={classes.error}>{error}</div>
        ) : (
          <List users={users} />
        )}
      </Loader>
    </div>
  );
};

export default Users;
