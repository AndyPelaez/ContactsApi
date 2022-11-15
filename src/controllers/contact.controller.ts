import { NextFunction, Request, Response } from "express";
import { IContact, ICreateContact } from "../interfaces/contact.interface";
import {
  createContact,
  findContact,
  findContacts,
  removeContact,
  updateContact,
} from "../services/contact.service";

export async function getContact(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  const contact = await findContact(id);
  res.status(200).json(contact);
}
export async function getContacts(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const contacts = await findContacts();
  res.status(200).json(contacts);
}
export async function postCreateContact(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const payload: ICreateContact = req.body;
  const contacts = await createContact(payload);
  res.status(200).json(contacts);
}
export async function pacthUpdateContact(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  const payload: IContact = req.body;
  const contact = await updateContact(id, payload);
  res.status(200).json(contact);
}
export async function deleteRemoveContact(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  const payload: IContact = req.body;
  const contact = await removeContact(id);
  res.status(200).json(contact);
}
