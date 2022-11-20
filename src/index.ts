import { dotenvInitializer } from "./utils/dotenv";
import app from "./app";
import { mongoConnect } from "./utils/database";

dotenvInitializer();

const port = process.env.PORT || 3001;

mongoConnect(() => {
  app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
  });
});
