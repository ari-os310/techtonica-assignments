// REQUIRED
const express = require("express");
const bodyParser = require("body-parser");
const {
  EventRecommender,
  User,
  Event
} = require("./public/eventonica-classes");

const cors = require("cors");
const db = require("./eventonica_db_queries");
const er = new db.EventRecommender();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(express.static("public"));
app.use(cors());

// ROUTES
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

// EVENTS
app
  .route("/events")

  .get(er.getEvents)

  .post(er.createEvent);

// EVENTS BY ID
app
  .route("/events:id")

  .get(er.getEventById)

  .put(er.updateEvent)

  .delete(er.deleteEvent);

// W. Keyword Param
// app
//   .route("/events:keyword")

//   .get((req, res) => {
//     res.status(200).send(req.params.keyword);
//   });

// USERS
app
  .route("/users")

  .get(er.getUsers)

  .post(er.createUser);

//USERS BY ID
app
  .route("/users:id")

  .get(er.getUserById)

  .put(er.updateUser)

  .delete(er.deleteUser);

//   USERS BY NAME
app
  .route("/users/:name")

  .get(er.getUserByName);

app.listen(port, () => console.log(`Eventonica listening on port ${port}!`));
