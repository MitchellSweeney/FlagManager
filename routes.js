const express = require("express");
const db = require("./db");
const flag_push = require("./flag_push");
const router = express.Router();

router.post("/add_project", async (req, res) => {
  console.log(req.body);
  try {
    const result = await db.query(
      `INSERT INTO Project (project_id, project_name, user_id) VALUES (${req.body.project_id}, "${req.body.project_name}", ${req.body.user_id});`
    );
    if (result.affectedRows) {
      res.status(200).send();
    } else {
      res.status(500).send("Error performing query").send();
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post("/add_flag", async (req, res) => {
  console.log(req.body);
  try {
    const result = await db.query(
      `INSERT INTO Flag (flag_id, flag_key, flag_value, project_id, user_id) VALUES (${req.body.flag_id}, "${req.body.flag_key}", "${req.body.flag_value}", ${req.body.project_id}, ${req.body.user_id});`
    );
    if (result.affectedRows) {
      flag_push(req.body.flag_id, req.body.flag_key, req.body.flag_value);
      res.status(200).send();
    } else {
      res.status(500).send("Error performing query").send();
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post("/add_webhook", async (req, res) => {
  console.log(req.body);
  try {
    const result = await db.query(
      `INSERT INTO Webhook (webhook_id, webhook_url, project_id) VALUES (${req.body.webhook_id}, "${req.body.webhook_url}", ${req.body.project_id});`
    );
    if (result.affectedRows) {
      res.status(200).send();
    } else {
      res.status(500).send("Error performing query").send();
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
