import { Component} from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  taskLists: { [key: string]: string[] } = {
    todo: ['Task 1', 'Task 2', 'Task 3'],
    wip: ['Task 4', 'Task 5'],
    done: ['Task 6', 'Task 7', 'Task 8']
  };

  onTaskDrop(event: CdkDragDrop<string[]>, listName: string) {
    if (event.previousContainer === event.container) {
      moveItemInArray(this.taskLists[listName], event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        this.taskLists[event.previousContainer.id],
        this.taskLists[listName],
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  addTask(listName: string) {
    const newTask = `New Task ${this.getNextTaskNumber(listName)}`;
    this.taskLists[listName].push(newTask);
  }

  removeTask(listName: string, index: number) {
    this.taskLists[listName].splice(index, 1);
  }

  private getNextTaskNumber(listName: string): number {
    return this.taskLists[listName].length + 1;
  }
 

}






    

  
 

  






