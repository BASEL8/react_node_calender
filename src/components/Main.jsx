import React, { useState } from "react";
import Inputs from "./Inputs";
import CalenderContainer from "./Calender";
import Events from "./Events";
import moment from "moment";

const Main = () => {
  const [date, setDate] = useState(
    convert(
      moment()
        .format("YYYY-MM-DD")
        .split("-")
    )
  );
  return (
    <>
      <CalenderContainer setDate={setDate} />
      <Events date={date} />
      <Inputs />
    </>
  );
};
export default Main;

const convert = ([year, month, day]) => {
  return { year, month, day };
};
