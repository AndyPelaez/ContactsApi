import { mongoConnect } from "../utils/database";
import { dotenvInitializer } from "../utils/dotenv";

dotenvInitializer();

export const up = async () => {
  await mongoConnect();
  /*
   Code your update script here!
   */
};
export const down = async () => {
  await mongoConnect();
  /*
          Code you downgrade script here!
       */
};
