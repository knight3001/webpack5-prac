const path = require("path");
const express = require("express");
const app = express();

const CURRENT_WORKING_DIR = process.cwd();

app.use("/dist", express.static(path.join(CURRENT_WORKING_DIR, "dist")));

const port = process.env.PORT || 3000;

// express will serve up index.html if it doesn't recognize the route
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
