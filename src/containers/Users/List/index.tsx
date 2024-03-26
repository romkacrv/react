import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

import * as types from '../../../types';

const useStyles = createUseStyles({
  list: {
    'list-style': 'none',
    marginTop: 16,
    '& a': {
      'text-decoration': 'none',
    },
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

export default List;
