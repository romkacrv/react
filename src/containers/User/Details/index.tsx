import React, { ReactElement } from 'react';
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

export default Details;
