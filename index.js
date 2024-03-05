const express = require("express");

const { todos_data } = require("./data");

const app = express();

app.use(express.json());

app.get("/task", (req, res) => {
  return res.json({ data: todos_data });
});

app.get("/task/:id", (req, res) => {
  const id = req.params.id;

  const find_todo = todos_data.find((elem) => {
    return elem.id == id;
  });

  return res.json({ data: find_todo });
});

app.post("/task", (req, res) => {
  const new_data = req.body;
  return res.json({
    data: new_data,
    message: "Successfully added!",
  });
});

app.put("/task/:id", (req, res) => {
  const id = req.params.id;
  const data = req.body;

  const find_todo = todos_data.find((elem) => {
    return elem.id == id;
  });

  if (!find_todo) {
    return res.status(404).json({ message: "Not found Page!" });
  }

  const update_todo = { ...find_todo, ...data };
  return res.json({ data: update_todo });
});

// DELETE 
app.delete("/task/:id", (req, res) => {
  const id = req.params.id;

  const index = todos_data.findIndex((elem) => elem.id == id);

  if (index === -1) {
    return res.status(404).json({ message: "Not found Page!" });
  }

  todos_data.splice(index, 1);

  return res.json({ message: "Todo deleted successfully!" });
});

app.listen(7001, () => {
  console.log("Express server running!");
});