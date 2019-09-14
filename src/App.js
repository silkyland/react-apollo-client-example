import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { GET_USERS } from "./client/query/user";
import { Query } from "@apollo/react-components";
import Skeleton from "react-loading-skeleton";

function App() {
  return (
    <Query query={GET_USERS}>
      {({ loading, error, data }) => {
        if (loading) return <Skeleton count={5} />;
        if (error) return <p>{error.message}</p>;
        const { users } = data;
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <ul>
                {users.map(user => (
                  <li key={user.id}>
                    {user.name} || {user.email}
                  </li>
                ))}
              </ul>
            </header>
          </div>
        );
      }}
    </Query>
  );
}

export default App;
