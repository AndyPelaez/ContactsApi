import { HydratedDocument,Query } from "mongoose";

export interface IFilterBuilder<T> {
    addOrQuery(query: string): this;
    getResult(): Query<
    HydratedDocument<T, {}, {}>[],
    HydratedDocument<T, {}, {}>,
    {},
    T
  >;
  }