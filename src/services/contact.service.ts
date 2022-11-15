import { IContact, ICreateContact } from "../interfaces/contact.interface";
import { Contact } from "../models/contact.model";

export function findContact(id: string) {
  return Contact.findById(id);
}
export function findContacts() {
  return Contact.find();
}
export function createContact(contact: ICreateContact) {
  const value = new Contact(contact);
  return value.save();
}
export function updateContact(_id: string, contact: IContact) {
  return Contact.updateOne({ _id }, contact);
}
export function removeContact(id: string) {
  return Contact.deleteOne({ _id: id });
}
