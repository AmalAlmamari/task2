import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  newTodo: string = '';
  todos: { text: string }[] = [];

  ngOnInit() {
    this.loadTodos();
  }
  addTodo() {
    if (this.newTodo.length >= 4 && this.newTodo.length <= 200 && /^[a-zA-Z0-9\s]+$/.test(this.newTodo)) {
      this.todos.push({ text: this.newTodo });
      this.saveTodos();
      this.newTodo = '';
    } else {
      alert('Please enter a valid To-Do item (4-200 characters, no special characters).');
    }
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
    this.saveTodos();
  }
  private loadTodos() {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      this.todos = JSON.parse(storedTodos);
    }
  }

  private saveTodos() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
