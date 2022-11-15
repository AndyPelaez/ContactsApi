import { NextFunction, Request, Response } from "express";
import { BaseError } from "../classes/base-error";
import { Error } from "mongoose";

export function handleError(err: Error) {
  console.log(err);
}

export function isTrustedError(error: Error) {
  return (
    error instanceof BaseError ||
    error.name === "ValidationError" ||
    error.name === "MongoServerError"
  );
}

export function errorHandlerMiddleware(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err.name === "ValidationError")
    return (err = handleValidationError(err, res));
  else if (err.name == "MongoServerError") {
    return handleMongoServerError(err, res);
  } else returnError(err, req, res, next);
}

export function handleValidationError(
  err: Error.ValidationError,
  res: Response
) {
  console.log(err.constructor.name);

  let errors = Object.values(err.errors).map((el) => el.message);
  let fields = Object.values(err.errors).map((el) => el.path);
  let code = 400;
  res.status(code).send({ messages: errors, fields: fields });
}
const handleMongoServerError = (err: any, res: Response) => {
  let error = "Internal Server Error";
  const fields = Object.keys(err.keyPattern);
  const code = 500;

  if (err.code === 11000)
    error = `Duplicated Element: The inserted element(${fields.join(
      ","
    )}) already exists in the database.`;

  res.status(code).send({ messages: [error], fields: fields });
};

function returnError(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.status(err.statusCode || 500).send(err.message);
}
