import { Schema, model } from "mongoose";
import { ICreateContact } from "../interfaces/contact.interface";

const contactSchema = new Schema<ICreateContact>({
  name: { type: String, required: true },
  address: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
});

export const Contact = model<ICreateContact>("Contact", contactSchema);
