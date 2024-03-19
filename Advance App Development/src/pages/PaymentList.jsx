// MyBookings.js

import React from 'react';
import './AllBookings.css';

function PaymentList() {
  // Sample data for bookings
  const bookings = [
    {
      paymentId: 1,
      organizerId: 101,
      status: 'Pending',
      totalAmount: '$200',
      amountPaid: '$100',
      balance: '$100',
      paymentDate: '2024-03-20',
      modeOfPayment: 'Credit Card',
    },
    {
      paymentId: 2,
      organizerId: 102,
      status: 'Confirmed',
      totalAmount: '$150',
      amountPaid: '$150',
      balance: '$0',
      paymentDate: '2024-03-22',
      modeOfPayment: 'PayPal',
    },
    // Add more payments as needed
  ];

  const handleDelete = (paymentId) => {
    // Logic to delete payment with paymentId
    // console.log(Deleting payment with ID ${paymentId});
  };

  return (
    <>
      <div className="container">
        <div className='header'>
          <h2>Payment history</h2>
        </div>

        <table style={{marginLeft: "-300px"}} className="booking-table">
          <thead>
            <tr>
              <th>Payment ID</th>
              <th>Organizer ID</th>
              <th>Status</th>
              <th>Total Amount</th>
              <th>Amount Paid</th>
              <th>Balance</th>
              <th>Payment Date</th>
              <th>Mode Of Payment</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((payment) => (
              <tr key={payment.paymentId}>
                <td>{payment.paymentId}</td>
                <td>{payment.organizerId}</td>
                <td>{payment.status}</td>
                <td>{payment.totalAmount}</td>
                <td>{payment.amountPaid}</td>
                <td>{payment.balance}</td>
                <td>{payment.paymentDate}</td>
                <td>{payment.modeOfPayment}</td>
                <td>
                  <div className='button-container'>
                    <button className='th-button' onClick={() => handleDelete(payment.paymentId)}>Delete</button>
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

export default PaymentList;
