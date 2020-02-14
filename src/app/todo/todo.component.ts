import { Component, OnInit } from "@angular/core";
import { Todo } from "../interfaces/todo";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  todoArr: Todo[] = [
    { task: "fold clothes", completed: true },
    { task: "put clothes in dresser", completed: true },
    { task: "relax", completed: false },
    { task: "pet dog", completed: true },
    { task: "relax", completed: true },
    { task: "pet dog", completed: true }
  ];

  constructor() {}

  ngOnInit(): void {}
}
