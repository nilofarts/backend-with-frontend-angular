import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/todo-list/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {


  constructor(
    private http:HttpClient
  ) { }

  retrieveAllTodos(username) {
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
    //console.log("Execute Hello World Bean Service")
  }
  deleteTodo(username, id){
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`);
  }
  updateTodo(username, id, todo){
    return this.http.put(
          `http://localhost:8080/users/users/${username}/todos/${id}`
                , todo);
  }

  createTodo(username, todo){
    return this.http.post(
              `http://localhost:8080/users/users/${username}/todos`
                , todo);
  }
}
