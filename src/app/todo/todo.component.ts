import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  taskList = [{detail:"Task 1",status:""},{detail:"Task 2",status:""}];
  task:any;
  edit=false;
  editIndex:any;
  addTask(){
    this.taskList.push({detail:this.task,status:""})
    this.task=""
  }
  editTask(index:any){
    this.edit=true;
    this.task = this.taskList[index].detail;
    this.editIndex = index;
  }
  saveTask(){
    this.taskList[this.editIndex].detail=this.task;
    this.task="";
    this.edit=false;
  }
  deleteTask(index:any){
    this.taskList.splice(index,1);
  }
  markDone(index:any){
    if(this.taskList[index].status=="done"){
      this.taskList[index].status="";
    }else{
      this.taskList[index].status="done";
    }
  }

}
