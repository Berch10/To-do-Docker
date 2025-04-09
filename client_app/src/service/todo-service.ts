import {NewTodo, Todo} from "../model/todo.js";
import {TodoFilter} from "../model/todo-filter.js";
import {TodoOrder} from "../model/todo-order.js";

export class TodoService {
  public constructor(private apiUrl: string) {
  }

  public async getAll(
    filter: TodoFilter,
    order: TodoOrder,
  ): Promise<Todo[]> {
    let todosUrl = `${this.apiUrl}/todos?sort=${order.attribute}&order=${order.order}`

    // add filter parameters
    if (filter.title) {
      todosUrl += `&title=${filter.title}`;
    }
    if (filter.status) {
      todosUrl += `&status=${filter.status}`;
    }

    const response = await fetch(todosUrl);
    if (!response.ok) {
      const errorMessage = await response.json() as ErrorMessage;
      throw new Error(errorMessage.message);
    }

    const data = await response.json() as DataMessage<Todo[]>;

    return data.data.map(this.normalize);
  }

  public async getById(id: number): Promise<Todo> {
    const response = await fetch(`${this.apiUrl}/todos/${id}`);
    if (!response.ok) {
      const errorMessage = await response.json() as ErrorMessage;
      throw new Error(errorMessage.message);
    }

    const data = await response.json() as DataMessage<Todo>;

    return this.normalize(data.data);
  }

  public async create(todo: NewTodo): Promise<Todo> {
    const response = await fetch(`${this.apiUrl}/todos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo)
    });
    if (!response.ok) {
      const errorMessage = await response.json() as ErrorMessage;
      throw new Error(errorMessage.message);
    }

    const data = await response.json() as DataMessage<Todo>;

    return this.normalize(data.data);
  }

  public async update(todo: Todo): Promise<Todo> {
    const response = await fetch(`${this.apiUrl}/todos/${todo.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo)
    });
    if (!response.ok) {
      const errorMessage = await response.json() as ErrorMessage;
      throw new Error(errorMessage.message);
    }

    const data = await response.json() as DataMessage<Todo>;

    return this.normalize(data.data);
  }

  public async updateStatus(todo: Todo): Promise<Todo> {
    return this.updateStatusById(todo.id, todo.status);
  }

  public async updateStatusById(id: string, status: string): Promise<Todo> {
    const response = await fetch(`${this.apiUrl}/todos/${id}/status`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({status})
    });
    if (!response.ok) {
      const errorMessage = await response.json() as ErrorMessage;
      throw new Error(errorMessage.message);
    }

    const data = await response.json() as DataMessage<Todo>;

    return this.normalize(data.data);
  }

  public async delete(todo: Todo): Promise<void> {
    await this.deleteById(todo.id);
  }

  public async deleteById(id: string): Promise<void> {
    const response = await fetch(`${this.apiUrl}/todos/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      const errorMessage = await response.json() as ErrorMessage;
      throw new Error(errorMessage.message);
    }
  }

  private normalize(todo: Todo): Todo {
    return {
      ...todo,
      createdAt: new Date(todo.createdAt),
      dueDate: todo.dueDate ? new Date(todo.dueDate) : undefined
    }
  }
}

interface ErrorMessage {
  message: string;
  status: number;
}

interface DataMessage<T> {
  data: T;
  message: string;
  status: number;
}
