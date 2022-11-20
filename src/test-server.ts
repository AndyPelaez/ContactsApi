import app from "./app";
import { mongoConnect } from "./utils/database";
import request from "supertest";
import { dotenvInitializer } from "./utils/dotenv";

dotenvInitializer();

const port = process.env.PORT || 3001;

mongoConnect();
export const requestWithSupertest = request(app);
