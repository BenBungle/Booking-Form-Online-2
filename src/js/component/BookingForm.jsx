import React, { useState } from 'react';

const BookingForm = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [service, setService] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nDate: ${date}\nTime: ${time}\nService: ${service}`);
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h2>Book an Appointment</h2>
      <div className="form-group">
        <label htmlFor="date">Select a Date:</label>
        <input type="date" id="date" name="date" value={date} onChange={(event) => setDate(event.target.value)} required />
      </div>
      <div className="form-group">
        <label htmlFor="time">Select a Time:</label>
        <input type="time" id="time" name="time" value={time} onChange={(event) => setTime(event.target.value)} required />
      </div>
      <div className="form-group">
        <label htmlFor="service">Select a Service:</label>
        <select id="service" name="service" value={service} onChange={(event) => setService(event.target.value)} required>
          <option value="">Select a Service</option>
          <option value="Haircut">Haircut</option>
          <option value="Coloring">Coloring</option>
          <option value="Styling">Styling</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={name} onChange={(event) => setName(event.target.value)} required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" name="phone" value={phone} onChange={(event) => setPhone(event.target.value)} required />
      </div>
      <button type="submit">Book Now</button>
    </form>
  );
};

export default BookingForm;
