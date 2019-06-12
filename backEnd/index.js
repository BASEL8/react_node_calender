const express = require("express");
const app = express();
app.use(express.json());
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
    day: "01",
    message: "test_2"
  },
  {
    year: "2019",
    month: "06",
    day: "15",
    message: "test_3"
  },
  {
    year: "2019",
    month: "06",
    day: "13",
    message: "test_4"
  }
];
app.get("/api/:year/:month/:day", (req, res) => {
  const { year, month, day } = req.params;
  res
    .status(200)
    .send(
      events.filter(
        (event) =>
          event.year === year && event.month === month && event.day === day
      )
    );
});
app.post("/api", (req, res) => {
  const { year, month, day, message } = req.body;
  events.push({ year, month, day, message });
  res.status(201);
});
app.listen(9000);
