import { Component} from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  // taskLists: { [key: string]: string[] } = {
  //   todo: ['Task 1', 'Task 2', 'Task 3'],
  //   wip: ['Task 4', 'Task 5'],
  //   done: ['Task 6', 'Task 7', 'Task 8']
  // };

  // onTaskDrop(event: CdkDragDrop<string[]>, listName: string) {
  //   moveItemInArray(this.taskLists[listName], event.previousIndex, event.currentIndex);
  // }

  // addTask(listName: string) {
  //   const newTask = `New Task ${this.getNextTaskNumber(listName)}`;
  //   this.taskLists[listName].push(newTask);
  // }

  // private getNextTaskNumber(listName: string): number {
  //   return this.taskLists[listName].length + 1;
  // }

  taskLists: { [key: string]: string[] } = {
    todo: ['Task 1', 'Task 2', 'Task 3'],
    wip: ['Task 4', 'Task 5'],
    done: ['Task 6', 'Task 7', 'Task 8']
  };


  onTaskDrop(event: CdkDragDrop<string[]>, listName: string) {
    if (event.previousContainer === event.container) {
      // Reorder within the same column
      moveItemInArray(this.taskLists[listName], event.previousIndex, event.currentIndex);
    } else {
      // Move between columns
      transferArrayItem(
        this.taskLists[event.previousContainer.id],
        this.taskLists[listName],
        event.previousIndex,
        event.currentIndex
      );
    }
  }


  // onTaskDrop(event: CdkDragDrop<string[]>, listName: string) {
  //   moveItemInArray(this.taskLists[listName], event.previousIndex, event.currentIndex);
  // }

  addTask(listName: string) {
    const newTask = `New Task ${this.getNextTaskNumber(listName)}`;
    this.taskLists[listName].push(newTask);
  }

  private getNextTaskNumber(listName: string): number {
    return this.taskLists[listName].length + 1;
  }
}


    

  // todo = ['databinding', 'html', 'react', 'js'];

  // done = ['java', 'jira', 'css', 'angular', 'phython'];

  // drop(event: CdkDragDrop<string[]>) {
  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //   } else {
  //     transferArrayItem(
  //       event.previousContainer.data,
  //       event.container.data,
  //       event.previousIndex,
  //       event.currentIndex,
  //     );
  //   }

 

  






