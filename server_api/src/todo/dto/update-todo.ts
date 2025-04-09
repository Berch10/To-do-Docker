import {TodoStatus} from "../model/todo";

/**
 * Data Transfer Object (DTO) for updating a to-do item.
 */
export interface UpdateTodo {
  title: string;
  description: string;
  status: TodoStatus;
  dueDate?: Date;
}
