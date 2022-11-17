import app from "./app";
import dotenv from "dotenv";
import { mongoConnect } from "./utils/database";
import request from "supertest";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const port = process.env.PORT || 3001;

mongoConnect();
export const requestWithSupertest = request(app);
