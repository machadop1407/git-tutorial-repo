// src/components/CreateUser.js on the adding-age-field branch

import React, { useState } from "react";

function CreateUser() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    age: "",
    address: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddressField = (event) => {
    setAddress(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("User Created:", user);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={user.age}
          onChange={handleChange}
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
