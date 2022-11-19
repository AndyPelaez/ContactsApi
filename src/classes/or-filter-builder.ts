import { Model } from "mongoose";
import { IOrFilterBuilder } from "../interfaces/or-filter-builder.interface";
import { FilterBuilder } from "./filter-builder";

export class OrFilterBuilder<T> implements IOrFilterBuilder<T> {
  private filterBuilder: FilterBuilder<T>;
  constructor(
    model: Model<T, {}, {}, {}, any>,
    keys: string[],
    queries: string[]
  ) {
    this.filterBuilder = new FilterBuilder<T>(model, [...keys]);

    queries.forEach((element) => {
      this.filterBuilder = this.filterBuilder.addOrQuery(element);
    });
  }

  getResult() {
    return this.filterBuilder.getResult();
  }
}
