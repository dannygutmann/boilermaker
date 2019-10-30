const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const app = express();
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "../public")));

app.use("/api", require("./api"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
}); // Send index.html for any other requests due to SPA

// error handling middleware
app.use((err, req, res) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error");
});

app.listen(process.env.PORT || 8080, () =>
  console.log(`Now listening on port ${process.env.PORT || 8080}`)
);
