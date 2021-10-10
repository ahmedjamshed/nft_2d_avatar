const express = require("express");

const path = require("path");
// const api = require("./api");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use("/api", api);

app.use(express.static(path.join(__dirname, '..', 'build')));
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

const PORT = process.env.PORT || 9090;
app.listen(PORT, () => {
    console.log(`started server on port ${PORT}`);
  });