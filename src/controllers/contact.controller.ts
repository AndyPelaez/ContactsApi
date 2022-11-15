import { NextFunction, Request, Response } from "express";
import { IContact, ICreateContact } from "../interfaces/contact.interface";
import {
  createContact,
  findContact,
  findContacts,
  removeContact,
  updateContact,
} from "../services/contact.service";
import asyncHandler from "express-async-handler";

export const getContact = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const contact = await findContact(id);
    res.status(200).json(contact);
  }
);
export const getContacts = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const contacts = await findContacts();
    res.status(200).json(contacts);
  }
);
export const postCreateContact = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const payload: ICreateContact = req.body;
    const contacts = await createContact(payload);
    res.status(200).json(contacts);
  }
);
export const patchUpdateContact = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const payload: IContact = req.body;
    const contact = await updateContact(id, payload);
    res.status(200).json(contact);
  }
);
export const deleteRemoveContact = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const payload: IContact = req.body;
    const contact = await removeContact(id);
    res.status(200).json(contact);
  }
);
