import React from "react";
import Calendar from "rc-calendar";
import "rc-calendar/assets/index.css";

const CalenderContainer = ({ setDate }) => {
  return (
    <>
      <Calendar
        onSelect={(e) => setDate(convert(e.format("YYYY-MM-DD").split("-")))}
        showWeekNumber={true}
      />
    </>
  );
};
export default CalenderContainer;

const convert = ([year, month, day]) => {
  return { year, month, day };
};
