const router = require("express").Router();
const pool = require("../modules/pool");

// GET /feedback
router.get("/", (req, res) => {
  const queryText = `SELECT * FROM "feedback" ORDER BY "id" ASC;`;
  pool
    .query(queryText)
    .then((responseDB) => {
      const dbRows = responseDB.rows;
      console.table(dbRows);
      res.send(dbRows);
    })
    .catch((err) => {
      console.log("ERROR:", err);
      res.sendStatus(500);
    });
}); // end GET /feedback

// POST /feedback
router.post("/", (req, res) => {
  const feedback = req.body;
  const queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments", "flagged")
        VALUES ($1, $2, $3, $4, $5);`;

  pool
    .query(queryText, [
      feedback.feeling,
      feedback.understanding,
      feedback.support,
      feedback.comments,
      feedback.flagged,
    ])
    .then((responseDb) => {
      console.log(responseDb);
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log("ERROR:", err);
      res.sendStatus(500);
    });
}); // end POST /feedback

// DELETE /feedback/<id>
router.delete("/:id", (req, res) => {
  const feedbackId = req.params.id;
  const queryText = `DELETE FROM "feedback" WHERE "id" = $1;`;

  pool
    .query(queryText, [feedbackId])
    .then((responseDb) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log("Error deleting feedback:", err);
      res.sendStatus(500);
    });
}); // end feedback /treats

module.exports = router;
