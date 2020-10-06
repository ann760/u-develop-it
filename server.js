// import express
const express = require("express");
// port
const PORT = process.env.PORT || 3001;
// app express
const app = express();
// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// // get express route
// app.get("/", (req, res) => {
//   res.json({
//     message: "Hello World",
//   });
// });

// Default response for any other request(Not Found) Catch all
app.use((req, res) => {
  res.status(404).end();
});

// listener
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
