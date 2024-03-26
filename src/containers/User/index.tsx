import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

import { useUser } from '../../hooks';

import { Loader } from '../../components';
import Details from './Details';

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

const User = (): ReactElement => {
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
