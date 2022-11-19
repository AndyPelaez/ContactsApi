import { HydratedDocument, Query } from "mongoose";

export interface IOrFilterBuilder<T> {
  getResult(): Query<
    HydratedDocument<T, {}, {}>[],
    HydratedDocument<T, {}, {}>,
    {},
    T
  >;
}
