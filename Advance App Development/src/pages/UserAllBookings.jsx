import React from 'react';
import './AllBookings.css';
import { useNavigate } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import Nav from './Nav';

function AllBookings() {
  // Sample data for bookings
  const bookings = [
    {
      bookingId: 1,
      organizerId: 101,
      userName: 'John Doe',
      submissionDate: '2024-03-20',
      eventDate: '2024-03-25',
      description: 'event1',
      bookingStatus: 'Pending',
      eventType: 'Event A',
      headCount: 5,
      amount: '$200',
    },
    {
      bookingId: 2,
      organizerId: 102,
      userName: 'Alice Smith',
      submissionDate: '2024-03-22',
      eventDate: '2024-03-28',
      description: 'event2',
      bookingStatus: 'Confirmed',
      eventType: 'Event B',
      headCount: 3,
      amount: '$150',
    },
    // Add more bookings as needed
  ];

  const handleDelete = (bookingId) => {
    // Logic to delete booking with bookingId
    // console.log(Deleting booking with ID ${bookingId});
  };
  const nav = useNavigate();

  const handleMakePayment = (bookingId) => {
    // Logic to make payment for booking with bookingId
    // console.log(Making payment for booking with ID ${bookingId});
    nav("/payment")
  };

  return (
    <>
    <Nav />
      <div className="t-container">
        <div className='header'>
          <h2>My Bookings</h2>
        </div>

        <table className="booking-table">
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>Organizer ID</th>
              <th>User Name</th>
              <th>Submission Date</th>
              <th>Event Date</th>
              <th>Description</th>
              <th>Booking Status</th>
              <th>Event Type</th>
              <th>Head Count</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.bookingId}>
                <td>{booking.bookingId}</td>
                <td>{booking.organizerId}</td>
                <td>{booking.userName}</td>
                <td>{booking.submissionDate}</td>
                <td>{booking.eventDate}</td>
                <td>{booking.description}</td>
                <td>{booking.bookingStatus}</td>
                <td>{booking.eventType}</td>
                <td>{booking.headCount}</td>
                <td>{booking.amount}</td>
                <td>
                  <div className='button-container'>
                    <button className='th-button' onClick={() => handleMakePayment()}>Pay</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AllBookings;