
// require("dotenv").config();
// const express = require("express");
// const path = require("path");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const fileUploadRoutes = require("./routes/api/fileUploadRoutes");
// const app = express();
// const config = require("./config/config");

// app.use(cors());

// // Replace the above three lines for connecting mongodb with the below single line
// config.connectDB();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: "false" }));

// app.use(express.static(path.join(__dirname, "build")));

// // make the '/api/document' browser url route to go to documentRoutes.js route file
// app.use("/api/document", fileUploadRoutes);

// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   var err = new Error("Not Found");
//   err.status = 404;
//   next(err);
// });

// // error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.status(err.status || 500);
//   res.render("error");
// });

// module.exports = app;



require("dotenv").config();
const fileUploadRoutes = require("./routes/api/fileUploadRoutes");



const express = require("express");
const app = express();
const db = require("./config/keys").mongoURI;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");
const posts = require("./routes/api/posts");

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello World"));

app.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});



app.use(passport.initialize());
require("./config/passport")(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/posts", posts)
app.use("/api/document", fileUploadRoutes);


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
