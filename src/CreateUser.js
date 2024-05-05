// src/components/CreateUser.js on the main branch

import React, { useState } from "react";

function CreateUser() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleAddressField = (event) => {
    setAddress(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("User Created:", { username, email, address });
    // Additional validation for username and email
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div>
        <label>Address:</label>
        <input
          type="address"
          name="address"
          value={address}
          onChange={handleAddressField}
        />
      </div>
      <button type="submit">Create User</button>
    </form>
  );
}

export default CreateUser;
