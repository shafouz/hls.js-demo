import express from "express";
const app = express();

const logRequest = (req, _, next) => {
  const { method, url } = req;
  console.log(`[${new Date().toISOString()}] ${method} ${url}`);
  next();
};

app.use(logRequest);
app.use("/static", express.static("dist/public"));
app.get("/", (_, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

let port = 3333;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
