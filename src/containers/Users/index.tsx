import React, { useState, useCallback, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

const fetchUsers = async (): Promise<[]> => {
  return await fetch("https://fakestoreapi.com/users").then((res) =>
    res.json()
  );
};

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUsers = useCallback(async () => {
    const data = await fetchUsers();
    setUsers(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const renderUsers = () => {
    return (
      <ul>
        {users.map((item) => (
          <li key={`users-${item.id}`}>
            <Link to={`/users/${item.id}`}>{item.username}</Link>
          </li>
        ))}
      </ul>
    );
  };

  const render = loading ? <div>...loading</div> : renderUsers();

  return (
    <div>
      <h3>Users</h3>
      <Link to="/">Back</Link>
      {render}
    </div>
  );
};

export default Users;
