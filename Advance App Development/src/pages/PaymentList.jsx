import React from 'react';
import './AllBookings.css'; // You can define your CSS styles in PaymentList.css
import { useNavigate } from 'react-router-dom';
import Nav from './Nav'; // Import Nav component if needed

function PaymentList() {
  // Sample data for payments
  const payments = [
    {
      paymentId: 1,
      organizerId: 101,
      status: 'Pending',
      totalAmount: '$200',
      amountPaid: '$0',
      balance: '$200',
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

  const nav = useNavigate();

  const handleViewDetails = (paymentId) => {
    // Logic to navigate to payment details page for payment with paymentId
    // nav(`/payment/${paymentId}`); // Example navigation
  };

  return (
    <>
      <Nav />
      <div className="t-container">
        <div className='header'>
          <h2>Payment List</h2>
        </div>

        <table className="payment-table">
          <thead>
            <tr>
              <th>Payment ID</th>
              <th>Organizer ID</th>
              <th>Status</th>
              <th>Total Amount</th>
              <th>Amount Paid</th>
              <th>Balance</th>
              <th>Payment Date</th>
              <th>Mode of Payment</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.paymentId}>
                <td>{payment.paymentId}</td>
                <td>{payment.organizerId}</td>
                <td>{payment.status}</td>
                <td>{payment.totalAmount}</td>
                <td>{payment.amountPaid}</td>
                <td>{payment.balance}</td>
                <td>{payment.paymentDate}</td>
                <td>{payment.modeOfPayment}</td>
                {/* <td>
                  <div className='button-container'>
                    <button className='th-button' onClick={() => handleViewDetails(payment.paymentId)}>View Details</button>
                  </div>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default PaymentList;
