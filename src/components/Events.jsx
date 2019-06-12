import React, { useEffect, useState } from "react";
import axios from "axios";
const Events = ({ date: { year, month, day } }) => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetchData(year, month, day, setEvents);
  }, [day, month, year]);
  return (
    <>
      <h6>Events</h6>
      {events.length !== 0 ? (
        events.map((event, index) => <p key={index}>{event.message}</p>)
      ) : (
        <p>nothing to do </p>
      )}
    </>
  );
};
export default Events;

const fetchData = (year, month, day, cb) => {
  axios.get(`/api/${year}/${month}/${day}`).then((res) => cb(res.data));
};
