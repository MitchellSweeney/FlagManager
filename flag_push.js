const db = require("./db");
const axios = require("axios");

async function flag_push(flag_id, flag_key, flag_value) {
  const result = await db.query(
    `SELECT webhook.webhook_url
         FROM flag
         JOIN webhook ON flag.project_id = webhook.project_id
         WHERE flag.flag_id = ${flag_id};`
  );
  const webhook = result[0].webhook_url;
  const flag_data = {
    [flag_key]: flag_value,
  };
  axios
    .post(webhook, flag_data)
    .then((response) => {
      console.log("Flag updated");
    })
    .catch((error) => {
      console.log("Webhook used to update flag");
      console.log("URL: ", webhook);
      console.log("Flag key, value", flag_data);
    });
}

module.exports = flag_push;
