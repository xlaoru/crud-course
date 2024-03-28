const express = require("express"); // npm i express
const mongoose = require("mongoose"); // npm i mongoose

const app = express();

const productRoutes = require("./routes/products");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", productRoutes);

app.get("/", (req, res) => {
  res.send("Codecamp Free CRUD Course");
});

mongoose
  .connect(
    "mongodb+srv://sia212007:rGP3EBKWWlaEly74@backenddb.gazegku.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to DB");
    app.listen(3000, () => {
      console.log(`Server is running on port 3000`);
    });
  })
  .catch(() => {
    console.log("Connection Failed");
  });
