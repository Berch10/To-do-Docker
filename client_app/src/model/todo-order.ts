import {TodoSortAttribute} from "./todo-sort-attribute.js";
import {SortOrder} from "./sort-order.js";

export class TodoOrder {
  public constructor(
    public readonly attribute = TodoSortAttribute.CREATED_AT,
    public readonly order = SortOrder.DESC
  ) {}
}
