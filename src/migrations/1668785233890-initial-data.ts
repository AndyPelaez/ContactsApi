import { mongoConnect } from "../utils/database";
import dotenv from "dotenv";
import { randomPhoneNumber } from "../tests/utils.functions";
import { ICreateContact } from "../interfaces/contact.interface";
import { Contact } from "../models/contact.model";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const contacts: ICreateContact[] = [
  {
    address: "Florida, United States",
    email: "pepe@gmail.com",
    name: "Pepe Perez",
    phoneNumber: randomPhoneNumber(),
  },
  {
    address: "Florida, United States",
    email: "pedro@gmail.com",
    name: "Pedro Fernandez",
    phoneNumber: randomPhoneNumber(),
  },
  {
    address: "Florida, United States",
    email: "Julia@gmail.com",
    name: "Julia Lopez",
    phoneNumber: randomPhoneNumber(),
  },
  {
    address: "Florida, United States",
    email: "sandra@gmail.com",
    name: "Sandra Castillo",
    phoneNumber: randomPhoneNumber(),
  },
  {
    address: "New York, United States",
    email: "Laura@gmail.com",
    name: "Laura Perez",
    phoneNumber: randomPhoneNumber(),
  },
  {
    address: "New York, United States",
    email: "ernesto@gmail.com",
    name: "Ernesto Fonseca",
    phoneNumber: randomPhoneNumber(),
  },
  {
    address: "New York, United States",
    email: "liliana@gmail.com",
    name: "Liliana Horta",
    phoneNumber: randomPhoneNumber(),
  },
];

export const up = async () => {
  await mongoConnect();
  await Contact.insertMany(contacts);
};
export const down = async () => {
  await mongoConnect();
  /*
          Code you downgrade script here!
       */
};
