import React from 'react';
import { Link } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    padding: '16px',
  },
});

const Main = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Link to="/users">Users</Link>
    </div>
  );
};

export default Main;
