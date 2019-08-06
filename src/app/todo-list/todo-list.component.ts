import { Component, OnInit } from '@angular/core';
import { WelcomeDataService } from '../service/data/welcome-data.service';
import { TodoService } from '../service/data/todo.service';
import { Todo } from './todo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[];
  message: string;

  // todos = [
  //   {
  //     id: 1,
  //     description: 'Learn to Dance'
  //   },
  //   {
  //     id: 2,
  //     description: 'Learn to sing'
  //   }]
  constructor(private dataService: WelcomeDataService,private todoService:TodoService,private router:Router) { }

  ngOnInit() {
   this.todoService.retrieveAllTodos('mes').subscribe((res)=>
    {

console.log(res);
this.todos=res;
    })
  }

  addNewData() {
    this.dataService.getData().subscribe((data) => {
      console.log(data);
      error => this.handleError(error)
    })
  }

  handleError(error: any) {
    this.dataService = error.error.message;
  }
  deleteTodo(id) {
    console.log(`delete todo ${id}` )
    this.todoService.deleteTodo('in28minutes', id).subscribe (
      response => {
        console.log(response);
        this.message = `Delete of Todo ${id} Successful!`;
        this.refreshTodos();
      }
    )
  }
  updateTodo(id) {
    console.log(`update ${id}`)
    this.router.navigate(['todos',id])
  }
  refreshTodos(){
    this.todoService.retrieveAllTodos('in28minutes').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }
}
