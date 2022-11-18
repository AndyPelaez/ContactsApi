import { mongoConnect } from "../utils/database";
import dotenv from "dotenv";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

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
