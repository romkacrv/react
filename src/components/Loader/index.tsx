import React, { ReactElement } from 'react';
import { createUseStyles } from 'react-jss';

type TLoader = {
  children: ReactElement;
  loading: boolean;
};

const useStyles = createUseStyles({
  container: {
    padding: '16px 0',
  },
});

const Loader = ({ loading, children }: TLoader): ReactElement => {
  const classes = useStyles();

  return loading ? (
    <div className={classes.container}>...loading</div>
  ) : (
    children
  );
};

export default Loader;
