const Pool = require("pg").Pool;
const pool = new Pool({
  user: "arrm",
  host: "localhost",
  database: "eventonica_db",
  port: 5432
});

class EventRecommender {
  // USERS
  getUsers = (req, res) => {
    pool.query("SELECT * FROM users ORDER BY id ASC", (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    });
  };

  getUserById = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query("SELECT * FROM users WHERE id = $1", [id], (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    });
  };

  getUserByName = (req, res) => {
    const name = req.params.name;

    pool.query(
      "SELECT * FROM users WHERE name = $1",
      [name],
      (error, results) => {
        if (error) {
          throw error;
        }
        res.status(200).json(results.rows);
      }
    );
  };

  createUser = (req, res) => {
    const { name } = req.body;

    pool.query(
      "INSERT INTO users (name) VALUES ($1) RETURNING *;",
      [name],
      (error, results) => {
        if (error) {
          throw error;
        }
        res.status(201).json(results.rows);
      }
    );
  };

  updateUser = (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;

    pool.query(
      "UPDATE users SET name = $1, WHERE id = $2",
      [name, id],
      (error, results) => {
        if (error) {
          throw error;
        }
        res.status(200).send(`User modified with ID: ${id}`);
      }
    );
  };

  deleteUser = (req, res) => {
    const id = parseInt(req.body.id);
    pool.query("DELETE FROM users WHERE id = $1", [id], (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).send(`User deleted with ID: ${id}`);
    });
  };

  //   EVENTS
  getEvents = (req, res) => {
    pool.query("SELECT * FROM events ORDER BY id ASC", (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    });
  };

  getEventById = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query("SELECT * FROM events WHERE id = $1", [id], (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    });
  };

  createEvent = (req, res) => {
    const { name, date, category } = req.body;

    pool.query(
      "INSERT INTO events ( name, date, category )  VALUES ($1, $2, $3) RETURNING *;",
      [name, date, category],
      (error, results) => {
        if (error) {
          throw error;
        }
        res.status(201).json(results.rows);
      }
    );
  };

  deleteEvent = (req, res) => {
    const id = parseInt(req.body.id);
    pool.query("DELETE FROM events WHERE id = $1", [id], (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).send(`User deleted with ID: ${id}`);
    });

    //     let deletedEvent = er.deleteEvent(id);
    //     if (!deletedEvent)
    //       res.status(404).send("ERROR: Event with that ID does not exist.");
    //     else res.status(200).send(`Event :  ${deletedEvent} deleted successfully`);
    //   });
  };

  updateEvent = (req, res) => {
    const id = parseInt(req.params.id);
    const { name, date, category } = req.body;

    pool.query(
      "UPDATE events SET name = $1, date = $2, category = $3, WHERE id = $4",
      [name, date, category],
      (error, results) => {
        if (error) {
          throw error;
        }
        res.status(200).send(`User modified with ID: ${id}`);
      }
    );
  };
}

module.exports = { EventRecommender };
