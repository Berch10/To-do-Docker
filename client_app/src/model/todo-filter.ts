import {TodoStatus} from "./todo.js";

export class TodoFilter {
  public constructor(
    public readonly title: string | undefined = undefined,
    public readonly status: TodoStatus | undefined = undefined,
  ) {}
}
