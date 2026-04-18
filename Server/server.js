const express = require("express");
const app = express();
require("dotenv").config();
const getNewsRouter = require("./routes/getNews.route");

app.use(express.json());

/**
 *- Handle GET request for the root URL "/"
 *- This route is used to check if the server is running properly
 */
app.get("/", (req, res) => {
  res.send(`app is running smoothly at port ${process.env?.PORT}`);
});

app.use("/api/news", getNewsRouter);

app.listen(process.env?.PORT || 3002, () => {
  console.log("app is running at ", process.env.URL);
});
