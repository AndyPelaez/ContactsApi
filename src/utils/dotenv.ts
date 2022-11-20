import dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";

export function dotenvInitializer() {
  const myEnv = dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
  dotenvExpand.expand(myEnv);
}
