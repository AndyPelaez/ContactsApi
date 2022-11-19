import { Model, Query, HydratedDocument } from "mongoose";
import { IFilterBuilder } from "../interfaces/filter-builder.interface";

export class FilterBuilder<T> implements IFilterBuilder<T> {
  private keys: string[];
  private baseResult: Query<
    HydratedDocument<T, {}, {}>[],
    HydratedDocument<T, {}, {}>,
    {},
    T
  >;
  constructor(model: Model<T, {}, {}, {}, any>, keys: string[]) {
    this.baseResult = model.find();
    this.keys = keys;
  }
  getResult() {
    return this.baseResult;
  }

  addOrQuery(query: string) {
    this.baseResult = this.baseResult.or(this.createQueryObject(query) as any);
    return this;
  }

  private createQueryObject(query: string): FilterMatch[] {
    let result: FilterMatch[] = [];
    this.keys.forEach((key) => {
      const newCondition: FilterMatch = {};
      newCondition[key] = { $regex: query, $options: "i" };
      result.push(newCondition);
    });
    return result;
  }
}


export type FilterMatch = { [key: string]: { $regex: string; $options?: "i" } };
