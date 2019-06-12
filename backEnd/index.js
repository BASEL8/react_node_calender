const express = require("express");
const app = express();
let events = [
  {
    year: "2019",
    month: "06",
    day: "01",
    message: "test"
  },
  {
    year: "2019",
    month: "06",
    day: "15",
    message: "test_2"
  },
  {
    year: "2019",
    month: "06",
    day: "13",
    message: "test_3"
  }
];
app.get("/api/:year/:month/:day", (req, res) => {
  const { year, month, day } = req.params;
  res.send(
    events.filter(
      (event) =>
        event.year === year && event.month === month && event.day === day
    )
  );
});
app.listen(9000);
