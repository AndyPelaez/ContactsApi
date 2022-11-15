import { Schema, model } from "mongoose";
import { ICreateContact } from "../interfaces/contact.interface";
import { emailValidator } from "../validators/email-validator";
import { phoneNumberValidator } from "../validators/phone-number-validator";

const contactSchema = new Schema<ICreateContact>({
  name: { type: String, required: true },
  address: { type: String, required: true },
  phoneNumber: {
    type: String,
    required: true,
    validate: {
      validator: phoneNumberValidator,
      message: "The phone number is not valid",
    },
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: emailValidator,
      message: () => "The email is not valid",
    },
  },
});

export const Contact = model<ICreateContact>("Contact", contactSchema);
