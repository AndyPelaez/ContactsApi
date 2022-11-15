import express from "express";
import * as contactController from "../controllers/contact.controller";

const router = express.Router();

router.get("/", contactController.getContacts);
router.get("/:id", contactController.getContact);
router.post("/", contactController.postCreateContact);
router.patch("/:id", contactController.patchUpdateContact);
router.delete("/:id", contactController.deleteRemoveContact);

export default router;
