import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the default date picker styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import './Calendar.css'; // Import your custom styles here

const Calendar = () => {
    // Create a state variable to hold the selected date
    const [selectedDate, setSelectedDate] = useState(null);
  
    // Define a function to handle date changes
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
  
    // Render the component
    return (
      <div className="form-container">
        <div className="form-group">
          <div className="icon">
            <FontAwesomeIcon icon={faCalendar} />
          </div>
          <DatePicker
            selected={selectedDate} // Pass the selected date to the DatePicker
            onChange={handleDateChange} // Provide the handler function for date changes
            placeholderText="Select a date" // Placeholder text when no date is selected
            dateFormat="MMMM d, yyyy" // Format to display the selected date
          />
        </div>
      </div>
    );
  };
  
  export default Calendar;
  

