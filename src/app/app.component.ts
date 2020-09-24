import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
  todoArray = [];

  @ViewChild('todoForm', {static: false}) todoForm;

  addTodo(value) {
    if (value != "") {
      this.todoArray.push(value);
      console.log(this.todoArray);
      this.todoForm.resetForm();
    }
    else {
      alert("Todo required!");
    }
  }

  deleteItem(todo) {
    for (let i = 0; i <= this.todoArray.length; i++) {
      if (todo == this.todoArray[i]) {
        this.todoArray.splice(i, 1);
        console.log("Delete Item");
      }
    }
  }

  todoSubmit(form:any) {
    if (form != "") {
      console.log(form);
      this.todoArray.push(form.todo);
      this.todoForm.resetForm();
    }
    else {
    alert("Todo Field Required!");
    }
  }
}