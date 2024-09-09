import React, { useState, useEffect } from "react";

const Booking = () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleBooking = () => {
        // Add your booking logic here
    };

    return (
        <div>
            <h1>Book a Session</h1>
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
            />
            <button onClick={handleBooking}>Book Now</button>
        </div>
    );
};

export default Booking;