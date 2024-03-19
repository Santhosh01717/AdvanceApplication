import React from 'react';
import './AddEvent.css'; // Make sure to import your CSS file

function EditEventPage() {
  return (
    <div className="container">
      <div className="title">ADD EVENT</div>
      <div className="content">
        <form action="#">
          <div className="input-box">
            <span className="details">Event Type</span>
            <input type="text" placeholder="Enter event type" required />
          </div>
          <div className="input-box">
            <span className="details">Descriptions</span>
            <input type="text" placeholder="Enter event description" required />
            {/* <textarea placeholder="Enter event description" required /> */}
          </div>
          <div className="input-box">
            <span className="details">Total Package</span>
            <input type="text" placeholder="Enter total package" required />
          </div>
          <div className="input-box">
            <span className="details">Participants Count</span>
            <input type="number" placeholder="Enter participants count" required />
          </div>
          <div className="input-box">
            <span className="details">Charges</span>
            <input type="number" placeholder="Enter charges" required />
          </div>
          <div className="button">
            <input type="submit" value="Add Event" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditEventPage;
