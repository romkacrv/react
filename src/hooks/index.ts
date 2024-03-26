import { useContext, useEffect, useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';

import * as context from '../context';
import * as types from '../types';

import { fetchUsers, fetchUser } from '../api';

const useModal = () => {
  return useContext(context.ModalContext);
};

const useUsers = () => {
  const [users, setUsers] = useState<types.TUsers>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const getUsers = useCallback(async () => {
    try {
      const data: Awaited<types.TUsers> = await fetchUsers();
      setLoading(false);
      setUsers(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return {
    users,
    loading,
    error,
  };
};

const useUser = () => {
  const [user, setUser] = useState<types.TUser>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const params = useParams();

  const { id } = params;

  const getUser = useCallback(async () => {
    try {
      const data: Awaited<types.TUser> = await fetchUser(id);
      setUser(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getUser();
  }, [getUser]);

  return {
    user,
    loading,
    error,
  };
};

export { useModal, useUsers, useUser };
