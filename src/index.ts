import app from "./app";
import dotenv from "dotenv";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
