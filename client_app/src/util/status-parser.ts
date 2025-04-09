import {TodoStatus} from "../model/todo.js";

export class TodoStatusParser {
  public static parse(status: string): TodoStatus | undefined {
    switch (status.toLowerCase()) {
      case 'open':
        return TodoStatus.OPEN;
      case 'done':
        return TodoStatus.DONE;
      default:
        return undefined;
    }
  }

  private constructor() {
    throw new Error('This class cannot be instantiated');
  }
}
