const express = require("express");
const cors = require("cors");
const restaurantRoutes = require("./routes/restaurantRoutes");

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());
app.use("/api/restaurants", restaurantRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the FoodieDelight API");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
