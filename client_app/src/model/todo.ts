export interface Todo extends NewTodo {
  id: string;
  title: string;
  description: string;
  status: TodoStatus;
  createdAt: Date;
  dueDate?: Date;
}

export interface NewTodo {
  title: string;
  description: string;
  dueDate?: Date;
}

export enum TodoStatus {
  OPEN = 'open',
  DONE = 'done',
}
