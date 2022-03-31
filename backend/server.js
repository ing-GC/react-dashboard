import express from "express";
import db from "./config/database.js";
import routes from "./routes/index.js";
import cors from "cors";

const app = express();

try {
  db.authenticate();
  console.log("Database connected successfully...");
} catch (error) {
  console.error("Connection failed: ", error);
}

app.use(cors());
app.use(express.json());
app.use("/clients", routes);

app.listen(5000, () => {
  console.log(`Server started on port 5000`);
});
