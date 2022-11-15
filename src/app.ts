import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import contactRoutes from "./routes/contacts.routes";
import {
  errorHandlerMiddleware,
  handleError,
  isTrustedError,
} from "./utils/error-handler";

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//routes
app.use("/contacts", contactRoutes);

app.use(errorHandlerMiddleware);

process.on("uncaughtException", async (error: Error) => {
  handleError(error);
  if (!isTrustedError(error)) process.exit(1);
});

process.on("unhandledRejection", (reason: Error) => {
  throw reason;
});

export default app;
