import {TodoTableManager} from "./ui/todo-table-manager.js";
import {TodoService} from "./service/todo-service.js";
import {MessageManager} from "./ui/message-manager.js";
import {TodoModalDialog} from "./ui/todo-modal-dialog.js";
import {TodoOrder} from "./model/todo-order.js";
import {TodoFilter} from "./model/todo-filter.js";

const BASE_API_URL = 'http://localhost:8080';

const messageContainer = document.querySelector('.message-container') as HTMLElement;
const todoTableContainer = document.querySelector('.todo-table-container') as HTMLElement;

const todoService = new TodoService(BASE_API_URL);

const messageManager = new MessageManager(messageContainer);

const todoTableManager = TodoTableManager.render(todoTableContainer, async (filter, order) => {
  await refreshTodos(filter, order);
});

const refreshTodos = async (filter: TodoFilter, order: TodoOrder) => {
  await todoTableManager.clear();
  const todos = await todoService.getAll(filter, order);
  await todoTableManager.addAll(
    todos,
    async (todo) => {
      TodoModalDialog.openEdit(
        todo,
        async (todo) => {
          await todoService.update(todo);
          await refreshTodos(filter, order);
        }
      );
    },
    async (todo) => {
      await todoService.delete(todo);
      await refreshTodos(filter, order);
    },
    async (todo) => {
      await todoService.updateStatus(todo);
      await refreshTodos(filter, order);
    }
  );
}

const newTodoButton = document.querySelector('.btn-new-todo') as HTMLButtonElement;

newTodoButton.addEventListener('click', () => {
  TodoModalDialog.open(
    async (todo) => {
      try {
        await todoService.create(todo);
        await refreshTodos(todoTableManager.getFilter(), todoTableManager.getOrder());
      } catch (error) {
        messageManager.showError(error);
      }
    }
  )
});

// Initial load of todos
refreshTodos(todoTableManager.getFilter(), todoTableManager.getOrder());
