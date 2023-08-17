import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray,transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  // todos: string[] = [];
  // newTodo: string = '';
  // addTodo(){
  //   if(this.newTodo.trim()!==''){
  //     this.todos.push(this.newTodo)
  //     this.newTodo='';
  //   }
  // }
  // removeTodo(index:number){
  //   console.log(index);
  //   this.todos.splice(index, 1);
  // }

  todo = ['databinding', 'html', 'react', 'js'];

  done = ['java', 'jira', 'css', 'angular', 'phython'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }




//   drop(event:CdkDragDrop<string[]>){
//     if(event.previousContainer === event.container){
//       moveItemInArray(event.container.data,event.previousIndex,event.currentIndex);
// }
// else {
//   transferArrayItem(event.previousContainer.data,event.container.data,event.previousIndex,event.currentIndex);
// }
// }

}
