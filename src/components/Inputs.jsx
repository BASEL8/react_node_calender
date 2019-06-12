import React, { useState } from "react";
import axios from "axios";
const Inputs = ({ date: { year, month, day } }) => {
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api", { year, month, day, message });
    setMessage("");
  };
  return (
    <>
      <h6>inputs</h6>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="event"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">add event</button>
      </form>
    </>
  );
};
export default Inputs;
