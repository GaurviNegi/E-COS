import React, { useState } from 'react';
import './ContactForm.css'; // Import the CSS file
import { useNavigate , useParams} from 'react-router-dom';

const UpdateForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
    pinCode: ''
  });

  const handleContactChange = (e) => {
    setContactData({
      ...contactData,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    
   
    console.log(contactData);

    const response = await fetch(`http://localhost:5000/api/contacts/update-contact/${id}`, {  // Backend URL for contact creation
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData),  // Sending payload as JSON
    });

    if (response.ok) {
      alert('Contact updated successfully!');
      setTimeout(()=>{
          navigate("/contact-list");
      },2000)
    } else {
      alert('Failed to update contact.');
    }
  };

  return (
    <div className="contact-form-container">
      <h2>Update Contact</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Updated Name:
          <input type="text" name="name" value={contactData.name} onChange={handleContactChange} required />
        </label>

        <label>
          Updated Email:
          <input type="email" name="email" value={contactData.email} onChange={handleContactChange} required />
        </label>

        <label>
          Updated Phone Number:
          <input type="text" name="phoneNumber" value={contactData.phoneNumber} onChange={handleContactChange} required />
        </label>

        <label>
          Updated Address:
          <input type="text" name="address" value={contactData.address} onChange={handleContactChange} required />
        </label>

        <label>
          Updated Pin Code:
          <input type="text" name="pinCode" value={contactData.pinCode} onChange={handleContactChange} required />
        </label>

       

        <button type="submit">Update Contact</button>
      </form>
    </div>
  );
};

export default UpdateForm;