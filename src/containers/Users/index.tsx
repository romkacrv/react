import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

import { useUsers } from '../../hooks';

import { Loader } from '../../components';
import List from './List';

const useStyles = createUseStyles({
  container: {
    padding: '16px',
  },
  title: {},
  error: {
    marginTop: 16,
    color: 'red',
  },
});

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
