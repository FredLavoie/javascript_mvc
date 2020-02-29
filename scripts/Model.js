export default class Model {
  constructor() {
    this.todos = JSON.parse(localStorage.getItem('todos')) || [];
  }

  bindTodoListChanged(callback) {
    this.onTodoListChanged = callback;
  }

  _commit(todos) {
    this.onTodoListChanged(this.todos);
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  // create a new todo and give it the id of the array length
  addTodo(todoText) {
    let newId = this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1
    const todo = {
      id: newId,
      text: todoText,
      complete: false,
    }
    this.todos.push(todo);
    this._commit(this.todos);
  }

  // recreate the todos array while updating the text of the selected todo given an id
  editTodo(id, updatedText) {
    this.todos = this.todos.map(todo =>
      todo.id === id ? { id: todo.id, text: updatedText, complete: todo.complete } : todo
    );
    this._commit(this.todos);
  }

  // filter out all todos where id does not equal the one passed in to the method
  deleteTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id);
    this._commit(this.todos);
  }

  // mark todo as completed
  toggleTodo(id) {
    this.todos = this.todos.map(todo =>
      todo.id === id ? { id: todo.id, text: todo.text, complete: !todo.complete } : todo
    );
    this._commit(this.todos);
  }

}
