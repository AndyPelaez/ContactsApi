import express from "express";
import bodyParser from "body-parser";
import contactRoutes from "./routes/contacts.routes";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//routes
app.use("/contacts", contactRoutes);

export default app;
