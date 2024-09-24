import React, { useState } from 'react';
import './ContactForm.css'; // Import the CSS file

const ContactForm = () => {
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
    pinCode: ''
  });

  const [userEmail, setUserEmail] = useState('');

  const handleContactChange = (e) => {
    setContactData({
      ...contactData,
      [e.target.name]: e.target.value
    });
  };

  const handleUserEmailChange = (e) => {
    setUserEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const payload = {
      contact: contactData,   // Contact data as an object
      userEmail: userEmail    // User email as a separate field
    };
    console.log(payload);

    const response = await fetch('http://localhost:5000/api/contacts/create', {  // Backend URL for contact creation
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),  // Sending payload as JSON
    });

    if (response.ok) {
      alert('Contact created successfully!');
    } else {
      alert('Failed to create contact.');
    }
  };

  return (
    <div className="contact-form-container">
      <h2>Create Contact</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={contactData.name} onChange={handleContactChange} required />
        </label>

        <label>
          Email:
          <input type="email" name="email" value={contactData.email} onChange={handleContactChange} required />
        </label>

        <label>
          Phone Number:
          <input type="text" name="phoneNumber" value={contactData.phoneNumber} onChange={handleContactChange} required />
        </label>

        <label>
          Address:
          <input type="text" name="address" value={contactData.address} onChange={handleContactChange} required />
        </label>

        <label>
          Pin Code:
          <input type="text" name="pinCode" value={contactData.pinCode} onChange={handleContactChange} required />
        </label>

        <label>
          User Email:
          <input type="email" name="userEmail" value={userEmail} onChange={handleUserEmailChange} required />
        </label>

        <button type="submit">Create Contact</button>
      </form>
    </div>
  );
};

export default ContactForm;
