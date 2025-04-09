import {TodoStatus} from "../model/todo.js";

export type TodoQueryParams = {
  status?: TodoStatus;
  sort?: 'dueDate' | 'createdAt';
  order?: 'asc' | 'desc';
};
