import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import "./ContactList.css"; // Import the CSS file

const ContactList = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    if (!email) return; // If email is empty, do nothing

    try {
      const response = await fetch(
        "http://localhost:5000/api/contacts/user-contacts",
        {
          method: "POST", // Use POST method
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userEmail: email }), // Send the email in the request body
        }
      );
      const data = await response.json();
      setUsers(data); // Set fetched data from the response
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };


  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/contacts/delete/${id}`, {
        method: "DELETE", // Use DELETE method
      });
      
      if (response.ok) {
        // If successful, filter out the deleted user from the state
        setUsers(users.filter((user) => user.id !== id));
        setTimeout(()=>{
            navigate("/contact-list");
        } , 2000);
      } else {
        console.error("Failed to delete user");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="container">
      <h1>User List</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            placeholder="Enter email to filter"
            value={email}
            onChange={handleInputChange}
            className="input-field"
          />
        </label>

        <button type="submit">Submit</button>
      </form>

      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id} className="user-item">
            <h2>{user.name}</h2>
            <p>
              Email: <span>{user.email}</span>
            </p>
            <p>
              Phone: <span>{user.phoneNumber}</span>
            </p>
            <p>
              Address: <span>{user.address}</span>
            </p>
            <p>
              Pin Code: <span>{user.pinCode}</span>
            </p>
            <div className="button-group">
              <button onClick={()=>{navigate(`/update-contact/${user.id}`)}}>update</button>
              <button onClick={() => handleDelete(user.id)}>delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
